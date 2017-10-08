var AbilityScoreAdjustmentCollection = require('../collection/abilityScoreAdjustmentCollection');
var FeatureCollection = require('../collection/featureCollection');
var ProficiencyCollection = require('../collection/proficiencyCollection');

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

        //TODO: handle 'from' and 'use'

        var CollectionClass = null;
        if (attrs.type === ChoiceModel.types.ABILITY_SCORE_ADJUSTMENT) {
            CollectionClass = AbilityScoreAdjustmentCollection;
        } else if (attrs.type === ChoiceModel.types.FEATURE) {
            CollectionClass = FeatureCollection;
        } else if (attrs.type === ChoiceModel.types.PROFICIENCY) {
            CollectionClass = ProficiencyCollection;
        }

        if (CollectionClass) {
            var models = _.map(attrs.options, CollectionClass.parseModel) || [];
            this.set(ChoiceModel.fields.OPTIONS, new CollectionClass(models));
        } else {
            this.set(ChoiceModel.fields.TYPE, ChoiceModel.types.EQUIPMENT);
            this.set(ChoiceModel.fields.OPTIONS, attrs.options);
        }
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