var ExportedClass = module.exports = Backbone.Model.extend();

var EquipmentModel = Backbone.Model.extend({
    defaults: {
        amount: "1",    //String
        name: null      //String
    },

    getAmount: function() {
        return this.get(EquipmentModel.fields.AMOUNT);
    },

    getName: function() {
        return this.get(EquipmentModel.fields.NAME);
    }
},{
    fields: {
        AMOUNT: 'amount',
        NAME: 'name'
    }
});

_.extend(ExportedClass, EquipmentModel);
ExportedClass.prototype = EquipmentModel.prototype;