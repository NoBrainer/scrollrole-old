var ExportedClass = module.exports = Backbone.Collection.extend();

var SubRaceModel = require('../../../model/rules/parts/subRaceModel');

var SubRaceCollection = Backbone.Collection.extend({
    model: SubRaceModel
});

_.extend(ExportedClass, SubRaceCollection);
ExportedClass.prototype = SubRaceCollection.prototype;