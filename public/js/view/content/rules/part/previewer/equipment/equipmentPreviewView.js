var templates = require('./equipmentPreviewView.html');

var EquipmentPreviewView = Backbone.View.extend({
    className: 'equipmentPreviewView',

    initialize: function(options) {
        options = options || {};

        this.equipment = options.equipment;
    },

    render: function() {
        var html = templates.scaffold();
        this.$el.html(html);

        _.each(this.getEquipment(), _.bind(function(item) {
            var html = templates.listItem({ name: item });
            this.$('.equipmentList').append(html);
        }, this));

        return this;
    },

    getEquipment: function() {
        return this.equipment;
    },

    isEmpty: function() {
        return _.isEmpty(this.getEquipment());
    }
});

module.exports = EquipmentPreviewView;