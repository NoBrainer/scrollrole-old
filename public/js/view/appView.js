var AppStateModel = require('../model/appStateModel');
var templates = require('./appView.html');

var AppView = Backbone.View.extend({
    className: 'app-view',

    initialize: function() {
        this.listenTo(AppStateModel, 'change:' + AppStateModel.fields.MODE, function(model, mode) {
            this.render();
        });
    },

    render: function() {
        this.cleanup();

        var title = "";
        switch(AppStateModel.getMode()) {
            case AppStateModel.modes.BUILDER:
                title = "Character Builder"; break;
            case AppStateModel.modes.RULES:
                title = "Game Rules"; break;
            case AppStateModel.modes.HOME:
                title = "Home";
        }

        var html = templates.appView({ title: title });
        this.$el.html(html);

        return this;
    },

    cleanup: function() {
        this.$el.empty();
    },

    remove: function() {
        this.cleanup();
        Backbone.View.prototype.remove.apply(this, arguments);
    }
});

module.exports = AppView;