var ExportedClass = module.exports = Backbone.Model.extend();

var ProficiencyModel = require('./proficiencyModel');

var ConditionModel = Backbone.Model.extend({
    defaults: {
        feature: null,      //String
        level: null,        //Number
        proficiency: null   //ProficiencyModel
    },

    initialize: function(attrs, options) {
        attrs = attrs || {};

        if (_.isObject(attrs.proficiency)) {
            var proficiencyModel = new ProficiencyModel(attrs.proficiency);
            this.set(ConditionModel.fields.PROFICIENCY, proficiencyModel);
        }
    },

    getFeature: function() {
        return this.get(ConditionModel.fields.FEATURE);
    },

    getLevel: function() {
        return this.get(ConditionModel.fields.LEVEL);
    },

    getProficiency: function() {
        return this.get(ConditionModel.fields.PROFICIENCY);
    }
},{
    fields: {
        FEATURE: 'feature',
        LEVEL: 'level',
        PROFICIENCY: 'proficiency'
    }
});

_.extend(ExportedClass, ConditionModel);
ExportedClass.prototype = ConditionModel.prototype;