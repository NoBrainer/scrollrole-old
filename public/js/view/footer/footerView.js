var templates = require('./footerView.html');

var FooterView = Backbone.View.extend({
    className: 'page-container footer-view',

    render: function() {
        var html = templates.scaffold();
        this.$el.html(html);

        return this;
    }
});

module.exports = FooterView;