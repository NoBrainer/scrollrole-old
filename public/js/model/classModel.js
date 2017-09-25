var BaseModel = require('./baseModel');

var ClassModel = BaseModel.extend({
    defaults: _.extend({}, BaseModel.defaults, {
        baseHealth: null,
        features: [],
        hitDice: null,
        proficiencies: [],
        savingThrows: [],
        startingEquipment: [],
        unlockables: []
    }),

    initialize: function(attrs, options) {}
},{
    fields: _.extend({}, BaseModel.fields, {
        BASE_HEALTH: 'baseHealth',
        FEATURES: 'features',
        HIT_DICE: 'hitDice',
        PROFICIENCIES: 'proficiencies',
        SAVING_THROWS: 'savingThrows',
        STARTING_EQUIPMENT: 'startingEquipment',
        UNLOCKABLES: 'unlockables'
    })
});

module.exports = ClassModel;