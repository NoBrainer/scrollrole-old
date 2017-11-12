var ExportedClass = module.exports = Backbone.Collection.extend();

var ArmorModel = require('../../../model/rules/parts/armorModel');

var ArmorCollection = Backbone.Collection.extend({
    model: ArmorModel
});

_.extend(ExportedClass, ArmorCollection);
ExportedClass.prototype = ArmorCollection.prototype;