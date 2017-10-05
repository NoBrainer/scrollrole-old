var UnlockableModel = Backbone.Model.extend({
    defaults: {
        abilityScoreAdjustments: [],//List of AbilityScoreAdjustmentModels
        choices: [],                //List of ChoiceModels
        condition: null,            //ConditionModel
        features: [],               //List of FeatureModels
        proficiencies: [],          //List of ProficiencyModels
        speed: null                 //Number
    },

    initialize: function(attrs, options) {
        //TODO: parse some parts into models
    },

    getAbilityScoreAdjustments: function() {
        return this.get(UnlockableModel.fields.ABILITY_SCORE_ADJUSTMENTS);
    },

    getChoices: function() {
        return this.get(UnlockableModel.fields.CHOICES);
    },

    getCondition: function() {
        return this.get(UnlockableModel.fields.CONDITION);
    },

    getFeatures: function() {
        return this.get(UnlockableModel.fields.FEATURES);
    },

    getProficiencies: function() {
        return this.get(UnlockableModel.fields.PROFICIENCIES);
    },

    getSpeed: function() {
        return this.get(UnlockableModel.fields.SPEED);
    }
},{
    fields: {
        ABILITY_SCORE_ADJUSTMENTS: 'abilityScoreAdjustments',
        CHOICES: 'choices',
        CONDITION: 'condition',
        FEATURES: 'features',
        PROFICIENCIES: 'proficiencies',
        SPEED: 'speed'
    }
});

module.exports = UnlockableModel;