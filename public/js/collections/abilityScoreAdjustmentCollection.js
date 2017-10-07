var AbilityScoreAdjustmentModel = require('../model/abilityScoreAdjustmentModel');

var AbilityScoreAdjustmentCollection = Backbone.Collection.extend({
    model: AbilityScoreAdjustmentModel
},{
    parseModel: function(attrs, options) {
        return new AbilityScoreAdjustmentModel(attrs, options);
    }
});

module.exports = AbilityScoreAdjustmentCollection;