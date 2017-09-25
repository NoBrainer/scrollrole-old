var BaseModel = require('./baseModel');

var FeatureModel = BaseModel.extend({
    defaults: _.extend({}, BaseModel.defaults, {}),

    initialize: function(attrs, options) {}
},{
    fields: _.extend({}, BaseModel.fields, {})
});

module.exports = FeatureModel;