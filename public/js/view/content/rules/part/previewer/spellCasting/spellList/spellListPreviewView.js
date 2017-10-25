var templates = require('./spellListPreviewView.html');

var SpellListPreviewView = Backbone.View.extend({
    className: 'spell-list-preview-view',

    initialize: function(options) {
        options = options || {};

        this.collection = options.collection;
        this.hideTitle = _.isBoolean(options.hideTitle) ? options.hideTitle : false;
    },

    render: function() {
        var html = templates.scaffold({ hideTitle: this.hideTitle });
        this.$el.html(html);

        // Build a mapping of spells where the key is the level and the value is an array of spell names
        var spellMapping = this.getCollection().reduce(function(memo, spellModel) {
            var name = spellModel.getName();
            var level = spellModel.getLevel();
            if (!memo[level]) memo[level] = [];
            memo[level].push(name);
            return memo;
        }, {});

        // Get the keys and sort them so we can guarantee the spells are listed in ascending order by level
        var keys = _.chain(spellMapping).keys().sortBy(function(val){ return val; }).value();
        _.each(keys, _.bind(function(spellLevel) {
            this.renderSpellLevel(spellMapping[spellLevel], spellLevel);
        }, this));

        return this;
    },

    renderSpellLevel: function(spellNameArr, spellLevel) {
        spellNameArr = _.isArray(spellNameArr) ? spellNameArr : [];
        if (_.isEmpty(spellNameArr)) return;

        // Make sure the spells are sorted alphabetically
        spellNameArr = _.sortBy(spellNameArr, function(name){ return name; });

        var name = spellLevel == 0 ? 'Cantrips' : 'Level '+spellLevel;
        var listString = _.reduce(spellNameArr, function(memo, spellName) {
            if (!_.isEmpty(memo)) memo += ", ";
            memo += spellName;
            return memo;
        }, "");
        var html = templates.spellRow({ name: name, listString: listString });
        this.$('.spell-list').append(html);
    },

    getCollection: function() {
        return this.collection;
    },

    isEmpty: function() {
        return this.getCollection().isEmpty();
    }
});

module.exports = SpellListPreviewView;