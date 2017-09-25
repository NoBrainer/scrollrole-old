var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

// Set the global variables
window.$ = $;
window._ = _;
window.Backbone = Backbone;

var AppView = require('./view/appView');
var YamlController = require('./controller/yamlController');

(function() {
    // Render the app view to the page
    var appView = new AppView();
    $('.page-wrapper').html(appView.render().$el);

    YamlController.setupConfig()
        .always(function() {
            // Start the router
            Backbone.history.start();
        });
})();