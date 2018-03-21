var templates = require('./textPreviewView.html');

var TextPreviewView = Backbone.View.extend({
    className: 'textPreviewView',

    initialize: function(options) {
        options = options || {};

        this.text = options.text;
        this.label = options.label;
    },

    render: function() {
        var html = templates.scaffold({ label: this.getLabel(), text: this.getText() });
        this.$el.html(html);

        return this;
    },

    getLabel: function() {
        return this.label;
    },

    getText: function() {
        return this.text;
    },

    isEmpty: function() {
        return false;
    }
});

module.exports = TextPreviewView;