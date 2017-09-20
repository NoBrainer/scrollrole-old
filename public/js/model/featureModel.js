var Backbone = require('backbone');

var FeatureModel = Backbone.Model.extend({
    defaults: {
        description: null,
        name: null
    },

    initialize: function(attrs, options) {},

    getDescription: function() {
        return this.get(FeatureModel.fields.DESCRIPTION);
    },

    getName: function() {
        return this.get(FeatureModel.fields.NAME);
    }
},{
    fields: {
        DESCRIPTION: 'description',
        NAME: 'name'
    }
});

module.exports = FeatureModel;