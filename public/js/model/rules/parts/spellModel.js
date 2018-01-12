var ExportedClass = module.exports = Backbone.Model.extend();

var SpellModel = Backbone.Model.extend({
    defaults: {
        classes: [],//Array of Strings
        level: null,//Number
        name: null  //String
    },

    getClasses: function() {
        return this.get(SpellModel.fields.CLASSES);
    },

    getLevel: function() {
        return this.get(SpellModel.fields.LEVEL);
    },

    getName: function() {
        return this.get(SpellModel.fields.NAME);
    }
},{
    fields: {
        CLASSES: 'classes',
        LEVEL: 'level',
        NAME: 'name'
    }
});

_.extend(ExportedClass, SpellModel);
ExportedClass.prototype = SpellModel.prototype;