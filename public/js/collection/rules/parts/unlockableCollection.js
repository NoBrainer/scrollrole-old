var ExportedClass = module.exports = Backbone.Collection.extend();

var UnlockableModel = require('../../../model/rules/parts/unlockableModel');

var UnlockableCollection = Backbone.Collection.extend({
    model: UnlockableModel
});

_.extend(ExportedClass, UnlockableCollection);
ExportedClass.prototype = UnlockableCollection.prototype;