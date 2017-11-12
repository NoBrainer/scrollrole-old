var ExportedClass = module.exports = Backbone.Model.extend();

var AdjustmentCollection = require('../../../collection/rules/parts/adjustmentCollection');
var AppStateModel = require('../../../model/appStateModel');
var FeatureCollection = require('../../../collection/rules/parts/featureCollection');
var ListSelectorModel = require('../../../model/rules/parts/listSelectorModel');
var ProficiencyCollection = require('../../../collection/rules/parts/proficiencyCollection');

var ChoiceModel = Backbone.Model.extend({
    defaults: {
        allowDuplicate: false,  //Boolean
        description: [],        //List of Strings
        from: null,             //ListSelectorModel
        name: null,             //String
        options: [],            //List of Strings/Collection of Models
        pick: null,             //Number
        type: null,             //String
        use: null               //String
    },

    initialize: function(attrs, options) {
        attrs = attrs || {};

        this.parseAttributes(attrs);
    },

    parseAttributes: function(attrs) {
        this.set(ChoiceModel.fields.ALLOW_DUPLICATE, attrs.allowDuplicate);
        this.set(ChoiceModel.fields.DESCRIPTION, attrs.description);
        this.set(ChoiceModel.fields.NAME, attrs.name);
        this.set(ChoiceModel.fields.PICK, attrs.pick);
        this.set(ChoiceModel.fields.TYPE, attrs.type);

        if (attrs.from) {
            this.buildOptionsFromList(attrs.from);
        } else {
            this.parseOptions(attrs.options);
        }
    },

    parseOptions: function(choiceOptions) {
        var CollectionClass = null;
        if (this.isTypeAdjustment()) {
            CollectionClass = AdjustmentCollection;
        } else if (this.isTypeFeature()) {
            CollectionClass = FeatureCollection;
        } else if (this.isTypeProficiency()) {
            CollectionClass = ProficiencyCollection;
        }

        if (CollectionClass) {
            this.set(ChoiceModel.fields.OPTIONS, new CollectionClass(choiceOptions || [], {parse: true}));
        } else {
            this.set(ChoiceModel.fields.TYPE, ChoiceModel.types.EQUIPMENT);
            this.set(ChoiceModel.fields.OPTIONS, choiceOptions);
        }
    },

    buildOptionsFromList: function(from) {
        var listSelectorModel = new ListSelectorModel(from);
        this.set(ChoiceModel.fields.FROM, listSelectorModel);

        // Parse from the list as soon as the setup has finished
        AppStateModel.getInitialSetupPromise().done(_.bind(function() {
            this.parseOptions(listSelectorModel.buildList());
        }, this));
    },

    getAllowDuplicate: function() {
        return this.get(ChoiceModel.fields.ALLOW_DUPLICATE);
    },

    getDescription: function() {
        return this.get(ChoiceModel.fields.DESCRIPTION);
    },

    getFrom: function() {
        return this.get(ChoiceModel.fields.FROM);
    },

    getName: function() {
        return this.get(ChoiceModel.fields.NAME);
    },

    getOptions: function() {
        return this.get(ChoiceModel.fields.OPTIONS);
    },

    setOptions: function(optionModels) {
        if (this.getType() === ChoiceModel.types.EQUIPMENT) {
            this.set(ChoiceModel.fields.EQUIPMENT, optionModels);
        } else {
            this.getOptions().reset(optionModels || []);
        }
        return this;
    },

    getPick: function() {
        return this.get(ChoiceModel.fields.PICK);
    },

    getType: function() {
        return this.get(ChoiceModel.fields.TYPE);
    },

    isTypeAdjustment: function() {
        return this.getType() === ChoiceModel.types.ADJUSTMENT;
    },

    isTypeFeature: function() {
        return this.getType() === ChoiceModel.types.FEATURE;
    },

    isTypeProficiency: function() {
        return this.getType() === ChoiceModel.types.PROFICIENCY;
    },

    getUse: function() {
        return this.get(ChoiceModel.fields.USE);
    }
},{
    fields: {
        ALLOW_DUPLICATE: 'allowDuplicate',
        DESCRIPTION: 'description',
        FROM: 'from',
        NAME: 'name',
        OPTIONS: 'options',
        PICK: 'pick',
        TYPE: 'type',
        USE: 'use'
    },

    types: {
        ADJUSTMENT: 'abilityScoreAdjustment',
        EQUIPMENT: 'equipment',
        FEATURE: 'feature',
        PROFICIENCY: 'proficiency'
    }
});

_.extend(ExportedClass, ChoiceModel);
ExportedClass.prototype = ChoiceModel.prototype;