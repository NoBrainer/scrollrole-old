var ExportedClass = module.exports = Backbone.Collection.extend();

var GearModel = require('../../../model/rules/parts/gearModel');

var GearCollection = Backbone.Collection.extend({
    model: GearModel
});

_.extend(ExportedClass, GearCollection);
ExportedClass.prototype = GearCollection.prototype;