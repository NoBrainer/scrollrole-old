var AppStateModel = require('../../../model/appStateModel');
var BackgroundSectionView = require('./background/backgroundSectionView');
var ClassSectionView = require('./class/classSectionView');
var IntroductionSectionView = require('./introduction/introductionSectionView');
var NavView = require('../navbar/navbarView');
var RaceSectionView = require('./race/raceSectionView');
var templates = require('./rulesView.html');

var RulesView = Backbone.View.extend({
    className: 'rulesView',

    initialize: function(options) {
        options = options || {};

        this.tabList = [
            { label: 'Introduction', id: RulesView.tabs.INTRODUCTION, href: '#rules/'+RulesView.tabs.INTRODUCTION },
            { label: 'Backgrounds',  id: RulesView.tabs.BACKGROUNDS,  href: '#rules/'+RulesView.tabs.BACKGROUNDS },
            { label: 'Classes',      id: RulesView.tabs.CLASSES,      href: '#rules/'+RulesView.tabs.CLASSES },
            { label: 'Races',        id: RulesView.tabs.RACES,        href: '#rules/'+RulesView.tabs.RACES }
        ];
        this.defaultTabId = RulesView.tabs.INTRODUCTION;
        this.currentTabId = null;

        this.listenTo(AppStateModel, 'change:' + AppStateModel.fields.TAB, function(model, tab) {
            this.activateTab(tab);
        });
    },

    render: function() {
        var html = templates.scaffold();
        this.$el.html(html);

        this.renderNav();

        return this;
    },

    renderNav: function() {
        this.cleanupNavView();

        this.navView = new NavView({ list: this.tabList });
        this.$('#rulesNav').html(this.navView.render().el);

        this.activateTab();

        return this;
    },

    activateTab: function(tab) {
        if (!this.navView || this.currentTabId === tab) return;

        tab = tab || AppStateModel.getTab() || this.defaultTabId;
        this.currentTabId = tab;

        var collection = this.navView.getCollection();
        collection.activateItemWithId(tab);

        this.renderContent(tab);
    },

    renderContent: function(tab) {
        tab = tab || AppStateModel.getTab() || this.defaultTabId;
        this.cleanupChildView();
        var content = null;

        switch(tab) {
            case RulesView.tabs.INTRODUCTION:
                this.childView = new IntroductionSectionView();
                content = this.childView.render().el;
                break;
            case RulesView.tabs.BACKGROUNDS:
                this.childView = new BackgroundSectionView();
                content = this.childView.render().el;
                break;
            case RulesView.tabs.CLASSES:
                this.childView = new ClassSectionView();
                content = this.childView.render().el;
                break;
            case RulesView.tabs.RACES:
                this.childView = new RaceSectionView();
                content = this.childView.render().el;
                break;
            default:
                content = templates.singleCardContent({ text: '404: Rules tab not found! GTFO!' });
        }
        this.$('.wrapper').html(content);
    },

    cleanupNavView: function() {
        if (this.navView) {
            this.navView.remove();
            this.navView = null;
        }
    },

    cleanupChildView: function() {
        if (this.childView) {
            this.childView.remove();
            this.childView = null;
        }
    },

    remove: function() {
        this.cleanupNavView();
        this.cleanupChildView();
        Backbone.View.prototype.remove.apply(this, arguments);
    }
},{
    tabs: {
        BACKGROUNDS: 'backgrounds',
        CLASSES: 'classes',
        INTRODUCTION: 'introduction',
        RACES: 'races'
    }
});

module.exports = RulesView;