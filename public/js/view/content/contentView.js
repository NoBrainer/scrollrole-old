var AppStateModel = require('../../model/appStateModel');
var BuilderView = require('../../view/content/builder/builderView');
var HomeView = require('../../view/content/home/homeView');
var RulesView = require('../../view/content/rules/rulesView');
var templates = require('./contentView.html');

var ContentView = Backbone.View.extend({
    className: 'page-container content-view',

    initialize: function(options) {
        this.listenTo(AppStateModel, 'change:' + AppStateModel.fields.MODE, function(model, mode) {
            this.render();
        });
    },

    render: function() {
        this.cleanup();

        var html = templates.scaffold();
        this.$el.html(html);

        switch(AppStateModel.getMode()) {
            case AppStateModel.modes.BUILDER:
                this.childView = new BuilderView(); break;
            case AppStateModel.modes.RULES:
                this.childView = new RulesView(); break;
            case AppStateModel.modes.HOME:
                this.childView = new HomeView(); break;
            default:
                return this;
        }
        this.$('.content-wrapper').html(this.childView.render().$el);

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