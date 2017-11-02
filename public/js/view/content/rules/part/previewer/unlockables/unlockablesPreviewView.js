var AdjustmentsPreviewView = require('../adjustments/adjustmentsPreviewView');
var ChoicesPreviewView = require('../choices/choicesPreviewView');
var ConditionPreviewView = require('../condition/conditionPreviewView');
var FeaturesPreviewView = require('../features/featuresPreviewView');
var ProficienciesPreviewView = require('../proficiencies/proficienciesPreviewView');
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
        this.renderFeatures($container, unlockableModel.getFeatures());
        this.renderProficiencies($container, unlockableModel.getProficiencies());
        this.renderChoices($container, unlockableModel.getChoices());
        this.renderAdjustments($container, unlockableModel.getAdjustments());
        this.renderSpeed($container, unlockableModel.getSpeed());
    },

    renderAdjustments: function($container, adjustments) {
        if (adjustments.isEmpty()) return;
        this.appendViewToContainer($container, new AdjustmentsPreviewView({ collection: adjustments }));
    },

    renderChoices: function($container, choices) {
        if (choices.isEmpty()) return;
        this.appendViewToContainer($container, new ChoicesPreviewView({ collection: choices }));
    },

    renderCondition: function($container, condition) {
        this.appendViewToContainer($container, new ConditionPreviewView({ model: condition }));
    },

    renderFeatures: function($container, features) {
        if (features.isEmpty()) return;
        this.appendViewToContainer($container, new FeaturesPreviewView({ collection: features }));
    },

    renderProficiencies: function($container, proficiencies) {
        if (proficiencies.isEmpty()) return;
        this.appendViewToContainer($container, new ProficienciesPreviewView({ collection: proficiencies }));
    },

    renderSpeed: function($container, speed) {
        if (_.isEmpty(speed)) return;
        this.appendViewToContainer($container, new TextPreviewView({ label: 'Speed', text: speed }));
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