var AppStateModel = require('../../../../../model/appStateModel');
var ChooserView = require('../../part/chooser/chooserView');

var BackgroundChooserView = ChooserView.extend({
    className: ChooserView.prototype.className + ' background-chooser-view',

    initialize: function(options) {
        options = options || {};

        options.label = 'background';
        options.section = 'backgrounds';

        ChooserView.prototype.initialize(options);
    },

    getCollection: function() {
        return AppStateModel.getRulesConfig().getBackgrounds();
    }
});

module.exports = BackgroundChooserView;