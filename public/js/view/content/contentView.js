var AppStateModel = require('../../model/appStateModel');
var templates = require('./contentView.html');

var ContentView = Backbone.View.extend({
    className: 'page-container content-view',

    initialize: function() {
        this.listenTo(AppStateModel, 'change:' + AppStateModel.fields.MODE, function(model, mode) {
            this.render();
        });
    },

    render: function() {
        this.cleanup();

        switch(AppStateModel.getMode()) {
            case AppStateModel.modes.BUILDER:
                this.renderBuilder(); break;
            case AppStateModel.modes.RULES:
                this.renderRules(); break;
            default:
                this.renderHome();
        }

        return this;
    },

    renderBuilder: function() {
        //TODO: use a subview instead
        var html = templates.contentView({ title: 'Character Builder Content' });
        this.$el.html(html);

        return this;
    },

    renderHome: function() {
        //TODO: use a subview instead
        var html = templates.contentView({ title: 'Home Content' });
        this.$el.html(html);

        return this;
    },

    renderRules: function() {
        //TODO: use a subview instead
        var html = templates.contentView({ title: 'Rules Content' });
        this.$el.html(html);

        return this;
    },

    cleanup: function() {
        if (this.childView) {
            this.childView.remove();
        }
    },

    remove: function() {
        this.cleanup();
        Backbone.View.prototype.remove.apply(this, arguments);
    }
});

module.exports = ContentView;