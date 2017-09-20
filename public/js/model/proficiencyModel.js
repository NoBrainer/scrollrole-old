var Backbone = require('backbone');

var ProficiencyModel = Backbone.Model.extend({
    defaults: {
        description: null,
        name: null,
        type: null
    },

    initialize: function(attrs, options) {},

    getDescription: function() {
        return this.get(ProficiencyModel.fields.DESCRIPTION);
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
        NAME: 'name',
        TYPE: 'type'
    }
});

module.exports = ProficiencyModel;