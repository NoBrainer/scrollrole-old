var ChoicesPreviewView = require('../../part/previewer/choices/choicesPreviewView');
var DescriptionPreviewView = require('../../part/previewer/description/descriptionPreviewView');
var EquipmentPreviewView = require('../../part/previewer/equipment/equipmentPreviewView');
var FeaturesPreviewView = require('../../part/previewer/features/featuresPreviewView');
var PreviewerView = require('../../part/previewer/previewerView');
var ProficienciesPreviewView = require('../../part/previewer/proficiencies/proficienciesPreviewView');
var TextPreviewView = require('../../part/previewer/text/textPreviewView');

var BackgroundPreviewerView = PreviewerView.extend({
    className: PreviewerView.prototype.className + ' background-previewer-view',

    initialize: function(options) {
        options = options || {};

        options.section = 'backgrounds';
        options.rowIds = ['name', 'description', 'proficiencies', 'equipment', 'features', 'choices'];

        PreviewerView.prototype.initialize.call(this, options);
    },

    populateViews: function() {
        this.populateView(TextPreviewView, '#preview-name',
                { label: 'Name', text: this.model.getName() });
        this.populateView(DescriptionPreviewView, '#preview-description',
                { paragraphs: this.model.getDescription() });
        this.populateView(ProficienciesPreviewView, '#preview-proficiencies',
                { collection: this.model.getProficiencies() });
        this.populateView(EquipmentPreviewView, '#preview-equipment',
                { equipment: this.model.getEquipment() });
        this.populateView(FeaturesPreviewView, '#preview-features',
                { collection: this.model.getFeatures() });
        this.populateView(ChoicesPreviewView, '#preview-choices',
                { collection: this.model.getChoices() });
    }
});

module.exports = BackgroundPreviewerView;