var templates = require('./homeView.html');

var HomeView = Backbone.View.extend({
    className: 'home-view',

    initialize: function(options) {
        options = options || {};

        this.promise = $.ajax('/resources/lastUpdated.txt');
    },

    render: function() {
        this.promise.done(_.bind(function(lastUpdated) {
            var html = templates.scaffold({ lastUpdated: lastUpdated });
            this.$el.html(html);
        }, this));

        return this;
    }
});

module.exports = HomeView;