var SpellSaveDCModel = Backbone.Model.extend({
    defaults: {
        base: 8,                //Number
        modifier: null,         //Number
        proficiencyBonus: null  //Number
    },

    getBase: function() {
        return this.get(SpellSaveDCModel.fields.BASE);
    },

    getModifier: function() {
        return this.getValue(SpellSaveDCModel.fields.MODIFIER);
    },

    getProficiencyBonus: function() {
        return this.getValue(SpellSaveDCModel.fields.PROFICIENCY_BONUS);
    },

    getValue: function() {
        return this.getBase() + this.getModifier() + this.getProficiencyBonus();
    }
},{
    fields: {
        BASE: 'base',
        MODIFIER: 'modifier',
        PROFICIENCY_BONUS: 'proficiencyBonus'
    }
});

module.exports = SpellSaveDCModel;