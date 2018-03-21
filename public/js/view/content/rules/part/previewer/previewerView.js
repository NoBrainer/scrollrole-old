var templates = require('./previewerView.html');

var PreviewerView = Backbone.View.extend({
    className: 'previewerView',

    initialize: function(options) {
        options = options || {};

        this.section = options.section;
        this.model = options.model;
        this.rowIds = options.rowIds;
    },

    render: function() {
        this.cleanup();

        var html = templates.scaffold({
            section: this.section,
            name: this.model.getName(),
            rowIds: this.rowIds
        });
        this.$el.html(html);

        this.populateViews();

        return this;
    },

    populateViews: _.noop,

    populateView: function(ClassName, placeholderSelector, options) {
        var $parentEl = this.$(placeholderSelector);
        var view = new ClassName(options);
        if (view.isEmpty()) {
            $parentEl.empty().hide();
        } else {
            $parentEl.show().html(view.render().el);
            this.childViews.push(view);
        }
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

module.exports = PreviewerView;