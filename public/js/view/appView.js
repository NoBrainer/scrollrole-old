var templates = require('./appView.html');

var AppView = Backbone.View.extend({
    className: 'app-view',

    initialize: function() {},

    render: function() {
        var html = templates.appView({ title: "Scroll Role" });
        this.$el.html(html);
        return this;
    }
});

module.exports = AppView;