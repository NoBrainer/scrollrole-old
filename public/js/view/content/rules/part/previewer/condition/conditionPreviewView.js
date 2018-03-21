var templates = require('./conditionPreviewView.html');

var ConditionPreviewView = Backbone.View.extend({
    className: 'conditionPreviewView',

    initialize: function(options) {
        options = options || {};

        this.model = options.model;
    },

    render: function() {
        var html = templates.scaffold();
        this.$el.html(html);

        this.renderConditionRow('Level', this.getModel().getLevel());
        this.renderConditionRow('Feature', this.getModel().getFeature());
        this.renderConditionRow('Proficiency', this.getModel().getProficiency());

        return this;
    },

    renderConditionRow: function(label, text) {
        if (!text) return;
        var html = templates.conditionRow({ label: label, text: text });
        this.$('.conditionList').append(html);
    },

    getModel: function() {
        return this.model;
    },

    isEmpty: function() {
        return false;
    }
});

module.exports = ConditionPreviewView;