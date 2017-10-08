var CharacterModel = Backbone.Model.extend({
    defaults: {
        backgroundModel: null,
        classModel: null,
        name: null,
        raceModel: null
    },

    initialize: function(attrs, options) {
        //TODO: parse some parts into models
    },

    getBackgroundModel: function() {
        return this.get(CharacterModel.fields.BACKGROUND_MODEL);
    },

    getClassModel: function() {
        return this.get(CharacterModel.fields.CLASS_MODEL);
    },

    getName: function() {
        return this.get(CharacterModel.fields.NAME);
    },

    getRaceModel: function() {
        return this.get(CharacterModel.fields.RACE_MODEL);
    }
},{
    fields: {
        BACKGROUND_MODEL: 'backgroundModel',
        CLASS_MODEL: 'classModel',
        NAME: 'name',
        RACE_MODEL: 'raceModel'
    }
});

module.exports = CharacterModel;