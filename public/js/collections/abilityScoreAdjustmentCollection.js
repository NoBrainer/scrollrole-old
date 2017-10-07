var AbilityScoreAdjustmentModel = require('../model/abilityScoreAdjustmentModel');

var AbilityScoreAdjustmentCollection = Backbone.Collection.extend({
    model: AbilityScoreAdjustmentModel
});

module.exports = AbilityScoreAdjustmentCollection;