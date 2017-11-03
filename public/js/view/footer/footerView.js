var LoadingView = require('../loading/loadingView');
var templates = require('./footerView.html');

var FooterView = Backbone.View.extend({
    className: 'page-container footer-view',

    events: {
        'click .d20-span': 'onClickD20'
    },

    onClickD20: function(e) {
        LoadingView.show('How did you know to click on me!?');
    },

    render: function() {
        var html = templates.scaffold();
        this.$el.html(html);

        return this;
    }
});

module.exports = FooterView;