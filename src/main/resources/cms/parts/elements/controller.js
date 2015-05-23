var UTIL = require('/cms/lib/util/js/util.js');

// Handle GET request
exports.get = handleGet;

function handleGet(req) {
    var me = this;

    function renderView() {
        var view = resolve('elements.html');
        var model = createModel();
        return UTIL.view.render(view, model);
    }

    function createModel() {
        var model = {};
        return model;
    }

    return renderView();
}