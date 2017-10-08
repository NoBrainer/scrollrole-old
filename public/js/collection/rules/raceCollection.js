var RaceModel = require('../../model/rules/raceModel');

var RaceCollection = Backbone.Collection.extend({
    model: RaceModel
},{
    parseModel: function(attrs, options) {
        return new RaceModel(attrs, options);
    }
});

module.exports = RaceCollection;