var ExportedClass = module.exports = Backbone.Collection.extend();

var ToolModel = require('../../../model/rules/parts/toolModel');

var ToolCollection = Backbone.Collection.extend({
    model: ToolModel
});

_.extend(ExportedClass, ToolCollection);
ExportedClass.prototype = ToolCollection.prototype;