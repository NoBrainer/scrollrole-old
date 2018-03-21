var templates = require('./backgroundEditorView.html');

var BackgroundEditorView = Backbone.View.extend({
    className: 'editorView backgroundEditorView',

    initialize: function(options) {
        options = options || {};

        this.model = options.model;
    },

    render: function() {
        var html = templates.scaffold({ name: this.model.getName() });
        this.$el.html(html);

        //TODO: render the form

        return this;
    },

    cleanup: function() {
    },

    remove: function() {
        this.cleanup();
        Backbone.View.prototype.remove.apply(this, arguments);
    }
});

module.exports = BackgroundEditorView;