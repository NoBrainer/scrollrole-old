var Backbone = require('backbone');

var BaseModel = Backbone.Model.extend({
    defaults: {
        description: null,
        name: null
    },

    getDescription: function() {
        return this.get(BaseModel.fields.DESCRIPTION);
    },

    getName: function() {
        return this.get(BaseModel.fields.NAME);
    }
},{
    fields: {
        DESCRIPTION: 'description',
        NAME: 'name'
    }
});

module.exports = BaseModel;