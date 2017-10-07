var ClassModel = require('../model/classModel');

var ClassCollection = Backbone.Collection.extend({
    model: ClassModel
});

module.exports = ClassCollection;