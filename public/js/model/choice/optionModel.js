var _ = require('underscore');
var BaseModel = require('../baseModel');

var OptionModel = BaseModel.extend({
    defaults: _.extend({}, BaseModel.defaults, {
        requirements: []
    }),

    initialize: function(attrs, options) {},

    getRequirements: function() {
        return this.get(OptionModel.fields.REQUIREMENTS);
    }
},{
    fields: _.extend({}, BaseModel.fields, {
        REQUIREMENTS: 'requirements'
    })
});

module.exports = OptionModel;