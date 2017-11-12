var ExportedClass = module.exports = Backbone.Collection.extend();

var EquipmentModel = require('../../../model/rules/parts/equipmentModel');

var EquipmentCollection = Backbone.Collection.extend({
    model: EquipmentModel
});

_.extend(ExportedClass, EquipmentCollection);
ExportedClass.prototype = EquipmentCollection.prototype;