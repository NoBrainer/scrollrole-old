var ExportedClass = module.exports = Backbone.Collection.extend();

var AdjustmentModel = require('../../../model/rules/parts/adjustmentModel');

var AdjustmentCollection = Backbone.Collection.extend({
    model: AdjustmentModel
});

_.extend(ExportedClass, AdjustmentCollection);
ExportedClass.prototype = AdjustmentCollection.prototype;