/*jslint browser: true, devel: true*/
/*global WebSocket: false, Tipboard: false*/

function updateTileImage(tileId, data, meta, tipboard) {
    var tile = Tipboard.Dashboard.id2node(tileId);
    Tipboard.Dashboard.setDataByKeys(tileId, data, ['title', 'description']);
    
    // Tile should be the same
    var tile = $('#' + tileId)[0];
    var container = $(tile).find('.image-content')[0];
    $(container).children().remove();
    var img = data.image;
    var htmlLabel = [
        '<img class="imagetile" src="data:image/jpeg;base64,',
        img,
        '" >'
    ].join('');
    $(container).append(htmlLabel);
    Tipboard.TileDisplayDecorator.runAllDecorators(tile);
}

Tipboard.Dashboard.registerUpdateFunction('image', updateTileImage);