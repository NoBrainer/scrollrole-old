var FeatureModel = Backbone.Model.extend({
    defaults: {
        description: [],        //List of Strings
        name: null,             //String
        shortDescription: null  //String
    },

    getDescription: function() {
        return this.get(FeatureModel.fields.DESCRIPTION);
    },

    getName: function() {
        return this.get(FeatureModel.fields.NAME);
    },

    getShortDescription: function() {
        return this.get(FeatureModel.fields.SHORT_DESCRIPTION);
    }
},{
    fields: {
        DESCRIPTION: 'description',
        NAME: 'name',
        SHORT_DESCRIPTION: 'shortDescription'
    }
});

module.exports = FeatureModel;