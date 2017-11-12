var ExportedClass = module.exports = Backbone.Model.extend();

var GearModel = Backbone.Model.extend({
    defaults: {
        cost: null,     //String
        name: null,     //String
        per: "1",       //String
        weight: '0 lb'  //String
    },

    getCost: function() {
        return this.get(GearModel.fields.COST);
    },

    getName: function() {
        return this.get(GearModel.fields.NAME);
    },

    getPer: function() {
        return this.get(GearModel.fields.PER);
    },

    getWeight: function() {
        return this.get(GearModel.fields.WEIGHT);
    }
},{
    fields: {
        COST: 'cost',
        NAME: 'name',
        PER: 'per',
        WEIGHT: 'weight'
    }
});

_.extend(ExportedClass, GearModel);
ExportedClass.prototype = GearModel.prototype;