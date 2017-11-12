var ExportedClass = module.exports = Backbone.Model.extend();

var AppStateModel = require('../../../model/appStateModel');

var ListSelectorModel = Backbone.Model.extend({
    defaults: {
        levels: [], //List of Numbers
        name: null, //String
        types: []   //List of Strings
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

        var collection = AppStateModel.getRulesConfig().getCollection(this.getName());
        if (!collection) {
            return list;
        } else {
            list = collection.toJSON(); //TODO: generic filtering in the collection
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

_.extend(ExportedClass, ListSelectorModel);
ExportedClass.prototype = ListSelectorModel.prototype;