var ContentView = require('./content/contentView');
var FooterView = require('./footer/footerView');
var HeaderView = require('./header/headerView');
var templates = require('./appView.html');

var AppView = Backbone.View.extend({
    className: 'app-view',

    render: function() {
        this.cleanup();

        var html = templates.appView();
        this.$el.html(html);

        this.headerView = new HeaderView();
        this.$('#header').html(this.headerView.render().$el);

        this.contentView = new ContentView();
        this.$('#content').html(this.contentView.render().$el);

        this.footerView = new FooterView();
        this.$('#footer').html(this.footerView.render().$el);

        return this;
    },

    cleanup: function() {
        if (this.headerView) {
            this.headerView.remove();
        }
        if (this.contentView) {
            this.contentView.remove();
        }
        if (this.footerView) {
            this.footerView.remove();
        }
    },

    remove: function() {
        this.cleanup();
        Backbone.View.prototype.remove.apply(this, arguments);
    }
});

module.exports = AppView;