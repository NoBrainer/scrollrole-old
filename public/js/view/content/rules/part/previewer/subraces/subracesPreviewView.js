var AdjustmentsPreviewView = require('../adjustments/adjustmentsPreviewView');
var ChoicesPreviewView = require('../choices/choicesPreviewView');
var DescriptionPreviewView = require('../description/descriptionPreviewView');
var FeaturesPreviewView = require('../features/featuresPreviewView');
var ProficienciesPreviewView = require('../proficiencies/proficienciesPreviewView');
var TextPreviewView = require('../text/textPreviewView');
var templates = require('./subracesPreviewView.html');

var SubracesPreviewView = Backbone.View.extend({
    className: 'subracesPreviewView',

    initialize: function(options) {
        options = options || {};

        this.collection = options.collection;
    },

    render: function() {
        this.cleanup();

        var html = templates.scaffold();
        this.$el.html(html);

        this.getCollection().each(_.bind(this.renderSubrace, this));

        return this;
    },

    renderSubrace: function(subraceModel) {
        this.$('.subraceList').append(templates.subraceRow());
        var $container = this.$('.subraceListItem:last .g_container');

        this.renderName($container, subraceModel.getName());
        this.renderDescription($container, subraceModel.getDescription());
        this.renderAdjustments($container, subraceModel.getAdjustments());
        this.renderFeatures($container, subraceModel.getFeatures());
        this.renderProficiencies($container, subraceModel.getProficiencies());
        this.renderChoices($container, subraceModel.getChoices());
    },

    renderAdjustments: function($container, adjustments) {
        if (adjustments.isEmpty()) return;
        this.appendViewToContainer($container, new AdjustmentsPreviewView({ collection: adjustments }));
    },

    renderChoices: function($container, choices) {
        if (choices.isEmpty()) return;
        this.appendViewToContainer($container, new ChoicesPreviewView({ collection: choices }));
    },

    renderDescription: function($container, descriptions) {
        if (_.isEmpty(descriptions)) return;
        this.appendViewToContainer($container, new DescriptionPreviewView({ paragraphs: descriptions }));
    },

    renderFeatures: function($container, features) {
        if (features.isEmpty()) return;
        this.appendViewToContainer($container, new FeaturesPreviewView({ collection: features }));
    },

    renderName: function($container, name) {
        this.appendViewToContainer($container, new TextPreviewView({ label: 'Name', text: name }));
    },

    renderProficiencies: function($container, proficiencies) {
        if (proficiencies.isEmpty()) return;
        this.appendViewToContainer($container, new ProficienciesPreviewView({ collection: proficiencies }));
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

module.exports = SubracesPreviewView;