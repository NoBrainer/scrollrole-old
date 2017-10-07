var ChoiceCollection = require('../collection/choiceCollection');
var UnlockableCollection = require('../collection/unlockableCollection');

var FeatureModel = Backbone.Model.extend({
    defaults: {
        choices: null,          //ChoiceCollection
        description: [],        //List of Strings
        name: null,             //String
        shortDescription: null, //String
        unlockables: null       //UnlockableCollection
    },

    initialize: function(attrs, options) {
        attrs = attrs || {};

        var choiceModels = _.map(attrs.choices, ChoiceCollection.parseModel) || [];
        this.set(FeatureModel.fields.CHOICES, new ChoiceCollection(choiceModels));

        var unlockableModels = _.map(attrs.unlockables, UnlockableCollection.parseModel) || [];
        this.set(FeatureModel.fields.UNLOCKABLES, new UnlockableCollection(unlockableModels));
    },

    getChoices: function() {
        return this.get(FeatureModel.fields.CHOICES);
    },

    setChoices: function(choiceModels) {
        this.getChoices().reset(choiceModels || []);
        return this;
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
    },

    setUnlockables: function(unlockableModels) {
        this.getUnlockables().reset(unlockableModels || []);
        return this;
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