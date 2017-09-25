var $ = require('jquery');
var _ = require('underscore');
var AppView = require('./view/appView');
var Backbone = require('backbone');

window.$ = $;
window._ = _;
window.Backbone = Backbone;

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