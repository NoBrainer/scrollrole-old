var ExportedClass = module.exports = Backbone.Model.extend();

var ProficiencyModel = Backbone.Model.extend({
    defaults: {
        name: null, //String
        type: null  //String
    },

    getName: function() {
        return this.get(ProficiencyModel.fields.NAME);
    },

    getType: function() {
        return this.get(ProficiencyModel.fields.TYPE);
    }
},{
    fields: {
        NAME: 'name',
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