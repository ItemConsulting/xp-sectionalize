var UTIL = require('/cms/lib/util/js/util.js');

// Handle GET request
exports.get = handleGet;

function handleGet(req) {
    var me = this;

    function renderView() {
        var view = resolve('test.html');
        var model = createModel();
        return UTIL.view.render(view, model);
    }

    function createModel() {
        var model = {};
        model.favoriteFood = 'fish and cheese';
        return model;
    }

    return renderView();
}