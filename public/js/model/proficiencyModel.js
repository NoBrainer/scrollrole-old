var ProficiencyModel = Backbone.Model.extend({
    defaults: {
        description: [],//List of Strings
        items: [],      //List of Strings
        name: null,     //String
        type: null      //String
    },

    initialize: function(attrs, options) {},

    getDescription: function() {
        return this.get(ProficiencyModel.fields.DESCRIPTION);
    },

    getItems: function() {
        return this.get(ProficiencyModel.fields.ITEMS);
    },

    getName: function() {
        return this.get(ProficiencyModel.fields.NAME);
    },

    getType: function() {
        return this.get(ProficiencyModel.fields.TYPE);
    }
},{
    fields: {
        DESCRIPTION: 'description',
        ITEMS: 'items',
        NAME: 'name',
        TYPE: 'type'
    }
});

module.exports = ProficiencyModel;