var ExportedClass = module.exports = Backbone.Model.extend();

var WeaponModel = Backbone.Model.extend({
    defaults: {
        cost: null,             //String
        damage: null,           //String
        damageType: null,       //String
        name: null,             //String
        range: null,            //String
        tags: [],               //List of Strings
        versatileDamage: null,  //String
        weight: "0 lb"          //String
    },

    getCost: function() {
        return this.get(WeaponModel.fields.COST);
    },

    getDamage: function() {
        return this.get(WeaponModel.fields.DAMAGE);
    },

    getDamageType: function() {
        return this.get(WeaponModel.fields.DAMAGE_TYPE);
    },

    getName: function() {
        return this.get(WeaponModel.fields.NAME);
    },

    getRange: function() {
        return this.get(WeaponModel.fields.RANGE);
    },

    getTags: function() {
        return this.get(WeaponModel.fields.TAGS);
    },

    getVersatileDamage: function() {
        return this.get(WeaponModel.fields.VERSATILE_DAMAGE);
    },

    getWeight: function() {
        return this.get(WeaponModel.fields.WEIGHT);
    }
},{
    fields: {
        COST: 'cost',
        DAMAGE: 'damage',
        DAMAGE_TYPE: 'damageType',
        NAME: 'name',
        RANGE: 'range',
        TAGS: 'tags',
        VERSATILE_DAMAGE: 'versatileDamage',
        WEIGHT: 'weight'
    },

    tagOptions: ['ammunition', 'finesse', 'heavy', 'light', 'loading', 'martial', 'melee', 'ranged', 'reach', 'simple',
        'special', 'thrown', 'two-handed', 'versatile']
});

_.extend(ExportedClass, WeaponModel);
ExportedClass.prototype = WeaponModel.prototype;