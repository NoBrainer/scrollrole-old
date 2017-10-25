var TextPreviewView = require('../text/textPreviewView');

var ProficiencyBonusPreviewView = TextPreviewView.extend({
    className: TextPreviewView.prototype.className + ' proficiency-bonus-preview-view',

    initialize: function(options) {
        options = options || {};

        var value = options.value || 0;
        options.text = value < 0 ? value : '+'+value;
        options.label = 'Proficiency Bonus';

        TextPreviewView.prototype.initialize.call(this, options);
    }
});

module.exports = ProficiencyBonusPreviewView;