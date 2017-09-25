var BaseModel = require('./baseModel');

var AbilityScoreModel = BaseModel.extend({
    defaults: _.extend({}, BaseModel.defaults, {
        value: null
    }),

    initialize: function(attrs, options) {},

    getModifier: function() {
        var value = _.isNumber(this.getValue()) ? this.getValue() : AbilityScoreModel.defaultValue;
        return Math.floor((value - 10) / 2);
    },

    getValue: function() {
        return this.getValue(AbilityScoreModel.fields.VALUE);
    }
},{
    defaultValue: 8,

    fields: _.extend({}, BaseModel.fields, {
        VALUE: 'value'
    })
});

module.exports = AbilityScoreModel;