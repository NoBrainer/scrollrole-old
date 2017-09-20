var Backbone = require('backbone');

var RaceModel = Backbone.Model.extend({
    defaults: {
        avgLifespan: null,
        features: [],
        maxHeight: null,
        maxWeight: null,
        minHeight: null,
        minWeight: null,
        languages: [],
        name: null,
        speed: null,
        subraces: []
    },

    initialize: function(attrs, options) {},

    getName: function() {
        return this.get(RaceModel.fields.NAME);
    }
},{
    fields: {
        NAME: 'name'
    }
});

module.exports = RaceModel;