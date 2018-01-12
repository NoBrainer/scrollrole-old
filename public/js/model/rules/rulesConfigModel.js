var ExportedClass = module.exports = Backbone.Model.extend();

var AppStateModel = require('../appStateModel');
var ArmorCollection = require('../../collection/rules/parts/armorCollection');
var BackgroundCollection = require('../../collection/rules/backgroundCollection');
var ClassCollection = require('../../collection/rules/classCollection');
var EquipmentPackCollection = require('../../collection/rules/parts/equipmentPackCollection');
var FeatCollection = require('../../collection/rules/parts/featCollection');
var FeatureCollection = require('../../collection/rules/parts/featureCollection');
var GearCollection = require('../../collection/rules/parts/gearCollection');
var LanguageCollection = require('../../collection/rules/parts/languageCollection');
var ProficiencyCollection = require('../../collection/rules/parts/proficiencyCollection');
var RaceCollection = require('../../collection/rules/raceCollection');
var SpellCollection = require('../../collection/rules/parts/spellCollection');
var ToolCollection = require('../../collection/rules/parts/toolCollection');
var WeaponCollection = require('../../collection/rules/parts/weaponCollection');
var YamlParser = require('../../controller/yamlParser');

var RulesConfigModel = Backbone.Model.extend({
    defaults: {
        armor: null,                //ArmorCollection
        backgrounds: null,          //BackgroundCollection
        backgroundFeatures: null,   //BackgroundFeatureCollection
        classes: null,              //ClassCollection
        equipmentPacks: null,       //EquipmentPackCollection
        feats: null,                //FeatCollection
        gear: null,                 //GearCollection
        languages: null,            //LanguageCollection
        proficiencies: null,        //ProficiencyCollection
        races: null,                //RaceCollection
        spells: null,               //SpellCollection
        tools: null,                //ToolCollection
        weapons: null               //WeaponCollection
    },

    initialize: function(attrs, options) {
        attrs = attrs || {};

        var setupCollection = _.bind(function(fieldName, CollectionClass) {
            this.set(fieldName, new CollectionClass(attrs[fieldName] || [], {parse: true}));
        }, this);

        setupCollection(RulesConfigModel.fields.ARMOR, ArmorCollection);
        setupCollection(RulesConfigModel.fields.BACKGROUNDS, BackgroundCollection);
        setupCollection(RulesConfigModel.fields.BACKGROUND_FEATURES, FeatureCollection);
        setupCollection(RulesConfigModel.fields.CLASSES, ClassCollection);
        setupCollection(RulesConfigModel.fields.EQUIPMENT_PACKS, EquipmentPackCollection);
        setupCollection(RulesConfigModel.fields.FEATS, FeatCollection);
        setupCollection(RulesConfigModel.fields.GEAR, GearCollection);
        setupCollection(RulesConfigModel.fields.LANGUAGES, LanguageCollection);
        setupCollection(RulesConfigModel.fields.PROFICIENCIES, ProficiencyCollection);
        setupCollection(RulesConfigModel.fields.RACES, RaceCollection);
        setupCollection(RulesConfigModel.fields.SPELLS, SpellCollection);
        setupCollection(RulesConfigModel.fields.TOOLS, ToolCollection);
        setupCollection(RulesConfigModel.fields.WEAPONS, WeaponCollection);
    },

    fetchDefaults: function() {
        var deferred = $.Deferred();

        loadAndParse('/resources/config/default.yaml')
            .done(_.bind(function(json) {
                json = json || {};
                this.setBackgrounds(json.backgrounds);
                this.setClasses(json.classes);
                this.setRaces(json.races);
                var lists = json.lists || {};
                this.setArmor(lists.armor);
                this.setBackgroundFeatures(lists.backgroundFeatures);
                this.setEquipmentPacks(lists.equipmentPacks);
                this.setFeats(lists.feats);
                this.setGear(lists.gear);
                this.setLanguages(lists.languages);
                this.setProficiencies(lists.proficiencies);
                this.setSpells(lists.spells);
                this.setTools(lists.tools);
                this.setWeapons(lists.weapons);
                deferred.resolve();
            }, this));

        return deferred.promise();
    },

    getArmor: function() {
        return this.get(RulesConfigModel.fields.ARMOR);
    },

    setArmor: function(armorModels) {
        this.getArmor().reset(armorModels || []);
        return this;
    },

    getBackgrounds: function() {
        return this.get(RulesConfigModel.fields.BACKGROUNDS);
    },

    setBackgrounds: function(backgroundModels) {
        this.getBackgrounds().reset(backgroundModels || []);
        return this;
    },

    getBackgroundFeatures: function() {
        return this.get(RulesConfigModel.fields.BACKGROUND_FEATURES);
    },

    setBackgroundFeatures: function(backgroundFeatureModels) {
        this.getBackgroundFeatures().reset(backgroundFeatureModels || []);
        return this;
    },

    getClasses: function() {
        return this.get(RulesConfigModel.fields.CLASSES);
    },

    setClasses: function(classModels) {
        this.getClasses().reset(classModels || []);
        return this;
    },

    getCollection: function(name) {
        switch(name) {
            case RulesConfigModel.fields.ARMOR:
                return this.getArmor();
            case RulesConfigModel.fields.BACKGROUND_FEATURES:
                return this.getBackgroundFeatures();
            case RulesConfigModel.fields.BACKGROUNDS:
                return this.getBackgrounds();
            case RulesConfigModel.fields.CLASSES:
                return this.getClasses();
            case RulesConfigModel.fields.EQUIPMENT_PACKS:
                return this.getEquipmentPacks();
            case RulesConfigModel.fields.FEATS:
                return this.getFeats();
            case RulesConfigModel.fields.GEAR:
                return this.getGear();
            case RulesConfigModel.fields.LANGUAGES:
                return this.getLanguages();
            case RulesConfigModel.fields.PROFICIENCIES:
                return this.getProficiencies();
            case RulesConfigModel.fields.RACES:
                return this.getRaces();
            case RulesConfigModel.fields.SPELLS:
                return this.getSpells();
            case RulesConfigModel.fields.TOOLS:
                return this.getTools();
            case RulesConfigModel.fields.WEAPONS:
                return this.getWeapons();
            default:
                return null;
        }
    },

    getEquipmentPacks: function() {
        return this.get(RulesConfigModel.fields.EQUIPMENT_PACKS);
    },

    setEquipmentPacks: function(equipmentPackModels) {
        this.getEquipmentPacks().reset(equipmentPackModels || []);
        return this;
    },

    getFeats: function() {
        return this.get(RulesConfigModel.fields.FEATS);
    },

    setFeats: function(featModels) {
        this.getFeats().reset(featModels || []);
        return this;
    },

    getGear: function() {
        return this.get(RulesConfigModel.fields.GEAR);
    },

    setGear: function(gearModels) {
        this.getGear().reset(gearModels || []);
        return this;
    },

    getLanguages: function() {
        return this.get(RulesConfigModel.fields.LANGUAGES);
    },

    setLanguages: function(languageModels) {
        this.getLanguages().reset(languageModels || []);
        return this;
    },

    getProficiencies: function() {
        return this.get(RulesConfigModel.fields.PROFICIENCIES);
    },

    setProficiencies: function(proficiencyModels) {
        this.getProficiencies().reset(proficiencyModels || []);
        return this;
    },

    getRaces: function() {
        return this.get(RulesConfigModel.fields.RACES);
    },

    setRaces: function(raceModels) {
        this.getRaces().reset(raceModels || []);
        return this;
    },

    getSpells: function() {
        return this.get(RulesConfigModel.fields.SPELLS);
    },

    setSpells: function(spellModels) {
        this.getSpells().reset(spellModels || []);
        return this;
    },

    getSpellsForClass: function(className) {
        var spellCollection = this.getSpells();
        return spellCollection.getModelsByClass(className);
    },

    getTools: function() {
        return this.get(RulesConfigModel.fields.TOOLS);
    },

    setTools: function(toolModels) {
        this.getTools().reset(toolModels || []);
        return this;
    },

    getWeapons: function() {
        return this.get(RulesConfigModel.fields.WEAPONS);
    },

    setWeapons: function(weaponModels) {
        this.getWeapons().reset(weaponModels || []);
        return this;
    }
},{
    fields: {
        ARMOR: 'armor',
        BACKGROUND_FEATURES: 'backgroundFeatures',
        BACKGROUNDS: 'backgrounds',
        CLASSES: 'classes',
        EQUIPMENT_PACKS: 'equipmentPacks',
        FEATS: 'feats',
        GEAR: 'gear',
        LANGUAGES: 'languages',
        PROFICIENCIES: 'proficiencies',
        RACES: 'races',
        SPELLS: 'spells',
        TOOLS: 'tools',
        WEAPONS: 'weapons'
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