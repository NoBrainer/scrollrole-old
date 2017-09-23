var _ = require('underscore');
var BaseModel = require('./baseModel');

var CharacterModel = BaseModel.extend({
    defaults: _.extend({}, BaseModel.defaults, {
        backgroundModel: null,
        classModel: null,
        raceModel: null
    }),

    initialize: function(attrs, options) {},

    getBackgroundModel: function() {
        return this.get(CharacterModel.fields.BACKGROUND_MODEL);
    },

    getClassModel: function() {
        return this.get(CharacterModel.fields.CLASS_MODEL);
    },

    getRaceModel: function() {
        return this.get(CharacterModel.fields.RACE_MODEL);
    }
},{
    fields: _.extend({}, BaseModel.fields, {
        BACKGROUND_MODEL: 'backgroundModel',
        CLASS_MODEL: 'classModel',
        RACE_MODEL: 'raceModel'
    })
});

module.exports = CharacterModel;