var FeatureModel = require('../../../model/rules/parts/featureModel');

var FeatureCollection = Backbone.Collection.extend({
    model: FeatureModel
},{
    parseModel: function(attrs, options) {
        return new FeatureModel(attrs, options);
    }
});

module.exports = FeatureCollection;