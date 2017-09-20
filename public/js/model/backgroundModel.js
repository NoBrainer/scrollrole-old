var Backbone = require('backbone');

var BackgroundModel = Backbone.Model.extend({
    defaults: {
        features: [],
        name: null,
        proficiencies: []
    },

    initialize: function(attrs, options) {},

    getFeatures: function() {
        return this.get(BackgroundModel.fields.FEATURES);
    },

    getName: function() {
        return this.get(BackgroundModel.fields.NAME);
    },

    getProficiencies: function() {
        return this.get(BackgroundModel.fields.PROFICIENCIES);
    }
},{
    fields: {
        FEATURES: 'features',
        NAME: 'name',
        PROFICIENCIES: 'proficiencies'
    }
});

module.exports = BackgroundModel;