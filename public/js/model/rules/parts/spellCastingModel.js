var ExportedClass = module.exports = Backbone.Model.extend();

var SpellCollection = require('../../../collection/rules/parts/spellCollection');
var SpellSlotsModel = require('../../../model/rules/parts/spellSlotsModel');

var SpellCastingModel = Backbone.Model.extend({
    defaults: {
        ability: null,              //String
        cantripsKnown: null,        //Number
        description: [],            //List of Strings
        focus: null,                //String
        spellList: null,            //SpellCollection
        spellsKnown: null,          //Number
        spellSlots: null            //SpellSlotsModel
    },

    initialize: function(attrs, options) {
        attrs = attrs || {};

        var spellModels = _.map(attrs.spellList, SpellCollection.create) || [];
        this.set(SpellCastingModel.fields.SPELL_LIST, new SpellCollection(spellModels));

        var spellSlotsModel = new SpellSlotsModel(attrs.spellSlots || {});
        this.set(SpellCastingModel.fields.SPELL_SLOTS, spellSlotsModel);
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

    isEmpty: function() {
        return this.getSpellList().isEmpty();
    },

    getFocus: function() {
        return this.get(SpellCastingModel.fields.FOCUS);
    },

    getSpellAttackModifier: function(proficiencyBonus, abilityModifier) {
        return proficiencyBonus + abilityModifier
    },

    getSpellList: function() {
        return this.get(SpellCastingModel.fields.SPELL_LIST);
    },

    setSpellList: function(spellModels) {
        this.getSpellList().reset(spellModels || []);
        return this;
    },

    getSpellSaveDC: function(proficiencyBonus, abilityModifier) {
        return 8 + this.getSpellAttackModifier(proficiencyBonus, abilityModifier);
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
        SPELL_LIST: 'spellList',
        SPELLS_KNOWN: 'spellsKnown',
        SPELL_SLOTS: 'spellSlots'
    }
});

_.extend(ExportedClass, SpellCastingModel);
ExportedClass.prototype = SpellCastingModel.prototype;