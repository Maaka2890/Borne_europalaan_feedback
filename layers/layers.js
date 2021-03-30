var wms_layers = [];

var lyr_Schetsontwerk_Europastraat4_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Schetsontwerk_Europastraat4",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Schetsontwerk_Europastraat4_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [368863.556435, 6095234.110647, 386554.795670, 6103126.896156]
                            })
                        });
var format_positive_1 = new ol.format.GeoJSON();
var features_positive_1 = format_positive_1.readFeatures(json_positive_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_positive_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_positive_1.addFeatures(features_positive_1);
var lyr_positive_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_positive_1, 
                style: style_positive_1,
                interactive: true,
                title: '<img src="styles/legend/positive_1.png" /> positive'
            });
var format_negative_2 = new ol.format.GeoJSON();
var features_negative_2 = format_negative_2.readFeatures(json_negative_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_negative_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_negative_2.addFeatures(features_negative_2);
var lyr_negative_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_negative_2, 
                style: style_negative_2,
                interactive: true,
                title: '<img src="styles/legend/negative_2.png" /> negative'
            });

lyr_Schetsontwerk_Europastraat4_0.setVisible(true);lyr_positive_1.setVisible(true);lyr_negative_2.setVisible(true);
var layersList = [lyr_Schetsontwerk_Europastraat4_0,lyr_positive_1,lyr_negative_2];
lyr_positive_1.set('fieldAliases', {'Respondent ID': 'Respondent ID', 'Submitted': 'Submitted', 'Antwoordnummer': 'Antwoordnummer', 'Wat vindt u positief aan het ontwerp op deze locatie?': 'Wat vindt u positief aan het ontwerp op deze locatie?', 'Op welk aspect is dit positive punt van toepassing?': 'Op welk aspect is dit positive punt van toepassing?', });
lyr_negative_2.set('fieldAliases', {'Respondent ID': 'Respondent ID', 'Submitted': 'Submitted', 'Publication Consent': 'Publication Consent', 'Antwoordnummer': 'Antwoordnummer', 'Wat vindt u dat er verbeterd kan worden aan het ontwerp op deze locatie?': 'Wat vindt u dat er verbeterd kan worden aan het ontwerp op deze locatie?', 'Op welk aspect is dit verbeterpunt van toepassing?': 'Op welk aspect is dit verbeterpunt van toepassing?', });
lyr_positive_1.set('fieldImages', {'Respondent ID': 'TextEdit', 'Submitted': 'TextEdit', 'Antwoordnummer': 'Range', 'Wat vindt u positief aan het ontwerp op deze locatie?': 'TextEdit', 'Op welk aspect is dit positive punt van toepassing?': 'TextEdit', });
lyr_negative_2.set('fieldImages', {'Respondent ID': 'TextEdit', 'Submitted': 'TextEdit', 'Publication Consent': 'TextEdit', 'Antwoordnummer': 'Range', 'Wat vindt u dat er verbeterd kan worden aan het ontwerp op deze locatie?': 'TextEdit', 'Op welk aspect is dit verbeterpunt van toepassing?': 'TextEdit', });
lyr_positive_1.set('fieldLabels', {'Respondent ID': 'inline label', 'Submitted': 'inline label', 'Antwoordnummer': 'inline label', 'Wat vindt u positief aan het ontwerp op deze locatie?': 'header label', 'Op welk aspect is dit positive punt van toepassing?': 'header label', });
lyr_negative_2.set('fieldLabels', {'Respondent ID': 'inline label', 'Submitted': 'inline label', 'Publication Consent': 'inline label', 'Antwoordnummer': 'inline label', 'Wat vindt u dat er verbeterd kan worden aan het ontwerp op deze locatie?': 'header label', 'Op welk aspect is dit verbeterpunt van toepassing?': 'header label', });
lyr_negative_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});