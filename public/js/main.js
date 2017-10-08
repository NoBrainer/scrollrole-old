var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

// Set the global variables
window.$ = $;
window._ = _;
window.Backbone = Backbone;

// Require singletons to make sure they're initialized
require('./router');
require('./model/appStateModel');

var AppView = require('./view/appView');
var RulesConfigModel = require('./model/rules/rulesConfigModel');

(function() {
    // Render the app view to the page
    var appView = new AppView();
    $('body').prepend(appView.render().$el);

    // Start the router after the setup
    RulesConfigModel.setup().always(_.bind(Backbone.history.start, Backbone.history));
})();