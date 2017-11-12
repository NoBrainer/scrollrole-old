var ExportedClass = module.exports = Backbone.Collection.extend();

var FeatModel = require('../../../model/rules/parts/featModel');

var FeatCollection = Backbone.Collection.extend({
    model: FeatModel
});

_.extend(ExportedClass, FeatCollection);
ExportedClass.prototype = FeatCollection.prototype;