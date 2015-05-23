var UTIL = require('/cms/lib/util/js/util.js');

// Handle GET request
exports.get = handleGet;

function handleGet(req) {
    var me = this;

    function renderView() {
        var view = resolve('sectionalize.html');
        var model = createModel();

        return UTIL.view.render(view, model);
    }

    function createModel() {
        me.site = execute('portal.getSite');
        me.content = execute('portal.getContent');

        var model = {};
        model.mainRegion = me.content.page.regions['main'];
        model.bodyModuleName = 'm_' + UTIL.module.getShortName();

        model.sitePath = me.site['_path'];
        model.pageTitle = getPageTitle();
        model.metaDescription = getMetaDescription();
        model.menuItems = UTIL.menu.get(3);


        UTIL.log(UTIL.menu.get(3));

        return model;
    }

    function getPageTitle() {
        return me.content['displayName'] + ' - ' + me.site['displayName'];
    }

    function getMetaDescription() {
        var moduleNamePropertyName = module.name.replace(/\./g,'-');
        var metaDescription = null;

        if (me.content.x[moduleNamePropertyName]) {
            if (me.content.x[moduleNamePropertyName]['html-meta']) {
                if (me.content.x[moduleNamePropertyName]['html-meta']['htmlMetaDescription']) {
                    metaDescription = me.content.x[moduleNamePropertyName]['html-meta']['htmlMetaDescription'];
                }
            }
        }
        return metaDescription;
    }

    return renderView();
}
