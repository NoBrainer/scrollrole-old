var UnlockableModel = require('../model/unlockableModel');

var UnlockableCollection = Backbone.Collection.extend({
    model: UnlockableModel
});

module.exports = UnlockableCollection;