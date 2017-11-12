var ExportedClass = module.exports = Backbone.Collection.extend();

var EquipmentPackModel = require('../../../model/rules/parts/equipmentPackModel');

var EquipmentPackCollection = Backbone.Collection.extend({
    model: EquipmentPackModel
});

_.extend(ExportedClass, EquipmentPackCollection);
ExportedClass.prototype = EquipmentPackCollection.prototype;