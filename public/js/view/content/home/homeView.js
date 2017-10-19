var templates = require('./homeView.html');

var HomeView = Backbone.View.extend({
    className: 'home-view',

    render: function() {
        var html = templates.scaffold();
        this.$el.html(html);

        return this;
    }
});

module.exports = HomeView;