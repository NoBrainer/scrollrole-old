var Backbone = require('backbone');

var ClassModel = Backbone.Model.extend({
    defaults: {
        baseHealth: null,
        features: [],
        hitDice: null,
        name: null,
        proficiencies: [],
        savingThrows: [],
        startingEquipment: []
    },

    initialize: function(attrs, options) {},

    getName: function() {
        return this.get(ClassModel.fields.NAME);
    }
},{
    fields: {
        NAME: 'name'
    }
});

module.exports = ClassModel;