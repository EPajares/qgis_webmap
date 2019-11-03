var wms_layers = [];

        var lyr_MAPBOX_0 = new ol.layer.Tile({
            'title': 'MAPBOX_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'https://api.mapbox.com/styles/v1/eliaspajares/cjkttl1co0uby2ss2s8kfl40r/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZWxpYXNwYWphcmVzIiwiYSI6ImNqOW1scnVyOTRxcWwzMm5yYWhta2N2cXcifQ.aDCgidtC9cjf_O75frn9lA'
            })
        });var format_KommunenStartpunkte_1 = new ol.format.GeoJSON();
var features_KommunenStartpunkte_1 = format_KommunenStartpunkte_1.readFeatures(json_KommunenStartpunkte_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KommunenStartpunkte_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_KommunenStartpunkte_1.addFeatures(features_KommunenStartpunkte_1);var lyr_KommunenStartpunkte_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KommunenStartpunkte_1, 
                style: style_KommunenStartpunkte_1,
                title: '<img src="styles/legend/KommunenStartpunkte_1.png" /> Kommunen Startpunkte'
            });var format_Startpunkte_2 = new ol.format.GeoJSON();
var features_Startpunkte_2 = format_Startpunkte_2.readFeatures(json_Startpunkte_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Startpunkte_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Startpunkte_2.addFeatures(features_Startpunkte_2);var lyr_Startpunkte_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Startpunkte_2, 
                style: style_Startpunkte_2,
                title: '<img src="styles/legend/Startpunkte_2.png" /> Startpunkte'
            });var format_ICOTore_3 = new ol.format.GeoJSON();
var features_ICOTore_3 = format_ICOTore_3.readFeatures(json_ICOTore_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ICOTore_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_ICOTore_3.addFeatures(features_ICOTore_3);var lyr_ICOTore_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ICOTore_3, 
                style: style_ICOTore_3,
                title: '<img src="styles/legend/ICOTore_3.png" /> ICO Tore'
            });

lyr_MAPBOX_0.setVisible(true);lyr_KommunenStartpunkte_1.setVisible(true);lyr_Startpunkte_2.setVisible(true);lyr_ICOTore_3.setVisible(true);
var layersList = [lyr_MAPBOX_0,lyr_KommunenStartpunkte_1,lyr_Startpunkte_2,lyr_ICOTore_3];
lyr_KommunenStartpunkte_1.set('fieldAliases', {'GF': 'GF', 'BSG': 'BSG', 'RS': 'RS', });
lyr_Startpunkte_2.set('fieldAliases', {'City': 'City', 'x': 'x', 'y': 'y', });
lyr_ICOTore_3.set('fieldAliases', {'destination': 'destination', 'x': 'x', 'y': 'y', });
lyr_KommunenStartpunkte_1.set('fieldImages', {'GF': 'Range', 'BSG': 'Range', 'RS': 'TextEdit', });
lyr_Startpunkte_2.set('fieldImages', {'City': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_ICOTore_3.set('fieldImages', {'destination': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_KommunenStartpunkte_1.set('fieldLabels', {'GF': 'no label', 'BSG': 'no label', 'RS': 'no label', });
lyr_Startpunkte_2.set('fieldLabels', {'City': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_ICOTore_3.set('fieldLabels', {'destination': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_ICOTore_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});