var AdjustmentsPreviewView = require('../adjustments/adjustmentsPreviewView');
var ChoicesPreviewView = require('../choices/choicesPreviewView');
var ConditionPreviewView = require('../condition/conditionPreviewView');
var FeaturesPreviewView = require('../features/featuresPreviewView');
var ProficienciesPreviewView = require('../proficiencies/proficienciesPreviewView');
var ProficiencyBonusPreviewView = require('../proficiencyBonus/proficiencyBonusPreviewView');
var SpellCastingPreviewView = require('../spellCasting/spellCastingPreviewView');
var TextPreviewView = require('../text/textPreviewView');
var templates = require('./unlockablesPreviewView.html');

var UnlockablesPreviewView = Backbone.View.extend({
    className: 'unlockables-preview-view',

    initialize: function(options) {
        options = options || {};

        this.collection = options.collection;
    },

    render: function() {
        this.cleanup();

        var html = templates.scaffold();
        this.$el.html(html);

        this.getCollection().each(_.bind(this.renderUnlockable, this));

        return this;
    },

    renderUnlockable: function(unlockableModel) {
        this.$('.unlockable-list').append(templates.unlockableRow());
        var $container = this.$('.unlockable-list-item:last .container');

        this.renderCondition($container, unlockableModel.getCondition());
        this.renderProficiencyBonus($container, unlockableModel.getProficiencyBonus());
        this.renderFeatures($container, unlockableModel.getFeatures());
        this.renderProficiencies($container, unlockableModel.getProficiencies());
        this.renderChoices($container, unlockableModel.getChoices());
        this.renderAdjustments($container, unlockableModel.getAdjustments());
        this.renderSpeed($container, unlockableModel.getSpeed());
        this.renderSpellCasting($container, unlockableModel.getSpellCasting());
    },

    renderAdjustments: function($container, adjustmentCollection) {
        if (adjustmentCollection.isEmpty()) return;
        this.appendViewToContainer($container, new AdjustmentsPreviewView({ collection: adjustmentCollection }));
    },

    renderChoices: function($container, choiceCollection) {
        if (choiceCollection.isEmpty()) return;
        this.appendViewToContainer($container, new ChoicesPreviewView({ collection: choiceCollection }));
    },

    renderCondition: function($container, conditionModel) {
        this.appendViewToContainer($container, new ConditionPreviewView({ model: conditionModel }));
    },

    renderFeatures: function($container, featureCollection) {
        if (featureCollection.isEmpty()) return;
        this.appendViewToContainer($container, new FeaturesPreviewView({ collection: featureCollection }));
    },

    renderProficiencies: function($container, proficiencyCollection) {
        if (proficiencyCollection.isEmpty()) return;
        this.appendViewToContainer($container, new ProficienciesPreviewView({ collection: proficiencyCollection }));
    },

    renderProficiencyBonus: function($container, proficiencyBonus) {
        if (!proficiencyBonus || proficiencyBonus <= 0) return;
        this.appendViewToContainer($container, new ProficiencyBonusPreviewView({ value: proficiencyBonus }))
    },

    renderSpeed: function($container, speed) {
        if (!speed || speed <= 0) return;
        this.appendViewToContainer($container, new TextPreviewView({ label: 'Speed', text: speed }));
    },

    renderSpellCasting: function($container, spellCastingModel) {
        if (!spellCastingModel || spellCastingModel.isEmpty()) return;
        this.appendViewToContainer($container, new SpellCastingPreviewView({ model: spellCastingModel }))
    },

    appendViewToContainer: function($container, view) {
        $container.append(view.render().el);
        this.childViews.push(view);
    },

    getCollection: function() {
        return this.collection;
    },

    isEmpty: function() {
        return this.getCollection().isEmpty();
    },

    cleanup: function() {
        if (this.childViews) {
            _.each(this.childViews, function(childView) {
                childView.remove();
            });
        }
        this.childViews = [];
    },

    remove: function() {
        this.cleanup();
        Backbone.View.prototype.remove.apply(this, arguments);
    }
});

module.exports = UnlockablesPreviewView;