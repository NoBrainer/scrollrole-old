var ClassModel = Backbone.Model.extend({
    defaults: {
        baseHitPoints: null,    //Number
        choices: [],            //List of ChoiceModels
        description: [],        //List of Strings
        equipment: [],          //List of Strings
        features: [],           //List of FeatureModels
        hitDice: null,          //String
        name: null,             //String
        proficiencies: [],      //List of ProficiencyModels
        proficiencyBonus: null, //Number
        spellCasting: null,     //SpellCastingModel
        spellList: [],          //List of SpellModels
        unlockables: []         //List of UnlockableModels
    },

    initialize: function(attrs, options) {
        //TODO: parse some parts into models
    },

    getBaseHitPoints: function() {
        return this.get(ClassModel.fields.BASE_HIT_POINTS);
    },

    getChoices: function() {
        return this.get(ClassModel.fields.CHOICES);
    },

    getDescription: function() {
        return this.get(ClassModel.fields.DESCRIPTION);
    },

    getEquipment: function() {
        return this.get(ClassModel.fields.EQUIPMENT);
    },

    getFeatures: function() {
        return this.get(ClassModel.fields.FEATURES);
    },

    getHitDice: function() {
        return this.get(ClassModel.fields.HIT_DICE);
    },

    getName: function() {
        return this.get(ClassModel.fields.NAME);
    },

    getProficiencies: function() {
        return this.get(ClassModel.fields.PROFICIENCIES);
    },

    getProficiencyBonus: function() {
        return this.get(ClassModel.fields.PROFICIENCY_BONUS);
    },

    getSpellCasting: function() {
        return this.get(ClassModel.fields.SPELL_CASTING);
    },

    getSpellList: function() {
        return this.get(ClassModel.fields.SPELL_LIST);
    },

    getUnlockables: function() {
        return this.get(ClassModel.fields.UNLOCKABLES);
    }
},{
    fields: {
        BASE_HIT_POINTS: 'baseHitPoints',
        CHOICES: 'choices',
        DESCRIPTION: 'description',
        EQUIPMENT: 'equipment',
        FEATURES: 'features',
        HIT_DICE: 'hitDice',
        NAME: 'name',
        PROFICIENCIES: 'proficiencies',
        PROFICIENCY_BONUS: 'proficiencyBonus',
        SPELL_CASTING: 'spellCasting',
        SPELL_LIST: 'spellList',
        UNLOCKABLES: 'unlockables'
    }
});

module.exports = ClassModel;