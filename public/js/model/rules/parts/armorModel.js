var ExportedClass = module.exports = Backbone.Model.extend();

var ArmorModel = Backbone.Model.extend({
    defaults: {
        baseAC: null,           //Number
        cost: null,             //String
        maxModifier: null,      //Number
        modifier: null,         //String
        name: null,             //String
        stealthDisadv: false,   //Boolean
        strengthReq: 0,         //Number
        type: null,             //String
        weight: null            //String
    },

    getBaseAC: function() {
        return this.get(ArmorModel.fields.BASE_AC);
    },

    getCost: function() {
        return this.get(ArmorModel.fields.COST);
    },

    getMaxModifier: function() {
        return this.get(ArmorModel.fields.MAX_MODIFIER);
    },

    getModifier: function() {
        return this.get(ArmorModel.fields.MODIFIER);
    },

    getName: function() {
        return this.get(ArmorModel.fields.NAME);
    },

    hasStealthDisadv: function() {
        return this.get(ArmorModel.fields.STEALTH_DISADV);
    },

    getStrengthReq: function() {
        return this.get(ArmorModel.fields.STRENGTH_REQ);
    },

    getType: function() {
        return this.get(ArmorModel.fields.TYPE);
    },

    getWeight: function() {
        return this.get(ArmorModel.fields.WEIGHT);
    }
},{
    fields: {
        BASE_AC: 'baseAC',
        COST: 'cost',
        MAX_MODIFIER: 'maxModifier',
        MODIFIER: 'modifier',
        NAME: 'name',
        STEALTH_DISADV: 'stealthDisadv',
        STRENGTH_REQ: 'strengthReq',
        TYPE: 'type',
        WEIGHT: 'weight'
    }
});

_.extend(ExportedClass, ArmorModel);
ExportedClass.prototype = ArmorModel.prototype;