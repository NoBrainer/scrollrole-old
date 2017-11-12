var ExportedClass = module.exports = Backbone.Model.extend();

var ProficiencyModel = Backbone.Model.extend({
    defaults: {
        name: null, //String
        tags: [],   //List of Strings
        type: null  //String
    },

    getName: function() {
        return this.get(ProficiencyModel.fields.NAME);
    },

    getTags: function() {
        return this.get(ProficiencyModel.fields.TAGS);
    },

    getType: function() {
        return this.get(ProficiencyModel.fields.TYPE);
    }
},{
    fields: {
        NAME: 'name',
        TAGS: 'tags',
        TYPE: 'type'
    },

    types: {
        ARMOR: 'armor',
        LANGUAGE: 'language',
        SAVING_THROW: 'saving throw',
        SKILL: 'skill',
        TOOL: 'tool',
        WEAPON: 'weapon'
    }
});

_.extend(ExportedClass, ProficiencyModel);
ExportedClass.prototype = ProficiencyModel.prototype;