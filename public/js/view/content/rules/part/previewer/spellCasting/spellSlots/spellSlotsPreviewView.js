var templates = require('./spellSlotsPreviewView.html');

var SpellSlotsPreviewView = Backbone.View.extend({
    className: 'spell-slots-preview-view',

    initialize: function(options) {
        options = options || {};

        this.model = options.model;
        this.hideTitle = _.isBoolean(options.hideTitle) ? options.hideTitle : false;
    },

    render: function() {
        var html = templates.scaffold({ hideTitle: this.hideTitle });
        this.$el.html(html);

        this.renderDescriptionRow();
        this.renderSlotRows();

        return this;
    },

    renderDescriptionRow: function() {
        var paragraphs = this.getModel().getDescription();
        if (!paragraphs || _.isEmpty(paragraphs)) return;
        var html = templates.descriptionRow({ description: paragraphs });
        this.$('.spell-slots-list').append(html);
    },

    renderSlotRows: function() {
        this.renderSlotRow('Level 1', this.getModel().getL1());
        this.renderSlotRow('Level 2', this.getModel().getL2());
        this.renderSlotRow('Level 3', this.getModel().getL3());
        this.renderSlotRow('Level 4', this.getModel().getL4());
        this.renderSlotRow('Level 5', this.getModel().getL5());
        this.renderSlotRow('Level 6', this.getModel().getL6());
        this.renderSlotRow('Level 7', this.getModel().getL7());
        this.renderSlotRow('Level 8', this.getModel().getL8());
        this.renderSlotRow('Level 9', this.getModel().getL9());
    },

    renderSlotRow: function(level, numSlots) {
        if (_.isEmpty(level) || numSlots < 1) return;
        var html = templates.slotRow({ title: level, text: numSlots });
        this.$('.spell-slots-list').append(html);
    },

    getModel: function() {
        return this.model;
    },

    isEmpty: function() {
        return this.getModel().isEmpty();
    }
});

module.exports = SpellSlotsPreviewView;