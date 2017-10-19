var ExportedClass = module.exports = Backbone.Model.extend();

var NavItemModel = Backbone.Model.extend({
    defaults: {
        active: false,
        href: null,
        id: null,
        label: null
    },

    initialize: function(attrs, options) {
        attrs = attrs || {};

        // Accept a String label OR an Object
        if (_.isString(attrs)) {
            attrs = { label: attrs };
        }

        // ID is not required, falls back to escaping the label
        attrs.id = _.escape(attrs.id || attrs.label);
        this.set(attrs);
    },

    isActive: function() {
        return this.get(NavItemModel.fields.ACTIVE);
    },

    setActive: function(active, options) {
        this.set(NavItemModel.fields.ACTIVE, active, options);
        return this;
    },

    getHref: function() {
        return this.get(NavItemModel.fields.HREF);
    },

    getId: function() {
        return this.get(NavItemModel.fields.ID);
    },

    getLabel: function() {
        return this.get(NavItemModel.fields.LABEL);
    }
},{
    fields: {
        ACTIVE: 'active',
        HREF: 'href',
        ID: 'id',
        LABEL: 'label'
    }
});

_.extend(ExportedClass, NavItemModel);
ExportedClass.prototype = NavItemModel.prototype;