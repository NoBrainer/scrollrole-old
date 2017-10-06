var ChoiceModel = Backbone.Model.extend({
    defaults: {
        allowDuplicate: false,  //Boolean
        description: [],        //List of Strings
        from: null,             //ListSelectorModel TODO: implement ListSelectorModel
        name: null,             //String
        options: [],            //List of Strings/Models
        pick: null,             //Number
        type: null,             //String
        use: null               //String
    },

    initialize: function(attrs, options) {
        //TODO: parse some parts into models
    },

    getAllowDuplicate: function() {
        return this.get(ChoiceModel.fields.ALLOW_DUPLICATE);
    },

    getDescription: function() {
        return this.get(ChoiceModel.fields.DESCRIPTION);
    },

    getFrom: function() {
        return this.get(ChoiceModel.fields.FROM);
    },

    getName: function() {
        return this.get(ChoiceModel.fields.NAME);
    },

    getOptions: function() {
        return this.get(ChoiceModel.fields.OPTIONS);
    },

    getPick: function() {
        return this.get(ChoiceModel.fields.PICK);
    },

    getType: function() {
        return this.get(ChoiceModel.fields.TYPE);
    },

    getUse: function() {
        return this.get(ChoiceModel.fields.USE);
    }
},{
    fields: {
        ALLOW_DUPLICATE: 'allowDuplicate',
        DESCRIPTION: 'description',
        FROM: 'from',
        NAME: 'name',
        OPTIONS: 'options',
        PICK: 'pick',
        TYPE: 'type',
        USE: 'use'
    }
});

module.exports = ChoiceModel;