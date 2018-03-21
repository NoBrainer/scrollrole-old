var SpellListPreviewView = require('./spellList/spellListPreviewView');
var SpellSlotsPreviewView = require('./spellSlots/spellSlotsPreviewView');
var templates = require('./spellCastingPreviewView.html');

var SpellCastingPreviewView = Backbone.View.extend({
    className: 'spellCastingPreviewView',

    initialize: function(options) {
        options = options || {};

        this.model = options.model;
    },

    render: function() {
        this.cleanup();

        var html = templates.scaffold();
        this.$el.html(html);

        this.renderDescriptionRow();
        this.renderTextRow('Ability', this.getModel().getAbility());
        this.renderTextRow('Focus', this.getModel().getFocus());
        this.renderNumberRow('Cantrips Known', this.getModel().getCantripsKnown());
        this.renderNumberRow('Spells Known', this.getModel().getSpellsKnown());
        this.renderSpellSlots();
        this.renderSpellList();

        return this;
    },

    renderTextRow: function(title, text) {
        if (_.isEmpty(title) || _.isEmpty(text)) return;
        var html = templates.textRow({ title: title, text: text });
        this.$('.spellCastingList').append(html);
    },

    renderNumberRow: function(title, number) {
        if (_.isEmpty(title) || number < 1) return;
        this.renderTextRow(title, ""+number);
    },

    renderDescriptionRow: function() {
        var paragraphs = this.getModel().getDescription();
        if (!paragraphs || _.isEmpty(paragraphs)) return;
        var html = templates.descriptionRow({ description: paragraphs });
        this.$('.spellCastingList').append(html);
    },

    renderSpellSlots: function() {
        var spellSlotsModel = this.getModel().getSpellSlots();
        if (!spellSlotsModel || spellSlotsModel.isEmpty()) return;

        var view = new SpellSlotsPreviewView({ model: spellSlotsModel, hideTitle: true });
        var html = templates.htmlRow({ title: 'Spell Slots', contentHtml: view.render().$el.html() });
        this.$('.spellCastingList').append(html);
        this.childViews.push(view);
    },

    renderSpellList: function() {
        var spellCollection = this.getModel().getSpellList();
        if (!spellCollection || spellCollection.isEmpty()) return;

        var view = new SpellListPreviewView({ collection: spellCollection, hideTitle: true });
        var html = templates.htmlRow({ title: 'Spell List', contentHtml: view.render().$el.html() });
        this.$('.spellCastingList').append(html);
        this.childViews.push(view);
    },

    getModel: function() {
        return this.model;
    },

    isEmpty: function() {
        return this.getModel().isEmpty();
    },

    cleanup: function() {
        if (this.childViews) {
            _.each(this.childViews, function(view) {
                view.remove();
            });
        }
        this.childViews = [];
    },

    remove: function() {
        this.cleanup();
        Backbone.View.prototype.remove.apply(this, arguments);
    }
});

module.exports = SpellCastingPreviewView;