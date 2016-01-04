/*jslint browser: true, devel: true*/
/*global WebSocket: false, Tipboard: false*/

function updateTileWeather(id, data, meta, tipboard) {
    // var MAX_ITEMS = 7;
    // var tile = $('#' + id)[0];
    // var container = $(tile).find('.power')[0];
    // $(container).children().remove();
    // for (idx in data.items) {
    //     if (idx > MAX_ITEMS) {
    //         console.log([
    //             'ERROR: more then',
    //             MAX_ITEMS,
    //             'items passed - RENDERING STOPPED'
    //         ].join(' '))
    //         break;
    //     }
    //     var textContent =  data.items[idx];
    //     appendPowerItem(container, textContent);
    // }
    Tipboard.TileDisplayDecorator.runAllDecorators(tile);
    // appendPowerItem(container, 'debug');
}

Tipboard.Dashboard.registerUpdateFunction('weather', updateTileWeather);


// function appendPowerItem(container, itemText) {
//     var htmlLabel = [
//         '<li class="power-item">',
//         itemText,
//         '</li>'
//     ].join('\n');
//     $(container).append(htmlLabel);
// }
