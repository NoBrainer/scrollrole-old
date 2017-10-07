var RaceModel = require('../model/raceModel');

var RaceCollection = Backbone.Collection.extend({
    model: RaceModel
});

module.exports = RaceCollection;