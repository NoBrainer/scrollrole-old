var AbilityScoreAdjustmentCollection = require('../../../collection/rules/parts/abilityScoreAdjustmentCollection');
var AppStateModel = require('../../../model/appStateModel');
var FeatureCollection = require('../../../collection/rules/parts/featureCollection');
var ListSelectorModel = require('../../../model/rules/parts/listSelectorModel');
var ProficiencyCollection = require('../../../collection/rules/parts/proficiencyCollection');

var ChoiceModel = Backbone.Model.extend({
    defaults: {
        allowDuplicate: false,  //Boolean
        description: [],        //List of Strings
        from: null,             //ListSelectorModel TODO: implement ListSelectorModel
        name: null,             //String
        options: [],            //List of Strings/Models
        pick: null,             //Number
        type: null,             //String
        use: null               //String
    },

    initialize: function(attrs, options) {
        attrs = attrs || {};

        if (attrs.from) {
            this.parseFromList(attrs.from);
        } else if (attrs.use) {
            this.parseUseObject(attrs.use);
        } else {
            this.parseOptions(attrs.options);
        }
    },

    parseOptions: function(choiceOptions) {
        var CollectionClass = null;
        if (this.isTypeAbilityScoreAdjustment()) {
            CollectionClass = AbilityScoreAdjustmentCollection;
        } else if (this.isTypeFeature()) {
            CollectionClass = FeatureCollection;
        } else if (this.isTypeProficiency()) {
            CollectionClass = ProficiencyCollection;
        }

        if (CollectionClass) {
            var models = _.map(choiceOptions, CollectionClass.parseModel) || [];
            this.set(ChoiceModel.fields.OPTIONS, new CollectionClass(models));
        } else {
            this.set(ChoiceModel.fields.TYPE, ChoiceModel.types.EQUIPMENT);
            this.set(ChoiceModel.fields.OPTIONS, choiceOptions);
        }
    },

    parseFromList: function(from) {
        var listSelectorModel = new ListSelectorModel(from);
        this.set(ChoiceModel.fields.FROM, listSelectorModel);

        // Parse from the list as soon as the setup has finished
        AppStateModel.getInitialSetupPromise().done(_.bind(function() {
            this.parseOptions(listSelectorModel.buildList());
        }, this));
    },

    parseUseObject: function(use) {
        //TODO: handle 'use'
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

    isTypeAbilityScoreAdjustment: function() {
        return this.getType() === ChoiceModel.types.ABILITY_SCORE_ADJUSTMENT;
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
        ABILITY_SCORE_ADJUSTMENT: 'abilityScoreAdjustment',
        EQUIPMENT: 'equipment',
        FEATURE: 'feature',
        PROFICIENCY: 'proficiency'
    }
});

module.exports = ChoiceModel;