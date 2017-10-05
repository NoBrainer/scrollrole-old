var AbilityScoreAdjustmentModel = Backbone.Model.extend({
    defaults: {
        ability: null,  //String
        modifier: null  //Number
    },

    getAbility: function() {
        return this.get(AbilityScoreAdjustmentModel.fields.ABILITY);
    },

    getModifier: function() {
        return this.getValue(AbilityScoreAdjustmentModel.fields.MODIFIER);
    }
},{
    fields: {
        ABILITY: 'ability',
        MODIFIER: 'modifier'
    }
});

module.exports = AbilityScoreAdjustmentModel;