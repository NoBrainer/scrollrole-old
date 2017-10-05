var FeatureModel = Backbone.Model.extend({
    defaults: {
        choices: [],            //List of ChoiceModels
        description: [],        //List of Strings
        name: null,             //String
        shortDescription: null, //String
        unlockables: []         //List of UnlockableModels
    },

    initialize: function(attrs, options) {
        //TODO: parse some parts into models
    },

    getChoices: function() {
        return this.get(FeatureModel.fields.CHOICES);
    },

    getDescription: function() {
        return this.get(FeatureModel.fields.DESCRIPTION);
    },

    getName: function() {
        return this.get(FeatureModel.fields.NAME);
    },

    getShortDescription: function() {
        return this.get(FeatureModel.fields.SHORT_DESCRIPTION);
    },

    getUnlockables: function() {
        return this.get(FeatureModel.fields.UNLOCKABLES);
    }
},{
    fields: {
        CHOICES: 'choices',
        DESCRIPTION: 'description',
        NAME: 'name',
        SHORT_DESCRIPTION: 'shortDescription',
        UNLOCKABLES: 'unlockables'
    }
});

module.exports = FeatureModel;