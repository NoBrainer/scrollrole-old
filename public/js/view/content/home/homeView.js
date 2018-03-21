var templates = require('./homeView.html');

var HomeView = Backbone.View.extend({
    className: 'homeView',

    render: function() {
        var html = templates.scaffold({ lastUpdated: Config.lastUpdated || '?' });
        this.$el.html(html);

        return this;
    }
});

module.exports = HomeView;