var ExportedClass = module.exports = Backbone.Collection.extend();

var RaceModel = require('../../model/rules/raceModel');

var RaceCollection = Backbone.Collection.extend({
    model: RaceModel,

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

_.extend(ExportedClass, RaceCollection);
ExportedClass.prototype = RaceCollection.prototype;