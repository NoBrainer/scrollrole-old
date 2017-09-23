var _ = require('underscore');
var BaseModel = require('./baseModel');

var ProficiencyModel = BaseModel.extend({
    defaults: _.extend({}, BaseModel.defaults, {
        type: null
    }),

    initialize: function(attrs, options) {},

    getType: function() {
        return this.get(ProficiencyModel.fields.TYPE);
    }
},{
    fields: _.extend({}, BaseModel.fields, {
        TYPE: 'type'
    })
});

module.exports = ProficiencyModel;