var ExportedClass = module.exports = Backbone.Collection.extend();

var WeaponModel = require('../../../model/rules/parts/weaponModel');

var WeaponCollection = Backbone.Collection.extend({
    model: WeaponModel
});

_.extend(ExportedClass, WeaponCollection);
ExportedClass.prototype = WeaponCollection.prototype;