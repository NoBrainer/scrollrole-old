var AdjustmentsPreviewView = require('../../part/previewer/adjustments/adjustmentsPreviewView');
var ChoicesPreviewView = require('../../part/previewer/choices/choicesPreviewView');
var DescriptionPreviewView = require('../../part/previewer/description/descriptionPreviewView');
var FeaturesPreviewView = require('../../part/previewer/features/featuresPreviewView');
var PreviewerView = require('../../part/previewer/previewerView');
var ProficienciesPreviewView = require('../../part/previewer/proficiencies/proficienciesPreviewView');
var SubracesPreviewView = require('../../part/previewer/subraces/subracesPreviewView');
var TextPreviewView = require('../../part/previewer/text/textPreviewView');

var RacePreviewerView = PreviewerView.extend({
    className: PreviewerView.prototype.className + ' background-previewer-view',

    initialize: function(options) {
        options = options || {};

        options.section = 'races';
        options.rowIds = ['name', 'description', 'adjustments', 'age', 'alignment', 'size', 'speed', 'features',
                'proficiencies', 'choices', 'subraces'];

        PreviewerView.prototype.initialize.call(this, options);
    },

    populateViews: function() {
        this.populateView(TextPreviewView, '#preview-name',
                { label: 'Name', text: this.model.getName() });
        this.populateView(DescriptionPreviewView, '#preview-description',
                { paragraphs: this.model.getDescription() });
        this.populateView(AdjustmentsPreviewView, '#preview-adjustments',
                { collection: this.model.getAdjustments() });
        this.populateView(TextPreviewView, '#preview-age',
                { label: 'Age', text: this.model.getAge() });
        this.populateView(TextPreviewView, '#preview-alignment',
                { label: 'Alignment', text: this.model.getAlignment() });
        this.populateView(TextPreviewView, '#preview-size',
                { label: 'Size', text: this.model.getSize() });
        this.populateView(TextPreviewView, '#preview-speed',
                { label: 'Speed', text: this.model.getSpeed() + 'ft' });
        this.populateView(FeaturesPreviewView, '#preview-features',
                { collection: this.model.getFeatures() });
        this.populateView(ProficienciesPreviewView, '#preview-proficiencies',
                { collection: this.model.getProficiencies() });
        this.populateView(ChoicesPreviewView, '#preview-choices',
                { collection: this.model.getChoices() });
        this.populateView(SubracesPreviewView, '#preview-subraces',
            { collection: this.model.getSubraces() });
    }
});

module.exports = RacePreviewerView;