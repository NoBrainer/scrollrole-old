var ExportedClass = module.exports = Backbone.Collection.extend();

var FeatureModel = require('../../../model/rules/parts/featureModel');

var FeatureCollection = Backbone.Collection.extend({
    model: FeatureModel
});

_.extend(ExportedClass, FeatureCollection);
ExportedClass.prototype = FeatureCollection.prototype;