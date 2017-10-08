var SubRaceModel = require('../../../model/rules/parts/subRaceModel');

var SubRaceCollection = Backbone.Collection.extend({
    model: SubRaceModel
},{
    parseModel: function(attrs, options) {
        return new SubRaceModel(attrs, options);
    }
});

module.exports = SubRaceCollection;