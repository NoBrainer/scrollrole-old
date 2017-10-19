var FeatureCollection = require('../../../../../../collection/rules/parts/featureCollection');
var FeatureModel = require('../../../../../../model/rules/parts/featureModel');
var templates = require('./featuresPreviewView.html');

var FeaturesPreviewView = Backbone.View.extend({
    className: 'features-preview-view',

    initialize: function(options) {
        options = options || {};

        this.collection = options.collection;
        this.list = options.list;
        this.hideTitle = _.isBoolean(options.hideTitle) ? options.hideTitle : false;

        if (!this.collection && this.list) {
            var models = _.map(this.list, function(item) {
                return new FeatureModel({
                    name: item.name,
                    description: item.description
                });
            });
            this.collection = new FeatureCollection(models);
        }
    },

    render: function() {
        var html = templates.scaffold({ hideTitle: this.hideTitle });
        this.$el.html(html);

        this.getCollection().each(_.bind(this.renderFeature, this));

        return this;
    },

    renderFeature: function(featureModel) {
        var html = templates.featureRow({ name: featureModel.getName(), description: featureModel.getDescription() });
        this.$('.feature-list').append(html);
    },

    getCollection: function() {
        return this.collection;
    },

    isEmpty: function() {
        return this.getCollection().isEmpty();
    }
});

module.exports = FeaturesPreviewView;