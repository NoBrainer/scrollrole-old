var AppStateModel = require('../../../model/appStateModel');

var ListSelectorModel = Backbone.Model.extend({
    defaults: {
        levels: null,   //List of Numbers
        name: null,     //String
        types: null     //List of Strings
    },

    initialize: function(attrs, options) {
        attrs = attrs || [];

        this.set(ListSelectorModel.fields.LEVELS, attrs.levels || []);
        this.set(ListSelectorModel.fields.TYPES, attrs.types || []);
    },

    getLevels: function() {
        return this.get(ListSelectorModel.fields.LEVELS);
    },

    getName: function() {
        return this.get(ListSelectorModel.fields.NAME);
    },

    getTypes: function() {
        return this.get(ListSelectorModel.fields.TYPES);
    },

    buildList: function() {
        var list = [];

        // Get list from the rules config
        if (_.isObject(AppStateModel.getRulesConfig()) && _.isObject(AppStateModel.getRulesConfig().getLists())) {
            list = AppStateModel.getRulesConfig().getLists()[this.getName()];
        }

        // Filter by levels
        if (!_.isEmpty(this.getLevels())) {
            list = _.filter(list, _.bind(function(item) {
                var hasLevel = _.isObject(item) && item.hasOwnProperty('level');
                return hasLevel && _.contains(this.getLevels(), item.level);
            }, this));
        }

        // Filter by types
        if (!_.isEmpty(this.getTypes())) {
            list = _.filter(list, _.bind(function(item) {
                var hasType = _.isObject(item) && item.hasOwnProperty('type');
                return hasType && _.contains(this.getTypes(), item.type);
            }, this));
        }
        return list;
    }
},{
    fields: {
        LEVELS: 'levels',
        NAME: 'name',
        TYPES: 'types'
    }
});

module.exports = ListSelectorModel;