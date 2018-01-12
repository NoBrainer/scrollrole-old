var ExportedClass = module.exports = Backbone.Model.extend();

var AppStateModel = require('../../appStateModel');
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
        options = options || {};

        var spellList = attrs.spellList || [];
        this.set(SpellCastingModel.fields.SPELL_LIST, new SpellCollection(spellList, {parse: true}));

        // If we didn't provide a non-empty spell list, look up the list for the class
        if (_.isEmpty(spellList) && options.className) {
            AppStateModel.getInitialSetupPromise().done(_.bind(function() {
                this.setSpellList(AppStateModel.getRulesConfig().getSpellsForClass(options.className));
            }, this));
        }

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
        return this.getSpellList().isEmpty() && this.getSpellSlots().isEmpty() && !this.getCantripsKnown() && !this.getSpellsKnown();
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