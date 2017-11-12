var ExportedClass = module.exports = Backbone.Collection.extend();

var LanguageModel = require('../../../model/rules/parts/languageModel');

var LanguageCollection = Backbone.Collection.extend({
    model: LanguageModel
});

_.extend(ExportedClass, LanguageCollection);
ExportedClass.prototype = LanguageCollection.prototype;