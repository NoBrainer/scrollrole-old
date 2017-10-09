var templates = require('./rulesView.html');

var RulesView = Backbone.View.extend({
    className: 'rules-view',

    render: function() {
        var html = templates.rulesView();
        this.$el.html(html);

        return this;
    }
});

module.exports = RulesView;