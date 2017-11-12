var ExportedClass = module.exports = Backbone.Model.extend();

var FeatureModel = Backbone.Model.extend({
    defaults: {
        description: [],        //List of Strings
        name: null,             //String
        shortDescription: null, //String
        value: null             //String|Number
    },

    getDescription: function() {
        return this.get(FeatureModel.fields.DESCRIPTION);
    },

    getName: function() {
        return this.get(FeatureModel.fields.NAME);
    },

    getShortDescription: function() {
        return this.get(FeatureModel.fields.SHORT_DESCRIPTION);
    },

    getValue: function() {
        return this.get(FeatureModel.fields.VALUE);
    }
},{
    fields: {
        DESCRIPTION: 'description',
        NAME: 'name',
        SHORT_DESCRIPTION: 'shortDescription',
        VALUE: 'value'
    }
});

_.extend(ExportedClass, FeatureModel);
ExportedClass.prototype = FeatureModel.prototype;