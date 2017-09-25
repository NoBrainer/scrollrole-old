var BaseModel = require('./baseModel');

var RaceModel = BaseModel.extend({
    defaults: _.extend({}, BaseModel.defaults, {
        avgLifespan: null,
        features: [],
        maxHeight: null,
        maxWeight: null,
        minHeight: null,
        minWeight: null,
        languages: [],
        speed: null,
        subraces: []
    }),

    initialize: function(attrs, options) {}
},{
    fields: _.extend({}, BaseModel.fields, {
        AVG_LIFESPAN: 'avgLifespan',
        FEATURES: 'features',
        MAX_HEIGHT: 'maxHeight',
        MAX_WEIGHT: 'maxWeight',
        MIN_HEIGHT: 'minHeight',
        MIN_WEIGHT: 'minWeight',
        LANGUAGES: 'languages',
        SPEED: 'speed',
        SUBRACES: 'subraces'
    })
});

module.exports = RaceModel;