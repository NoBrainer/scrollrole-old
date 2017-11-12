var ExportedClass = module.exports = Backbone.Model.extend();

var ToolModel = Backbone.Model.extend({
    defaults: {
        cost: null,     //String
        name: null,     //String
        tags: [],       //String
        weight: '0 lb'  //String
    },

    getCost: function() {
        return this.get(ToolModel.fields.COST);
    },

    getName: function() {
        return this.get(ToolModel.fields.NAME);
    },

    getTags: function() {
        return this.get(ToolModel.fields.TAGS);
    },

    getWeight: function() {
        return this.get(ToolModel.fields.WEIGHT);
    }
},{
    fields: {
        COST: 'cost',
        NAME: 'name',
        TAGS: 'tags',
        WEIGHT: 'weight'
    },

    tagOptions: ["artisan's tools", "gaming set", "musical instrument"]
});

_.extend(ExportedClass, ToolModel);
ExportedClass.prototype = ToolModel.prototype;