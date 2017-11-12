var ExportedClass = module.exports = Backbone.Model.extend();

var FeatModel = Backbone.Model.extend({
    defaults: {
        description: [],    //List of Strings
        name: null,         //String
        prerequisites: []   //List of Strings
    },

    getDescription: function() {
        return this.get(FeatModel.fields.DESCRIPTION);
    },

    getName: function() {
        return this.get(FeatModel.fields.NAME);
    },

    getPrequisites: function() {
        return this.get(FeatModel.fields.PREREQUISITES);
    }
},{
    fields: {
        DESCRIPTION: 'description',
        NAME: 'name',
        PREREQUISITES: 'prerequisites'
    }
});

_.extend(ExportedClass, FeatModel);
ExportedClass.prototype = FeatModel.prototype;