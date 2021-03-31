var wms_layers = [];

var lyr_Schetsontwerk_Europastraat_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Schetsontwerk_Europastraat",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Schetsontwerk_Europastraat3_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [368863.556435, 6095234.110647, 386554.795670, 6103126.896156]
                            })
                        });
var format_Verbeterpunten_1 = new ol.format.GeoJSON();
var features_Verbeterpunten_1 = format_Verbeterpunten_1.readFeatures(json_Verbeterpunten_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Verbeterpunten_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Verbeterpunten_1.addFeatures(features_Verbeterpunten_1);
var lyr_Verbeterpunten_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Verbeterpunten_1, 
                style: style_Verbeterpunten_1,
                interactive: true,
                title: '<img src="styles/legend/Verbeterpunten_1.png" /> Verbeterpunten'
            });
var format_Positievepunten_2 = new ol.format.GeoJSON();
var features_Positievepunten_2 = format_Positievepunten_2.readFeatures(json_Positievepunten_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Positievepunten_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Positievepunten_2.addFeatures(features_Positievepunten_2);
var lyr_Positievepunten_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Positievepunten_2, 
                style: style_Positievepunten_2,
                interactive: true,
                title: '<img src="styles/legend/Positievepunten_2.png" /> Positieve punten'
            });

lyr_Schetsontwerk_Europastraat_0.setVisible(true);lyr_Verbeterpunten_1.setVisible(true);lyr_Positievepunten_2.setVisible(true);
var layersList = [lyr_Schetsontwerk_Europastraat_0,lyr_Verbeterpunten_1,lyr_Positievepunten_2];
lyr_Verbeterpunten_1.set('fieldAliases', {'Respondent ID': 'Respondent ID', 'Submitted': 'Submitted', 'Publication Consent': 'Publication Consent', 'Antwoordnummer': 'Antwoordnummer', 'Wat vindt u dat er verbeterd kan worden aan het ontwerp op deze locatie?': 'Wat vindt u dat er verbeterd kan worden aan het ontwerp op deze locatie?', 'Op welk aspect is dit verbeterpunt van toepassing?': 'Op welk aspect is dit verbeterpunt van toepassing?', });
lyr_Positievepunten_2.set('fieldAliases', {'Respondent ID': 'Respondent ID', 'Submitted': 'Submitted', 'Antwoordnummer': 'Antwoordnummer', 'Wat vindt u positief aan het ontwerp op deze locatie?': 'Wat vindt u positief aan het ontwerp op deze locatie?', 'Op welk aspect is dit positive punt van toepassing?': 'Op welk aspect is dit positive punt van toepassing?', });
lyr_Verbeterpunten_1.set('fieldImages', {'Respondent ID': 'TextEdit', 'Submitted': 'TextEdit', 'Publication Consent': 'TextEdit', 'Antwoordnummer': 'Range', 'Wat vindt u dat er verbeterd kan worden aan het ontwerp op deze locatie?': 'TextEdit', 'Op welk aspect is dit verbeterpunt van toepassing?': 'TextEdit', });
lyr_Positievepunten_2.set('fieldImages', {'Respondent ID': 'TextEdit', 'Submitted': 'TextEdit', 'Antwoordnummer': 'Range', 'Wat vindt u positief aan het ontwerp op deze locatie?': 'TextEdit', 'Op welk aspect is dit positive punt van toepassing?': 'TextEdit', });
lyr_Verbeterpunten_1.set('fieldLabels', {'Respondent ID': 'inline label', 'Submitted': 'inline label', 'Publication Consent': 'inline label', 'Antwoordnummer': 'inline label', 'Wat vindt u dat er verbeterd kan worden aan het ontwerp op deze locatie?': 'header label', 'Op welk aspect is dit verbeterpunt van toepassing?': 'header label', });
lyr_Positievepunten_2.set('fieldLabels', {'Respondent ID': 'inline label', 'Submitted': 'inline label', 'Antwoordnummer': 'inline label', 'Wat vindt u positief aan het ontwerp op deze locatie?': 'header label', 'Op welk aspect is dit positive punt van toepassing?': 'header label', });
lyr_Positievepunten_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});