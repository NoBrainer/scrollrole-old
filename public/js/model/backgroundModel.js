var BackgroundModel = Backbone.Model.extend({
    defaults: {
        choices: [],                    //List of ChoiceModels
        description: [],                //List of Strings
        equipment: [],                  //List of Strings
        features: [],                   //List of FeatureModels
        name: null,                     //String
        proficiencies: [],              //List of ProficiencyModels
        suggestedCharacteristics: null  //SuggestedCharacteristicsModel
    },

    initialize: function(attrs, options) {
        //TODO: parse some parts into models
    },

    getChoices: function() {
        return this.get(BackgroundModel.fields.CHOICES);
    },

    getDescription: function() {
        return this.get(BackgroundModel.fields.DESCRIPTION);
    },

    getEquipment: function() {
        return this.get(BackgroundModel.fields.EQUIPMENT);
    },

    getFeatures: function() {
        return this.get(BackgroundModel.fields.FEATURES);
    },

    getName: function() {
        return this.get(BackgroundModel.fields.NAME);
    },

    getProficiencies: function() {
        return this.get(BackgroundModel.fields.PROFICIENCIES);
    },

    getSuggestedCharacteristics: function() {
        return this.get(BackgroundModel.fields.SUGGESTED_CHARACTERISTICS);
    }
},{
    fields: {
        CHOICES: 'choices',
        DESCRIPTION: 'description',
        EQUIPMENT: 'equipment',
        FEATURES: 'features',
        NAME: 'name',
        PROFICIENCIES: 'proficiencies',
        SUGGESTED_CHARACTERISTICS: 'suggestedCharacteristics'
    }
});

module.exports = BackgroundModel;