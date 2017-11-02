var templates = require('./loadingView.html');

var LoadingView = Backbone.View.extend({
    className: 'loading-view',

    events: {
        'click .close': 'hide'
    },

    initialize: function(options) {
        this.defaultText = 'Loading...';
    },

    render: function() {
        this.$el.hide();

        var html = templates.scaffold();
        this.$el.html(html);

        return this;
    },

    setText: function(text) {
        text = _.isString(text) ? text : this.defaultText;
        this.$('.text').text(text);
    },

    hide: function() {
        this.toggle(false);
    },

    show: function(text) {
        this.toggle(true, text);
    },

    toggle: function(show, text) {
        this.setText(text);
        this.$el.toggle(show);
    }
});

var singletonInstance = new LoadingView();
module.exports = singletonInstance;