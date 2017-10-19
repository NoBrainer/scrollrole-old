var ExportedClass = module.exports = Backbone.Collection.extend();

var ClassModel = require('../../model/rules/classModel');

var ClassCollection = Backbone.Collection.extend({
    model: ClassModel,

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

_.extend(ExportedClass, ClassCollection);
ExportedClass.prototype = ClassCollection.prototype;