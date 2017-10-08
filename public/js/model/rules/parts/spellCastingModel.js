var SpellCastingModel = Backbone.Model.extend({
    defaults: {
        ability: null,              //String
        cantripsKnown: null,        //Number
        description: [],            //List of Strings
        focus: null,                //String
        spells: [],                 //List of SpellModels
        spellsKnown: null,          //Number
        spellSlots: null            //SpellSlotsModel
    },

    initialize: function(attrs, options) {
        //TODO: parse some parts into models
        //TODO: listen to proficiencyBonus and abilityModifier changes
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
        //TODO: proficiencyBonus + abilityModifier
        return 2 + 0;
    },

    getSpells: function() {
        return this.get(SpellCastingModel.fields.SPELLS);
    },

    getSpellSaveDC: function() {
        return this.getSpellAttackModifier() + 8;
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
        SPELLS: 'spells',
        SPELLS_KNOWN: 'spellsKnown',
        SPELL_SLOTS: 'spellSlots'
    }
});

module.exports = SpellCastingModel;