var templates = require('./introductionSectionView.html');

var IntroductionSectionView = Backbone.View.extend({
    className: 'g_section introductionSectionView',

    render: function() {
        this.$el.html(templates.introductionContent());
        return this;
    }
});

module.exports = IntroductionSectionView;