var ChoicesPreviewView = require('../../part/previewer/choices/choicesPreviewView');
var DescriptionPreviewView = require('../../part/previewer/description/descriptionPreviewView');
var EquipmentPreviewView = require('../../part/previewer/equipment/equipmentPreviewView');
var FeaturesPreviewView = require('../../part/previewer/features/featuresPreviewView');
var PreviewerView = require('../../part/previewer/previewerView');
var ProficienciesPreviewView = require('../../part/previewer/proficiencies/proficienciesPreviewView');
var TextPreviewView = require('../../part/previewer/text/textPreviewView');

var ClassPreviewerView = PreviewerView.extend({
    className: PreviewerView.prototype.className + ' class-previewer-view',

    initialize: function(options) {
        options = options || {};

        options.section = 'classes';
        options.rowIds = ['name', 'description', 'hit-dice', 'base-hp', 'proficiencies', 'proficiency-bonus',
            'equipment', 'features', 'spells', 'spell-casting', 'choices', 'unlockables'];

        PreviewerView.prototype.initialize.call(this, options);
    },

    populateViews: function() {
        this.populateView(TextPreviewView, '#preview-name',
                { label: 'Name', text: this.model.getName() });
        this.populateView(DescriptionPreviewView, '#preview-description',
                { paragraphs: this.model.getDescription() });
        this.populateView(TextPreviewView, '#preview-hit-dice',
                { label: 'Hit Dice', text: this.model.getHitDice() });
        this.populateView(TextPreviewView, '#preview-base-hp',
                { label: 'Base Hit Points', text: this.model.getBaseHitPoints() });
        this.populateView(ProficienciesPreviewView, '#preview-proficiencies',
                { collection: this.model.getProficiencies() });
        var proficiencyBonus = this.model.getProficiencyBonus();
        this.populateView(TextPreviewView, '#preview-proficiency-bonus',
                { label: 'Proficiency Bonus', text: (proficiencyBonus < 0 ? proficiencyBonus : '+'+proficiencyBonus) });
        this.populateView(EquipmentPreviewView, '#preview-equipment',
                { equipment: this.model.getEquipment() });
        this.populateView(FeaturesPreviewView, '#preview-features',
                { collection: this.model.getFeatures() });
        //TODO
        // this.populateView(SpellsPreviewView, '#preview-spells',
        //     { collection: this.model.getSpells() });
        this.$('#preview-spells').append("Spells: TODO");
        //TODO
        // this.populateView(SpellCastingPreviewView, '#preview-spell-casting',
        //     { collection: this.model.getSpellCasting() });
        this.$('#preview-spell-casting').append("Spell Casting: TODO");
        this.populateView(ChoicesPreviewView, '#preview-choices',
                { collection: this.model.getChoices() });
        //TODO
        // this.populateView(UnlockablesPreviewView, '#preview-unlockables',
        //     { collection: this.model.getUnlockables() });
        this.$('#preview-unlockables').append("Unlockables: TODO");
    }
});

module.exports = ClassPreviewerView;