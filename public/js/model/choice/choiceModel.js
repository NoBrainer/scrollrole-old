var BaseModel = require('../baseModel');

var ChoiceModel = BaseModel.extend({
    defaults: _.extend({}, BaseModel.defaults, {
        options: [],
        requirements: []
    }),

    initialize: function(attrs, options) {},

    getOptions: function() {
        return this.get(ChoiceModel.fields.OPTIONS);
    },

    getRequirements: function() {
        return this.get(ChoiceModel.fields.REQUIREMENTS);
    }
},{
    fields: _.extend({}, BaseModel.fields, {
        OPTIONS: 'options',
        REQUIREMENTS: 'requirements'
    })
});

module.exports = ChoiceModel;