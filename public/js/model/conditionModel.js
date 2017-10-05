var ConditionModel = Backbone.Model.extend({
    defaults: {
        feature: null,      //String
        level: null,        //Number
        proficiency: null   //ProficiencyModel
    },

    initialize: function(attrs, options) {
        //TODO: parse some parts into models
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

module.exports = ConditionModel;