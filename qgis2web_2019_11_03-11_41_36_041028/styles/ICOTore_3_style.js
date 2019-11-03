var size = 0;
var placement = 'point';

var style_ICOTore_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "15.600000000000001px \'Ubuntu\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var bufferColor = "#ffffff";
    var bufferWidth = 1.1;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("destination") !== null) {
        labelText = String(feature.get("destination"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 8.000000000000004 + size,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(114,155,111,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
