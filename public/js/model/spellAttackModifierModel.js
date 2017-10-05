var SpellAttackModifierModel = Backbone.Model.extend({
    defaults: {
        modifier: null,         //Number
        proficiencyBonus: null  //Number
    },

    getModifier: function() {
        return this.getValue(SpellAttackModifierModel.fields.MODIFIER);
    },

    getProficiencyBonus: function() {
        return this.getValue(SpellAttackModifierModel.fields.PROFICIENCY_BONUS);
    },

    getValue: function() {
        return this.getModifier() + this.getProficiencyBonus();
    }
},{
    fields: {
        MODIFIER: 'modifier',
        PROFICIENCY_BONUS: 'proficiencyBonus'
    }
});

module.exports = SpellAttackModifierModel;