var ExportedClass = module.exports = Backbone.Collection.extend();

var ChoiceModel = require('../../../model/rules/parts/choiceModel');

var ChoiceCollection = Backbone.Collection.extend({
    model: ChoiceModel
});

_.extend(ExportedClass, ChoiceCollection);
ExportedClass.prototype = ChoiceCollection.prototype;