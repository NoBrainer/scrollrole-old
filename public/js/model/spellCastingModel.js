var SpellCastingModel = Backbone.Model.extend({
    defaults: {
        ability: null,              //String
        cantripsKnown: null,        //Number
        description: [],            //List of Strings
        focus: null,                //String
        spellAttackModifier: null,  //SpellAttackModifierModel
        spells: [],                 //List of SpellModels
        spellSaveDC: null,          //SpellSaveDCModel
        spellsKnown: null,          //Number
        spellSlots: null            //SpellSlotsModel
    },

    initialize: function(attrs, options) {
        //TODO: parse some parts into models
    },

    getAbility: function() {
        return this.get(SpellCastingModel.fields.ABILITY);
    },

    getCantripsKnown: function() {
        return this.get(SpellCastingModel.fields.CANTRIPS_KNOWN);
    },

    getDescription: function() {
        return this.get(SpellCastingModel.fields.DESCRIPTION);
    },

    getFocus: function() {
        return this.get(SpellCastingModel.fields.FOCUS);
    },

    getSpellAttackModifier: function() {
        return this.get(SpellCastingModel.fields.SPELL_ATTACK_MODIFIER);
    },

    getSpells: function() {
        return this.get(SpellCastingModel.fields.SPELLS);
    },

    getSpellSaveDC: function() {
        return this.get(SpellCastingModel.fields.SPELL_SAVE_DC);
    },

    getSpellsKnown: function() {
        return this.get(SpellCastingModel.fields.SPELLS_KNOWN);
    },

    getSpellSlots: function() {
        return this.get(SpellCastingModel.fields.SPELL_SLOTS);
    }
},{
    fields: {
        ABILITY: 'ability',
        CANTRIPS_KNOWN: 'cantripsKnown',
        DESCRIPTION: 'description',
        FOCUS: 'focus',
        SPELL_ATTACK_MODIFIER: 'spellAttackModifier',
        SPELLS: 'spells',
        SPELL_SAVE_DC: 'spellSaveDC',
        SPELLS_KNOWN: 'spellsKnown',
        SPELL_SLOTS: 'spellSlots'
    }
});

module.exports = SpellCastingModel;