var ExportedClass = module.exports = Backbone.Model.extend();

var AppStateModel = require('../../../model/appStateModel');

var ListSelectorModel = Backbone.Model.extend({
    defaults: {
        classes: [],        //List of Strings
        levels: [],         //List of Numbers
        name: null,         //String
        requiredTags: [],   //List of Strings
        tags: [],           //List of Strings
        types: []           //List of Strings
    },

    getClasses: function() {
        return this.get(ListSelectorModel.fields.CLASSES);
    },

    getLevels: function() {
        return this.get(ListSelectorModel.fields.LEVELS);
    },

    getName: function() {
        return this.get(ListSelectorModel.fields.NAME);
    },

    getRequiredTags: function() {
        return this.get(ListSelectorModel.fields.REQUIRED_TAGS);
    },

    getTags: function() {
        return this.get(ListSelectorModel.fields.TAGS);
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
            // Keep items that have any level from the list
            list = _.filter(list, _.bind(function(item) {
                var hasLevel = _.isObject(item) && item.hasOwnProperty('level');
                return hasLevel && _.contains(this.getLevels(), item.level);
            }, this));
        }

        // Filter by types
        if (!_.isEmpty(this.getTypes())) {
            // Keep items that have any type from the list
            list = _.filter(list, _.bind(function(item) {
                var hasType = _.isObject(item) && item.hasOwnProperty('type');
                return hasType && _.contains(this.getTypes(), item.type);
            }, this));
        }

        // Filter by classes
        if (!_.isEmpty(this.getClasses())) {
            // Keep items that have any class from the list
            list = _.filter(list, _.bind(function(item) {
                var hasClasses = _.isObject(item) && item.hasOwnProperty('classes');
                return hasClasses && !_.isEmpty(_.intersection(this.getClasses(), item.classes));
            }, this));
        }

        // Filter by requiredTags
        var requiredTags = this.getRequiredTags();
        if (!_.isEmpty(requiredTags)) {
            // Keep items that have all tags from the list
            list = _.filter(list, _.bind(function(item) {
                var hasTags = _.isObject(item) && item.hasOwnProperty('tags');

                // It is not a match if it has less tags
                if (!hasTags || item.tags.length < requiredTags.length) return false;

                // It is not a match if it is missing a required tag
                for (var i = 0; i < requiredTags.length; i++) {
                    if (!_.contains(item.tags, requiredTags[i])) return false;
                }

                return true;
            }, this));
        }

        // Filter by tags
        if (!_.isEmpty(this.getTags())) {
            // Keep items that have any tag from the list
            list = _.filter(list, _.bind(function(item) {
                var hasTags = _.isObject(item) && item.hasOwnProperty('tags');
                return hasTags && !_.isEmpty(_.intersection(this.getTags(), item.tags));
            }, this));
        }

        return list;
    }
},{
    fields: {
        CLASSES: 'classes',
        LEVELS: 'levels',
        NAME: 'name',
        REQUIRED_TAGS: 'requiredTags',
        TAGS: 'tags',
        TYPES: 'types'
    }
});

_.extend(ExportedClass, ListSelectorModel);
ExportedClass.prototype = ListSelectorModel.prototype;