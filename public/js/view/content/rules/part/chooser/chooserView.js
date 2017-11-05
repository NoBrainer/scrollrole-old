var templates = require('./chooserView.html');

var ChooserView = Backbone.View.extend({
    className: 'chooser-view',

    initialize: function(options) {
        options = options || {};

        this.label = options.label;
        this.section = options.section;
        this.pathToIcons = options.pathToIcons;
    },

    render: function() {
        var html = templates.scaffold({ label: this.label });
        this.$el.html(html);

        this.renderChoices();

        return this;
    },

    renderChoices: function() {
        var $list = this.$('.chooser-list');

        _.each(this.getModelNames(), _.bind(function(name) {
            var html = templates.choice({ section: this.section, name: name, iconPath: this.buildIconPath(name) });
            $list.append(html);
        }, this));

        //TODO: add "create new" option
    },

    buildIconPath: function(name) {
        var model = this.getCollection().getModelByName(name);
        if (_.isFunction(model.getIconId)) {
            var iconId = model.getIconId();
            return this.pathToIcons + iconId + '.png';
        } else {
            return null;
        }
    },

    getCollection: function() {
        return new Backbone.Collection();
    },

    getModelNames: function() {
        var collection = this.getCollection();
        return collection ? collection.getNames() : [];
    }
});

module.exports = ChooserView;