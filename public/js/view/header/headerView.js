var AppStateModel = require('../../model/appStateModel');
var templates = require('./headerView.html');

var HeaderView = Backbone.View.extend({
    className: 'g_pageContainer headerView',

    initialize: function(options) {
        this.minHorizontalWidth = 300;
        this.resizeFrequency = 250;

        this.listenTo(AppStateModel, 'change:' + AppStateModel.fields.MODE, function(model, mode) {
            this.selectTab();
        });
    },

    render: function() {
        this.cleanup();

        var html = templates.scaffold();
        this.$el.html(html);

        this.selectTab();
        this.handleResizing();

        return this;
    },

    selectTab: function() {
        this.$('.tab').removeClass('active');
        switch(AppStateModel.getMode()) {
            case AppStateModel.modes.BUILDER:
                this.$('.tab.builder').addClass('active'); break;
            case AppStateModel.modes.RULES:
                this.$('.tab.rules').addClass('active'); break;
            case AppStateModel.modes.HOME:
                this.$('.tab.home').addClass('active');
        }
    },

    handleResizing: function() {
        var onResize = _.bind(function(e) {
            var $tabs = this.$('.tabs');
            var width = $tabs.width();
            if (width > 0) {
                $tabs.toggleClass('vertical', width < this.minHorizontalWidth);
            } else {
                // Check again later, because the tabs are not on the screen yet
                setTimeout(onResize, this.resizeFrequency);
            }
        }, this);
        $(window).on(HeaderView.RESIZE_EVENT, _.throttle(onResize, this.resizeFrequency));
        onResize();
    },

    cleanup: function() {
        $(window).off(HeaderView.RESIZE_EVENT);
    },

    remove: function() {
        this.cleanup();
        Backbone.View.prototype.remove.apply(this, arguments);
    }
},{
    RESIZE_EVENT: 'resize.headerView'
});

module.exports = HeaderView;