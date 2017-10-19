var ExportedClass = module.exports = Backbone.Model.extend();

var SpellModel = Backbone.Model.extend({
    defaults: {
        level: null,//Number
        name: null  //String
    },

    getLevel: function() {
        return this.get(SpellModel.fields.LEVEL);
    },

    getName: function() {
        return this.get(SpellModel.fields.NAME);
    }
},{
    fields: {
        LEVEL: 'level',
        NAME: 'name'
    }
});

_.extend(ExportedClass, SpellModel);
ExportedClass.prototype = SpellModel.prototype;