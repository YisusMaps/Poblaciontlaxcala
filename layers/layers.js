var wms_layers = [];


        var lyr_Positronretina_0 = new ol.layer.Tile({
            'title': 'Positron (retina)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png'
            })
        });
var format_PoblacinporManzana_1 = new ol.format.GeoJSON();
var features_PoblacinporManzana_1 = format_PoblacinporManzana_1.readFeatures(json_PoblacinporManzana_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoblacinporManzana_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoblacinporManzana_1.addFeatures(features_PoblacinporManzana_1);
var lyr_PoblacinporManzana_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoblacinporManzana_1, 
                style: style_PoblacinporManzana_1,
                popuplayertitle: "Población por Manzana",
                interactive: true,
    title: 'Población por Manzana<br />\
    <img src="styles/legend/PoblacinporManzana_1_0.png" /> 0<br />\
    <img src="styles/legend/PoblacinporManzana_1_1.png" /> 1-53<br />\
    <img src="styles/legend/PoblacinporManzana_1_2.png" /> 137-284<br />\
    <img src="styles/legend/PoblacinporManzana_1_3.png" /> 284-659<br />\
    <img src="styles/legend/PoblacinporManzana_1_4.png" /> 53-137<br />\
    <img src="styles/legend/PoblacinporManzana_1_5.png" /> Más de 660<br />'
        });
var group_Fondo = new ol.layer.Group({
                                layers: [lyr_Positronretina_0,],
                                fold: "open",
                                title: "Fondo"});

lyr_Positronretina_0.setVisible(true);lyr_PoblacinporManzana_1.setVisible(false);
var layersList = [group_Fondo,lyr_PoblacinporManzana_1];
lyr_PoblacinporManzana_1.set('fieldAliases', {'Pob_tot': 'Población Total', 'hom': 'Hombres', 'Mujeres': 'Mujeres', });
lyr_PoblacinporManzana_1.set('fieldImages', {'Pob_tot': 'TextEdit', 'hom': 'TextEdit', 'Mujeres': 'TextEdit', });
lyr_PoblacinporManzana_1.set('fieldLabels', {'Pob_tot': 'header label - always visible', 'hom': 'header label - always visible', 'Mujeres': 'header label - always visible', });
lyr_PoblacinporManzana_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});