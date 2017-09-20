var $ = require('jquery');
var AppView = require('./view/appView');
var Backbone = require('backbone');

(function() {
    // Render the app view to the page
    var appView = new AppView();
    $('.page-wrapper').html(appView.render().$el);

    // Start the router
    Backbone.history.start();
})();