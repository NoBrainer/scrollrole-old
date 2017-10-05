var ChoiceModel = Backbone.Model.extend({
    defaults: {
        description: [],//List of Strings
        from: null,     //ListSelectorModel TODO: implement ListSelectorModel
        name: null,     //String
        options: [],    //List of Strings/Models
        pick: null,     //Number
        type: null      //String
    },

    initialize: function(attrs, options) {
        //TODO: parse some parts into models
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
    }
},{
    fields: {
        DESCRIPTION: 'description',
        FROM: 'from',
        NAME: 'name',
        OPTIONS: 'options',
        PICK: 'pick',
        TYPE: 'type'
    }
});

module.exports = ChoiceModel;