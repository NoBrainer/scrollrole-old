var ChoicesPreviewView = require('../../part/previewer/choices/choicesPreviewView');
var DescriptionPreviewView = require('../../part/previewer/description/descriptionPreviewView');
var EquipmentPreviewView = require('../../part/previewer/equipment/equipmentPreviewView');
var FeaturesPreviewView = require('../../part/previewer/features/featuresPreviewView');
var PreviewerView = require('../../part/previewer/previewerView');
var ProficienciesPreviewView = require('../../part/previewer/proficiencies/proficienciesPreviewView');
var ProficiencyBonusPreviewView = require('../../part/previewer/proficiencyBonus/proficiencyBonusPreviewView');
var SpellCastingPreviewView = require('../../part/previewer/spellCasting/spellCastingPreviewView');
var TextPreviewView = require('../../part/previewer/text/textPreviewView');
var UnlockablesPreviewView = require('../../part/previewer/unlockables/unlockablesPreviewView');

var ClassPreviewerView = PreviewerView.extend({
    className: PreviewerView.prototype.className + ' class-previewer-view',

    initialize: function(options) {
        options = options || {};

        options.section = 'classes';
        options.rowIds = ['name', 'description', 'hit-dice', 'base-hp', 'proficiencies', 'proficiency-bonus',
            'equipment', 'features', 'spell-casting', 'choices', 'unlockables'];

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
        this.populateView(ProficiencyBonusPreviewView, '#preview-proficiency-bonus',
            { value: this.model.getProficiencyBonus() });
        this.populateView(EquipmentPreviewView, '#preview-equipment',
            { equipment: this.model.getEquipment() });
        this.populateView(FeaturesPreviewView, '#preview-features',
            { collection: this.model.getFeatures() });
        this.populateView(SpellCastingPreviewView, '#preview-spell-casting',
            { model: this.model.getSpellCasting() });
        this.populateView(ChoicesPreviewView, '#preview-choices',
            { collection: this.model.getChoices() });
        this.populateView(UnlockablesPreviewView, '#preview-unlockables',
            { collection: this.model.getUnlockables() });
    }
});

module.exports = ClassPreviewerView;