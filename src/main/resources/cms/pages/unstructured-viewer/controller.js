var UTIL = require('/cms/lib/util/js/util.js');

function handleGet(req) {
    var content = execute('portal.getContent');

    var params = {
        data: content.data
    };

    var view = resolve('unstructured-viewer.html');
    return UTIL.view.render(view, params);
}

exports.get = handleGet;