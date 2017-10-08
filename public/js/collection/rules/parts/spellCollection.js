var SpellModel = require('../../../model/rules/parts/spellModel');

var SpellCollection = Backbone.Collection.extend({
    model: SpellModel
},{
    parseModel: function(attrs, options) {
        return new SpellModel(attrs, options);
    }
});

module.exports = SpellCollection;