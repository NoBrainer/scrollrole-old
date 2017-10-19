var ExportedClass = module.exports = Backbone.Collection.extend();

var BackgroundModel = require('../../model/rules/backgroundModel');

var BackgroundCollection = Backbone.Collection.extend({
    model: BackgroundModel,

    getNames: function() {
        return this.map(function(model) {
            return model.getName();
        }) || [];
    },

    getModelByName: function(name) {
        return this.find(function(model) {
            return model.getName() === name;
        });
    }
});

_.extend(ExportedClass, BackgroundCollection);
ExportedClass.prototype = BackgroundCollection.prototype;