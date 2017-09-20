var Backbone = require('backbone');

var CharacterModel = Backbone.Model.extend({
    defaults: {
        backgroundModel: null,
        classModel: null,
        name: null,
        raceModel: null
    },

    initialize: function(attrs, options) {},

    getName: function() {
        return this.get(CharacterModel.fields.NAME);
    }
},{
    fields: {
        NAME: 'name'
    }
});

module.exports = CharacterModel;