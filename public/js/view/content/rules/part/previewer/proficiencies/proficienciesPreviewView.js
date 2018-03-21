var templates = require('./proficienciesPreviewView.html');

var ProficienciesPreviewView = Backbone.View.extend({
    className: 'proficienciesPreviewView',

    initialize: function(options) {
        options = options || {};

        this.collection = options.collection;
    },

    render: function() {
        var html = templates.scaffold();
        this.$el.html(html);

        this.renderProficiencyList('Armor', this.getCollection().getArmor());
        this.renderProficiencyList('Languages', this.getCollection().getLanguages());
        this.renderProficiencyList('Saving Throws', this.getCollection().getSavingThrows());
        this.renderProficiencyList('Skills', this.getCollection().getSkills());
        this.renderProficiencyList('Tools', this.getCollection().getTools());
        this.renderProficiencyList('Weapons', this.getCollection().getWeapons());

        return this;
    },

    renderProficiencyList: function(name, items) {
        if (!items || _.isEmpty(items)) return;

        var listString = _.reduce(items, function(memo, item) {
            if (!_.isEmpty(memo)) memo += ", ";
            memo += item.getName();
            return memo;
        }, "");

        var html = templates.list({ name: name, listString: listString });
        this.$('.proficiencyList').append(html);
    },

    getCollection: function() {
        return this.collection;
    },

    isEmpty: function() {
        return this.getCollection().isEmpty();
    }
});

module.exports = ProficienciesPreviewView;