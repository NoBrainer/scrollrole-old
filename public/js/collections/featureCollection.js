var FeatureModel = require('../model/featureModel');

var FeatureCollection = Backbone.Collection.extend({
    model: FeatureModel
});

module.exports = FeatureCollection;