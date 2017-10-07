var ClassModel = require('../model/classModel');

var ClassCollection = Backbone.Collection.extend({
    model: ClassModel
},{
    parseModel: function(attrs, options) {
        return new ClassModel(attrs, options);
    }
});

module.exports = ClassCollection;