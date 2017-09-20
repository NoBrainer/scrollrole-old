var Backbone = require('backbone');

var Router = Backbone.Router.extend({
    initialize: function() {
        //this.route(/^.*/, 'default', this.goDefault);
    },

    goDefault: function() {}
});

module.exports = Router;