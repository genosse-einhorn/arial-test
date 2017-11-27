function pxToPt(px) {
    return px/16*12;
}

function ptToPx(pt) {
    return pt/12*16;
}

function sync(suffix) {

    font = ptToPx(parseInt(document.getElementById('size_'+suffix).value)) + 'px ' +
        document.getElementById('font_'+suffix).value;

    document.getElementById('demo_'+suffix).style.font = font;

    ctx = document.querySelector('canvas').getContext('2d');
    ctx.font = font;

    metrics = ctx.measureText('A');

    resval = '<table>';
    resval += '<tr><th>Width<td>' + pxToPt(metrics.width).toFixed(2) + 'pt';
    resval += '<tr><th>BB Ascent<td>' + pxToPt(metrics.actualBoundingBoxAscent).toFixed(2) + 'pt';
    resval += '<tr><th>BB Descent<td>' + pxToPt(metrics.actualBoundingBoxDescent).toFixed(2) + 'pt';
    resval += '<tr><th>Em Square<td>' + pxToPt(metrics.emHeightAscent - metrics.emHeightDescent).toFixed(2) + 'pt';
    resval += '</table>';

    document.getElementById('results_' + suffix).innerHTML = resval;
}

window.onload = function() {
    registerSyncs('a');
    registerSyncs('b');
    sync('a');
    sync('b');
}

function registerSyncs(suffix) {
    document.getElementById('font_'+suffix).addEventListener('input', function() { sync(suffix) });
    document.getElementById('size_'+suffix).addEventListener('input', function() { sync(suffix) });
}
