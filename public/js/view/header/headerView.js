var AppStateModel = require('../../model/appStateModel');
var templates = require('./headerView.html');

var HeaderView = Backbone.View.extend({
    className: 'header-view',

    initialize: function() {
        this.listenTo(AppStateModel, 'change:' + AppStateModel.fields.MODE, function(model, mode) {
            this.selectTab();
        });
    },

    render: function() {
        var html = templates.headerView();
        this.$el.html(html);

        this.selectTab();

        return this;
    },

    selectTab: function() {
        this.$('.tab').removeClass('active');
        switch(AppStateModel.getMode()) {
            case AppStateModel.modes.BUILDER:
                this.$('.tab.builder').addClass('active'); break;
            case AppStateModel.modes.RULES:
                this.$('.tab.rules').addClass('active'); break;
            default:
                this.$('.tab.home').addClass('active');
        }
    }
});

module.exports = HeaderView;