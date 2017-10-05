var RaceModel = Backbone.Model.extend({
    defaults: {
        abilityScoreAdjustments: [],//List of AbilityScoreAdjustmentModels
        age: null,                  //String
        alignment: null,            //String
        choices: [],                //List of ChoiceModels
        description: [],            //List of Strings
        features: [],               //List of FeatureModels
        name: null,                 //String
        proficiencies: [],          //List of ProficiencyModels
        size: null,                 //String
        speed: null,                //Number
        subraces: []                //List of SubraceModels
    },

    initialize: function(attrs, options) {
        //TODO: parse some parts into models
    },

    getAbilityScoreAdjustments: function() {
        return this.get(RaceModel.fields.ABILITY_SCORE_ADJUSTMENTS);
    },

    getAge: function() {
        return this.get(RaceModel.fields.AGE);
    },

    getAlignment: function() {
        return this.get(RaceModel.fields.ALIGNMENT);
    },

    getChoices: function() {
        return this.get(RaceModel.fields.CHOICES);
    },

    getDescription: function() {
        return this.get(RaceModel.fields.DESCRIPTION);
    },

    getFeatures: function() {
        return this.get(RaceModel.fields.FEATURES);
    },

    getName: function() {
        return this.get(RaceModel.fields.NAME);
    },

    getProficiencies: function() {
        return this.get(RaceModel.fields.PROFICIENCIES);
    },

    getSize: function() {
        return this.get(RaceModel.fields.SIZE);
    },

    getSpeed: function() {
        return this.get(RaceModel.fields.SPEED);
    },

    getSubraces: function() {
        return this.get(RaceModel.fields.SUBRACES);
    }
},{
    fields: {
        ABILITY_SCORE_ADJUSTMENTS: 'abilityScoreAdjustments',
        AGE: 'age',
        ALIGNMENT: 'alignment',
        CHOICES: 'choices',
        DESCRIPTION: 'description',
        FEATURES: 'features',
        NAME: 'name',
        PROFICIENCIES: 'proficiencies',
        SIZE: 'size',
        SPEED: 'speed',
        SUBRACES: 'subraces'
    }
});

module.exports = RaceModel;