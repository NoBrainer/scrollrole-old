var ExportedClass = module.exports = Backbone.Collection.extend();

var SpellModel = require('../../../model/rules/parts/spellModel');

var SpellCollection = Backbone.Collection.extend({
    model: SpellModel,

    getModelsByClass: function(className) {
        return this.reduce(function(memo, model) {
            var classes = model.getClasses();
            if (_.contains(classes, className)) {
                memo.push(model);
            }
            return memo;
        }, []);
    }
});

_.extend(ExportedClass, SpellCollection);
ExportedClass.prototype = SpellCollection.prototype;