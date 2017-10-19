var templates = require('./adjustmentsPreviewView.html');

var AdjustmentsPreviewView = Backbone.View.extend({
    className: 'adjustments-preview-view',

    initialize: function(options) {
        options = options || {};

        this.collection = options.collection;
        this.hideTitle = _.isBoolean(options.hideTitle) ? options.hideTitle : false;
    },

    render: function() {
        var html = templates.scaffold({
            hideTitle: this.hideTitle,
            listString: this.renderAdjustmentList()
        });
        this.$el.html(html);

        return this;
    },

    renderAdjustmentList: function() {
        return this.getCollection().reduce(function(memo, adjustmentModel) {
            if (!_.isEmpty(memo)) memo += ", ";

            var modifier = adjustmentModel.getModifier();
            var modifierStr = (modifier >= 0 ? '+'+modifier : modifier);

            memo += adjustmentModel.getAbility() + modifierStr;
            return memo;
        }, "");
    },

    getCollection: function() {
        return this.collection;
    },

    isEmpty: function() {
        return this.getCollection().isEmpty();
    }
});

module.exports = AdjustmentsPreviewView;