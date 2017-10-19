var ExportedClass = module.exports = Backbone.Collection.extend();

var SpellModel = require('../../../model/rules/parts/spellModel');

var SpellCollection = Backbone.Collection.extend({
    model: SpellModel
});

_.extend(ExportedClass, SpellCollection);
ExportedClass.prototype = SpellCollection.prototype;