var UnlockableModel = require('../../../model/rules/parts/unlockableModel');

var UnlockableCollection = Backbone.Collection.extend({
    model: UnlockableModel
},{
    parseModel: function(attrs, options) {
        return new UnlockableModel(attrs, options);
    }
});

module.exports = UnlockableCollection;