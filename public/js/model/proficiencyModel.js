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
    }
});

module.exports = ProficiencyModel;