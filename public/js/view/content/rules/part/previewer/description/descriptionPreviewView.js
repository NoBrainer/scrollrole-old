var templates = require('./descriptionPreviewView.html');

var DescriptionPreviewView = Backbone.View.extend({
    className: 'descriptionPreviewView',

    initialize: function(options) {
        options = options || {};

        this.paragraphs = options.paragraphs;
    },

    render: function() {
        var html = templates.scaffold({ paragraphs: this.getParagraphs() });
        this.$el.html(html);

        return this;
    },

    getParagraphs: function() {
        return this.paragraphs;
    },

    isEmpty: function() {
        return _.isEmpty(this.getParagraphs());
    }
});

module.exports = DescriptionPreviewView;