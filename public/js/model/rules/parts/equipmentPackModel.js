var ExportedClass = module.exports = Backbone.Model.extend();

var EquipmentCollection = require('../../../collection/rules/parts/equipmentCollection');

var EquipmentPackModel = Backbone.Model.extend({
    defaults: {
        items: [],  //EquipmentCollection
        name: null  //String
    },

    initialize: function(options) {
        options = options || {};

        this.set(EquipmentPackModel.fields.ITEMS, new EquipmentCollection(options.items || [], {parse: true}));
    },

    getItems: function() {
        return this.get(EquipmentPackModel.fields.ITEMS);
    },

    getName: function() {
        return this.get(EquipmentPackModel.fields.NAME);
    }
},{
    fields: {
        ITEMS: 'items',
        NAME: 'name'
    }
});

_.extend(ExportedClass, EquipmentPackModel);
ExportedClass.prototype = EquipmentPackModel.prototype;