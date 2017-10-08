var templates = require('./footerView.html');

var FooterView = Backbone.View.extend({
    className: 'footer-view',

    render: function() {
        var html = templates.footerView();
        this.$el.html(html);

        return this;
    }
});

module.exports = FooterView;