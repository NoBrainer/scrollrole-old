var ExportedClass = module.exports = Backbone.Model.extend();

var AppStateModel = require('../appStateModel');
var BackgroundCollection = require('../../collection/rules/backgroundCollection');
var ClassCollection = require('../../collection/rules/classCollection');
var RaceCollection = require('../../collection/rules/raceCollection');
var YamlParser = require('../../controller/yamlParser');

var RulesConfigModel = Backbone.Model.extend({
    defaults: {
        backgrounds: null,  //BackgroundCollection
        classes: null,      //ClassCollection
        lists: {},          //Object mapping
        objects: {},        //Object mapping
        races: null         //RaceCollection
    },

    initialize: function(attrs, options) {
        attrs = attrs || {};

        var backgroundModels = _.map(attrs.backgrounds, BackgroundCollection.create) || [];
        this.set(RulesConfigModel.fields.BACKGROUNDS, new BackgroundCollection(backgroundModels));

        var classModels = _.map(attrs.classes, ClassCollection.create) || [];
        this.set(RulesConfigModel.fields.CLASSES, new ClassCollection(classModels));

        var raceModels = _.map(attrs.races, RaceCollection.create) || [];
        this.set(RulesConfigModel.fields.RACES, new RaceCollection(raceModels));
    },

    fetchDefaults: function() {
        var deferred = $.Deferred();
        var remaining = 5;

        function updateCount() {
            remaining--;
            if (remaining == 0) deferred.resolve();
        }
        setupBackgrounds()
            .done(_.bind(this.setBackgrounds, this))
            .always(updateCount);
        setupClasses()
            .done(_.bind(this.setClasses, this))
            .always(updateCount);
        setupLists()
            .done(_.bind(this.setLists, this))
            .always(updateCount);
        setupObjects()
            .done(_.bind(this.setObjects, this))
            .always(updateCount);
        setupRaces()
            .done(_.bind(this.setRaces, this))
            .always(updateCount);

        return deferred.promise();
    },

    getBackgrounds: function() {
        return this.get(RulesConfigModel.fields.BACKGROUNDS);
    },

    setBackgrounds: function(backgroundModels) {
        this.getBackgrounds().reset(backgroundModels || []);
        return this;
    },

    getClasses: function() {
        return this.get(RulesConfigModel.fields.CLASSES);
    },

    setClasses: function(classModels) {
        this.getClasses().reset(classModels || []);
        return this;
    },

    getList: function(name) {
        return this.getLists()[name];
    },

    getLists: function() {
        return this.get(RulesConfigModel.fields.LISTS);
    },

    setLists: function(lists) {
        this.set(RulesConfigModel.fields.LISTS, lists);
        return this;
    },

    getObject: function(name) {
        return this.getObjects()[name];
    },

    getObjects: function() {
        return this.get(RulesConfigModel.fields.OBJECTS);
    },

    setObjects: function(objects) {
        this.set(RulesConfigModel.fields.OBJECTS, objects);
        return this;
    },

    getRaces: function() {
        return this.get(RulesConfigModel.fields.RACES);
    },

    setRaces: function(raceModels) {
        this.getRaces().reset(raceModels || []);
        return this;
    }
},{
    fields: {
        BACKGROUNDS: 'backgrounds',
        CLASSES: 'classes',
        LISTS: 'lists',
        OBJECTS: 'objects',
        RACES: 'races'
    },

    setup: function() {
        var deferred = $.Deferred();
        var instance = new RulesConfigModel();

        instance.fetchDefaults()
            .done(function() {
                AppStateModel.setRulesConfig(instance);
                deferred.resolve(instance);
            })
            .fail(deferred.reject);

        return deferred.promise();
    }
});

function setupBackgrounds() {
    return loadAndParse('/resources/backgrounds.yaml')
        .then(function(json) {
            var arr = _.isObject(json) ? json.backgrounds : json;
            arr = _.isArray(arr) ? arr : [];
            return _.map(arr, BackgroundCollection.create);
        });
}

function setupClasses() {
    return loadAndParse('/resources/classes.yaml')
        .then(function(json) {
            var arr = _.isObject(json) ? json.classes : json;
            arr = _.isArray(arr) ? arr : [];
            return _.map(arr, ClassCollection.create);
        });
}

function setupLists() {
    return loadAndParse('/resources/lists.yaml')
        .then(function(json) {
            if (!_.isObject(json) || _.isEmpty(json)) {
                return json;
            }
            //Note: Not parsed into Models to be lightweight and simple
            var lists = json.lists;
            lists = {
                backgroundFeatures: _.isArray(lists.backgroundFeatures) ? lists.backgroundFeatures : [],
                equipment: _.isArray(lists.equipment) ? lists.equipment : [],
                feats: _.isArray(lists.feats) ? lists.feats : [],
                proficiencies: _.isArray(lists.proficiencies) ? lists.proficiencies : [],
                spells: _.isArray(lists.spells) ? lists.spells : [],
                weapons: _.isArray(lists.weapons) ? lists.weapons : []
            };
            return lists;
        });
}

function setupObjects() {
    return loadAndParse('/resources/objects.yaml')
        .then(function(json) {
            return _.isObject(json) ? json.objects : {};
        });
}

function setupRaces() {
    return loadAndParse('/resources/races.yaml')
        .then(function(json) {
            var arr = _.isObject(json) ? json.races : json;
            arr = _.isArray(arr) ? arr : [];
            return _.map(arr, RaceCollection.create);
        });
}

function loadAndParse(pathToFile) {
    var deferred = $.Deferred();
    $.get(pathToFile)
        .done(function(text) {
            YamlParser.parseYaml(text).done(deferred.resolve).fail(deferred.reject);
        })
        .fail(function() {
            deferred.reject();
        });
    return deferred.promise();
}

_.extend(ExportedClass, RulesConfigModel);
ExportedClass.prototype = RulesConfigModel.prototype;