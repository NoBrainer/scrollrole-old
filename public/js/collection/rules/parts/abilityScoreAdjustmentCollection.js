var AbilityScoreAdjustmentModel = require('../../../model/rules/parts/abilityScoreAdjustmentModel');

var AbilityScoreAdjustmentCollection = Backbone.Collection.extend({
    model: AbilityScoreAdjustmentModel
},{
    parseModel: function(attrs, options) {
        return new AbilityScoreAdjustmentModel(attrs, options);
    }
});

module.exports = AbilityScoreAdjustmentCollection;