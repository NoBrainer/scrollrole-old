var _ = require('underscore');
var BaseModel = require('./baseModel');

var BackgroundModel = BaseModel.extend({
    defaults: _.extend({}, BaseModel.defaults, {
        features: [],
        proficiencies: []
    }),

    initialize: function(attrs, options) {},

    getFeatures: function() {
        return this.get(BackgroundModel.fields.FEATURES);
    },

    getProficiencies: function() {
        return this.get(BackgroundModel.fields.PROFICIENCIES);
    }
},{
    fields: _.extend({}, BaseModel.fields, {
        FEATURES: 'features',
        PROFICIENCIES: 'proficiencies'
    })
});

module.exports = BackgroundModel;