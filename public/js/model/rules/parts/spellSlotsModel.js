var SpellSlotsModel = Backbone.Model.extend({
    defaults: {
        description: [],//List of Strings
        L1: null,       //Number
        L2: null,       //Number
        L3: null,       //Number
        L4: null,       //Number
        L5: null,       //Number
        L6: null,       //Number
        L7: null,       //Number
        L8: null,       //Number
        L9: null        //Number
    },

    getDescription: function() {
        return this.get(SpellSlotsModel.fields.DESCRIPTION);
    },

    getL1: function() {
        return this.get(SpellSlotsModel.fields.L1);
    },

    getL2: function() {
        return this.get(SpellSlotsModel.fields.L2);
    },

    getL3: function() {
        return this.get(SpellSlotsModel.fields.L3);
    },

    getL4: function() {
        return this.get(SpellSlotsModel.fields.L4);
    },

    getL5: function() {
        return this.get(SpellSlotsModel.fields.L5);
    },

    getL6: function() {
        return this.get(SpellSlotsModel.fields.L6);
    },

    getL7: function() {
        return this.get(SpellSlotsModel.fields.L7);
    },

    getL8: function() {
        return this.get(SpellSlotsModel.fields.L8);
    },

    getL9: function() {
        return this.get(SpellSlotsModel.fields.L9);
    }
},{
    fields: {
        DESCRIPTION: 'description',
        L1: 'L1',
        L2: 'L2',
        L3: 'L3',
        L4: 'L4',
        L5: 'L5',
        L6: 'L6',
        L7: 'L7',
        L8: 'L8',
        L9: 'L9'
    }
});

module.exports = SpellSlotsModel;