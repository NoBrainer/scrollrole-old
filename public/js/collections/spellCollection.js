var SpellModel = require('../model/spellModel');

var SpellCollection = Backbone.Collection.extend({
    model: SpellModel
});

module.exports = SpellCollection;