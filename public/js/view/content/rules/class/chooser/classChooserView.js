var AppStateModel = require('../../../../../model/appStateModel');
var ChooserView = require('../../part/chooser/chooserView');

var ClassChooserView = ChooserView.extend({
    className: ChooserView.prototype.className + ' class-chooser-view',

    initialize: function(options) {
        options = options || {};

        options.label = 'class';
        options.section = 'classes';
        options.pathToIcons = '/resources/icons/class/';

        ChooserView.prototype.initialize(options);
    },

    getCollection: function() {
        return AppStateModel.getRulesConfig().getClasses();
    }
});

module.exports = ClassChooserView;