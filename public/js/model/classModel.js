var Backbone = require('backbone');

var ClassModel = Backbone.Model.extend({
    defaults: {
        name: null
    },

    initialize: function(attrs, options) {},

    getName: function() {
        return this.get(BackgroundModel.fields.NAME);
    }
},{
    fields: {
        NAME: 'name'
    }
});

module.exports = ClassModel;