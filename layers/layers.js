var wms_layers = [];

var format_ADMINISTRASIDESA_AR_25K_0 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_0 = format_ADMINISTRASIDESA_AR_25K_0.readFeatures(json_ADMINISTRASIDESA_AR_25K_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25K_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_0.addFeatures(features_ADMINISTRASIDESA_AR_25K_0);
var lyr_ADMINISTRASIDESA_AR_25K_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_0, 
                style: style_ADMINISTRASIDESA_AR_25K_0,
                popuplayertitle: "ADMINISTRASIDESA_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIDESA_AR_25K_0.png" /> ADMINISTRASIDESA_AR_25K'
            });
var format_agrikebun_1 = new ol.format.GeoJSON();
var features_agrikebun_1 = format_agrikebun_1.readFeatures(json_agrikebun_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_agrikebun_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_agrikebun_1.addFeatures(features_agrikebun_1);
var lyr_agrikebun_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_agrikebun_1, 
                style: style_agrikebun_1,
                popuplayertitle: "agrikebun",
                interactive: true,
                title: '<img src="styles/legend/agrikebun_1.png" /> agrikebun'
            });
var format_DANAU_AR_25K_2 = new ol.format.GeoJSON();
var features_DANAU_AR_25K_2 = format_DANAU_AR_25K_2.readFeatures(json_DANAU_AR_25K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DANAU_AR_25K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DANAU_AR_25K_2.addFeatures(features_DANAU_AR_25K_2);
var lyr_DANAU_AR_25K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DANAU_AR_25K_2, 
                style: style_DANAU_AR_25K_2,
                popuplayertitle: "DANAU_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/DANAU_AR_25K_2.png" /> DANAU_AR_25K'
            });
var format_AGRISAWAH_AR_25K_3 = new ol.format.GeoJSON();
var features_AGRISAWAH_AR_25K_3 = format_AGRISAWAH_AR_25K_3.readFeatures(json_AGRISAWAH_AR_25K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AGRISAWAH_AR_25K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AGRISAWAH_AR_25K_3.addFeatures(features_AGRISAWAH_AR_25K_3);
var lyr_AGRISAWAH_AR_25K_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AGRISAWAH_AR_25K_3, 
                style: style_AGRISAWAH_AR_25K_3,
                popuplayertitle: "AGRISAWAH_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/AGRISAWAH_AR_25K_3.png" /> AGRISAWAH_AR_25K'
            });
var format_NONAGRIALANG_AR_25K_4 = new ol.format.GeoJSON();
var features_NONAGRIALANG_AR_25K_4 = format_NONAGRIALANG_AR_25K_4.readFeatures(json_NONAGRIALANG_AR_25K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NONAGRIALANG_AR_25K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NONAGRIALANG_AR_25K_4.addFeatures(features_NONAGRIALANG_AR_25K_4);
var lyr_NONAGRIALANG_AR_25K_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NONAGRIALANG_AR_25K_4, 
                style: style_NONAGRIALANG_AR_25K_4,
                popuplayertitle: "NONAGRIALANG_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/NONAGRIALANG_AR_25K_4.png" /> NONAGRIALANG_AR_25K'
            });
var format_AGRILADANG_AR_25K_5 = new ol.format.GeoJSON();
var features_AGRILADANG_AR_25K_5 = format_AGRILADANG_AR_25K_5.readFeatures(json_AGRILADANG_AR_25K_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AGRILADANG_AR_25K_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AGRILADANG_AR_25K_5.addFeatures(features_AGRILADANG_AR_25K_5);
var lyr_AGRILADANG_AR_25K_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AGRILADANG_AR_25K_5, 
                style: style_AGRILADANG_AR_25K_5,
                popuplayertitle: "AGRILADANG_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/AGRILADANG_AR_25K_5.png" /> AGRILADANG_AR_25K'
            });
var format_TAMBANGAN_PT_25K_6 = new ol.format.GeoJSON();
var features_TAMBANGAN_PT_25K_6 = format_TAMBANGAN_PT_25K_6.readFeatures(json_TAMBANGAN_PT_25K_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TAMBANGAN_PT_25K_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TAMBANGAN_PT_25K_6.addFeatures(features_TAMBANGAN_PT_25K_6);
var lyr_TAMBANGAN_PT_25K_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TAMBANGAN_PT_25K_6, 
                style: style_TAMBANGAN_PT_25K_6,
                popuplayertitle: "TAMBANGAN_PT_25K",
                interactive: true,
                title: '<img src="styles/legend/TAMBANGAN_PT_25K_6.png" /> TAMBANGAN_PT_25K'
            });
var format_kesehatan_7 = new ol.format.GeoJSON();
var features_kesehatan_7 = format_kesehatan_7.readFeatures(json_kesehatan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kesehatan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kesehatan_7.addFeatures(features_kesehatan_7);
var lyr_kesehatan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kesehatan_7, 
                style: style_kesehatan_7,
                popuplayertitle: "kesehatan",
                interactive: true,
                title: '<img src="styles/legend/kesehatan_7.png" /> kesehatan'
            });
var format_jalan_8 = new ol.format.GeoJSON();
var features_jalan_8 = format_jalan_8.readFeatures(json_jalan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_8.addFeatures(features_jalan_8);
var lyr_jalan_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_8, 
                style: style_jalan_8,
                popuplayertitle: "jalan",
                interactive: true,
                title: '<img src="styles/legend/jalan_8.png" /> jalan'
            });
var format_NIAGA_PT_25K_9 = new ol.format.GeoJSON();
var features_NIAGA_PT_25K_9 = format_NIAGA_PT_25K_9.readFeatures(json_NIAGA_PT_25K_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NIAGA_PT_25K_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NIAGA_PT_25K_9.addFeatures(features_NIAGA_PT_25K_9);
var lyr_NIAGA_PT_25K_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NIAGA_PT_25K_9, 
                style: style_NIAGA_PT_25K_9,
                popuplayertitle: "NIAGA_PT_25K",
                interactive: true,
                title: '<img src="styles/legend/NIAGA_PT_25K_9.png" /> NIAGA_PT_25K'
            });
var format_SUNGAI_LN_25K_10 = new ol.format.GeoJSON();
var features_SUNGAI_LN_25K_10 = format_SUNGAI_LN_25K_10.readFeatures(json_SUNGAI_LN_25K_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_LN_25K_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LN_25K_10.addFeatures(features_SUNGAI_LN_25K_10);
var lyr_SUNGAI_LN_25K_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_LN_25K_10, 
                style: style_SUNGAI_LN_25K_10,
                popuplayertitle: "SUNGAI_LN_25K",
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_LN_25K_10.png" /> SUNGAI_LN_25K'
            });
var format_PENDIDIKAN_PT_25K_11 = new ol.format.GeoJSON();
var features_PENDIDIKAN_PT_25K_11 = format_PENDIDIKAN_PT_25K_11.readFeatures(json_PENDIDIKAN_PT_25K_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PENDIDIKAN_PT_25K_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PENDIDIKAN_PT_25K_11.addFeatures(features_PENDIDIKAN_PT_25K_11);
var lyr_PENDIDIKAN_PT_25K_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PENDIDIKAN_PT_25K_11, 
                style: style_PENDIDIKAN_PT_25K_11,
                popuplayertitle: "PENDIDIKAN_PT_25K",
                interactive: true,
                title: '<img src="styles/legend/PENDIDIKAN_PT_25K_11.png" /> PENDIDIKAN_PT_25K'
            });
var format_SARANAIBADAH_PT_25K_12 = new ol.format.GeoJSON();
var features_SARANAIBADAH_PT_25K_12 = format_SARANAIBADAH_PT_25K_12.readFeatures(json_SARANAIBADAH_PT_25K_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SARANAIBADAH_PT_25K_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SARANAIBADAH_PT_25K_12.addFeatures(features_SARANAIBADAH_PT_25K_12);
var lyr_SARANAIBADAH_PT_25K_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SARANAIBADAH_PT_25K_12, 
                style: style_SARANAIBADAH_PT_25K_12,
                popuplayertitle: "SARANAIBADAH_PT_25K",
                interactive: true,
                title: '<img src="styles/legend/SARANAIBADAH_PT_25K_12.png" /> SARANAIBADAH_PT_25K'
            });
var format_KESEHATAN_PT_25K_13 = new ol.format.GeoJSON();
var features_KESEHATAN_PT_25K_13 = format_KESEHATAN_PT_25K_13.readFeatures(json_KESEHATAN_PT_25K_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KESEHATAN_PT_25K_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KESEHATAN_PT_25K_13.addFeatures(features_KESEHATAN_PT_25K_13);
var lyr_KESEHATAN_PT_25K_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KESEHATAN_PT_25K_13, 
                style: style_KESEHATAN_PT_25K_13,
                popuplayertitle: "KESEHATAN_PT_25K",
                interactive: true,
                title: '<img src="styles/legend/KESEHATAN_PT_25K_13.png" /> KESEHATAN_PT_25K'
            });
var format_TOPONIMI_PT_25K_14 = new ol.format.GeoJSON();
var features_TOPONIMI_PT_25K_14 = format_TOPONIMI_PT_25K_14.readFeatures(json_TOPONIMI_PT_25K_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TOPONIMI_PT_25K_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TOPONIMI_PT_25K_14.addFeatures(features_TOPONIMI_PT_25K_14);
var lyr_TOPONIMI_PT_25K_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TOPONIMI_PT_25K_14, 
                style: style_TOPONIMI_PT_25K_14,
                popuplayertitle: "TOPONIMI_PT_25K",
                interactive: true,
                title: '<img src="styles/legend/TOPONIMI_PT_25K_14.png" /> TOPONIMI_PT_25K'
            });
var format_PEMERINTAHAN_PT_25K_15 = new ol.format.GeoJSON();
var features_PEMERINTAHAN_PT_25K_15 = format_PEMERINTAHAN_PT_25K_15.readFeatures(json_PEMERINTAHAN_PT_25K_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMERINTAHAN_PT_25K_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMERINTAHAN_PT_25K_15.addFeatures(features_PEMERINTAHAN_PT_25K_15);
var lyr_PEMERINTAHAN_PT_25K_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMERINTAHAN_PT_25K_15, 
                style: style_PEMERINTAHAN_PT_25K_15,
                popuplayertitle: "PEMERINTAHAN_PT_25K",
                interactive: true,
                title: '<img src="styles/legend/PEMERINTAHAN_PT_25K_15.png" /> PEMERINTAHAN_PT_25K'
            });
var format_rumah_16 = new ol.format.GeoJSON();
var features_rumah_16 = format_rumah_16.readFeatures(json_rumah_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rumah_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rumah_16.addFeatures(features_rumah_16);
var lyr_rumah_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rumah_16, 
                style: style_rumah_16,
                popuplayertitle: "rumah",
                interactive: true,
                title: '<img src="styles/legend/rumah_16.png" /> rumah'
            });
var format_ADMINISTRASIDESA_AR_25Kcopy_17 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25Kcopy_17 = format_ADMINISTRASIDESA_AR_25Kcopy_17.readFeatures(json_ADMINISTRASIDESA_AR_25Kcopy_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25Kcopy_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25Kcopy_17.addFeatures(features_ADMINISTRASIDESA_AR_25Kcopy_17);
var lyr_ADMINISTRASIDESA_AR_25Kcopy_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIDESA_AR_25Kcopy_17, 
                style: style_ADMINISTRASIDESA_AR_25Kcopy_17,
                popuplayertitle: "ADMINISTRASIDESA_AR_25K copy",
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIDESA_AR_25Kcopy_17.png" /> ADMINISTRASIDESA_AR_25K copy'
            });
var format_RUMAHME_18 = new ol.format.GeoJSON();
var features_RUMAHME_18 = format_RUMAHME_18.readFeatures(json_RUMAHME_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUMAHME_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUMAHME_18.addFeatures(features_RUMAHME_18);
var lyr_RUMAHME_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUMAHME_18, 
                style: style_RUMAHME_18,
                popuplayertitle: "RUMAHME",
                interactive: true,
                title: '<img src="styles/legend/RUMAHME_18.png" /> RUMAHME'
            });

lyr_ADMINISTRASIDESA_AR_25K_0.setVisible(true);lyr_agrikebun_1.setVisible(true);lyr_DANAU_AR_25K_2.setVisible(true);lyr_AGRISAWAH_AR_25K_3.setVisible(true);lyr_NONAGRIALANG_AR_25K_4.setVisible(true);lyr_AGRILADANG_AR_25K_5.setVisible(true);lyr_TAMBANGAN_PT_25K_6.setVisible(true);lyr_kesehatan_7.setVisible(true);lyr_jalan_8.setVisible(true);lyr_NIAGA_PT_25K_9.setVisible(true);lyr_SUNGAI_LN_25K_10.setVisible(true);lyr_PENDIDIKAN_PT_25K_11.setVisible(true);lyr_SARANAIBADAH_PT_25K_12.setVisible(true);lyr_KESEHATAN_PT_25K_13.setVisible(true);lyr_TOPONIMI_PT_25K_14.setVisible(true);lyr_PEMERINTAHAN_PT_25K_15.setVisible(true);lyr_rumah_16.setVisible(true);lyr_ADMINISTRASIDESA_AR_25Kcopy_17.setVisible(true);lyr_RUMAHME_18.setVisible(true);
var layersList = [lyr_ADMINISTRASIDESA_AR_25K_0,lyr_agrikebun_1,lyr_DANAU_AR_25K_2,lyr_AGRISAWAH_AR_25K_3,lyr_NONAGRIALANG_AR_25K_4,lyr_AGRILADANG_AR_25K_5,lyr_TAMBANGAN_PT_25K_6,lyr_kesehatan_7,lyr_jalan_8,lyr_NIAGA_PT_25K_9,lyr_SUNGAI_LN_25K_10,lyr_PENDIDIKAN_PT_25K_11,lyr_SARANAIBADAH_PT_25K_12,lyr_KESEHATAN_PT_25K_13,lyr_TOPONIMI_PT_25K_14,lyr_PEMERINTAHAN_PT_25K_15,lyr_rumah_16,lyr_ADMINISTRASIDESA_AR_25Kcopy_17,lyr_RUMAHME_18];
lyr_ADMINISTRASIDESA_AR_25K_0.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'RT': 'RT', 'rw': 'rw', 'RW_1': 'RW_1', });
lyr_agrikebun_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSKBN': 'JNSKBN', 'FCODE': 'FCODE', 'PUDATE': 'PUDATE', 'AQDATE': 'AQDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_DANAU_AR_25K_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'OTODAN': 'OTODAN', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'VOLTAP': 'VOLTAP', 'DTA': 'DTA', 'SEDIMN': 'SEDIMN', 'VLCSDN': 'VLCSDN', 'QUAAR': 'QUAAR', 'CRH': 'CRH', 'KPTS': 'KPTS', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'LOKASI': 'LOKASI', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_AGRISAWAH_AR_25K_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSWH': 'JNSSWH', 'FCODE': 'FCODE', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'TNMSWH': 'TNMSWH', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_NONAGRIALANG_AR_25K_4.set('fieldAliases', {'AQDATE': 'AQDATE', 'FCODE': 'FCODE', 'KLSRMP': 'KLSRMP', 'KODATC': 'KODATC', 'NAMOBJ': 'NAMOBJ', 'PUDATE': 'PUDATE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'JNSPDG': 'JNSPDG', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_AGRILADANG_AR_25K_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JNSLDG': 'JNSLDG', 'TNMLDG': 'TNMLDG', 'TIPLDG': 'TIPLDG', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_TAMBANGAN_PT_25K_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_kesehatan_7.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'status': 'status', 'toilets_ha': 'toilets_ha', 'access': 'access', 'health_fac': 'health_fac', 'amenity': 'amenity', 'layer': 'layer', 'access_roo': 'access_roo', 'healthcare': 'healthcare', 'parking': 'parking', 'health_f_1': 'health_f_1', 'roof_mater': 'roof_mater', 'name': 'name', 'isced_leve': 'isced_leve', 'surface': 'surface', 'addr_house': 'addr_house', 'health_f_2': 'health_f_2', 'depth': 'depth', 'blockage': 'blockage', 'pump': 'pump', 'tunnel': 'tunnel', 'building_m': 'building_m', 'landuse': 'landuse', 'office': 'office', 'addr_stree': 'addr_stree', 'military': 'military', 'communicat': 'communicat', 'opening_ho': 'opening_ho', 'toilets_di': 'toilets_di', 'highway': 'highway', 'diameter': 'diameter', 'natural': 'natural', 'staff_coun': 'staff_coun', 'smoothness': 'smoothness', 'railway': 'railway', 'man_made': 'man_made', 'covered': 'covered', 'operator_t': 'operator_t', 'width': 'width', 'network': 'network', 'shop': 'shop', 'oneway': 'oneway', 'medical_sy': 'medical_sy', 'barrier': 'barrier', 'communic_1': 'communic_1', 'staff_co_1': 'staff_co_1', 'building': 'building', 'capacity': 'capacity', 'operator': 'operator', 'water': 'water', 'bridge': 'bridge', 'aeroway': 'aeroway', 'government': 'government', 'waterway': 'waterway', 'public_tra': 'public_tra', 'tower': 'tower', });
lyr_jalan_8.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'layer': 'layer', 'parking': 'parking', 'name': 'name', 'surface': 'surface', 'depth': 'depth', 'blockage': 'blockage', 'pump': 'pump', 'tunnel': 'tunnel', 'landuse': 'landuse', 'highway': 'highway', 'diameter': 'diameter', 'natural': 'natural', 'smoothness': 'smoothness', 'railway': 'railway', 'man_made': 'man_made', 'covered': 'covered', 'width': 'width', 'oneway': 'oneway', 'barrier': 'barrier', 'building': 'building', 'capacity': 'capacity', 'operator': 'operator', 'water': 'water', 'bridge': 'bridge', 'aeroway': 'aeroway', 'waterway': 'waterway', 'public_tra': 'public_tra', });
lyr_NIAGA_PT_25K_9.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'FUNGSI': 'FUNGSI', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'FGSKOD': 'FGSKOD', 'JNSPSR': 'JNSPSR', 'JNSTKO': 'JNSTKO', 'JNSKTR': 'JNSKTR', 'PRSTRP': 'PRSTRP', });
lyr_SUNGAI_LN_25K_10.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_PENDIDIKAN_PT_25K_11.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'KATPDK': 'KATPDK', 'JLPDDK': 'JLPDDK', 'FGGPDK': 'FGGPDK', 'REMARK': 'REMARK', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JJGPDF': 'JJGPDF', 'JNSPDL': 'JNSPDL', });
lyr_SARANAIBADAH_PT_25K_12.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'FGSIBD': 'FGSIBD', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_KESEHATAN_PT_25K_13.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'REMARK': 'REMARK', 'TIPSHT': 'TIPSHT', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'FSKADD': 'FSKADD', });
lyr_TOPONIMI_PT_25K_14.set('fieldAliases', {'FCODE': 'FCODE', 'NAMOBJ': 'NAMOBJ', 'ALIAS': 'ALIAS', 'LOKTPN': 'LOKTPN', 'REMARK': 'REMARK', 'KLSTPN': 'KLSTPN', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'FTYPE': 'FTYPE', 'LAT': 'LAT', 'LON': 'LON', 'KOORDY': 'KOORDY', 'KOORDX': 'KOORDX', 'KOORDINAT1': 'KOORDINAT1', 'KORDINTAT2': 'KORDINTAT2', 'LUAS': 'LUAS', 'Elevasi': 'Elevasi', 'NAMLOK': 'NAMLOK', 'NAMSPE': 'NAMSPE', 'NAMMAP': 'NAMMAP', 'NAMGAZ': 'NAMGAZ', 'SJHNAM': 'SJHNAM', 'ARTINAM': 'ARTINAM', 'ASLBHS': 'ASLBHS', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'STATUS': 'STATUS', });
lyr_PEMERINTAHAN_PT_25K_15.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_rumah_16.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'status': 'status', 'toilets_ha': 'toilets_ha', 'access': 'access', 'health_fac': 'health_fac', 'amenity': 'amenity', 'layer': 'layer', 'access_roo': 'access_roo', 'healthcare': 'healthcare', 'parking': 'parking', 'health_f_1': 'health_f_1', 'roof_mater': 'roof_mater', 'name': 'name', 'isced_leve': 'isced_leve', 'surface': 'surface', 'addr_house': 'addr_house', 'health_f_2': 'health_f_2', 'depth': 'depth', 'blockage': 'blockage', 'pump': 'pump', 'tunnel': 'tunnel', 'building_m': 'building_m', 'landuse': 'landuse', 'office': 'office', 'addr_stree': 'addr_stree', 'military': 'military', 'communicat': 'communicat', 'opening_ho': 'opening_ho', 'toilets_di': 'toilets_di', 'highway': 'highway', 'diameter': 'diameter', 'natural': 'natural', 'staff_coun': 'staff_coun', 'smoothness': 'smoothness', 'railway': 'railway', 'man_made': 'man_made', 'covered': 'covered', 'operator_t': 'operator_t', 'width': 'width', 'network': 'network', 'shop': 'shop', 'oneway': 'oneway', 'medical_sy': 'medical_sy', 'barrier': 'barrier', 'communic_1': 'communic_1', 'staff_co_1': 'staff_co_1', 'building': 'building', 'capacity': 'capacity', 'operator': 'operator', 'water': 'water', 'bridge': 'bridge', 'aeroway': 'aeroway', 'government': 'government', 'waterway': 'waterway', 'public_tra': 'public_tra', 'tower': 'tower', });
lyr_ADMINISTRASIDESA_AR_25Kcopy_17.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'RT': 'RT', 'rw': 'rw', 'RW_1': 'RW_1', });
lyr_RUMAHME_18.set('fieldAliases', {'id': 'id', 'NAMA': 'NAMA', });
lyr_ADMINISTRASIDESA_AR_25K_0.set('fieldImages', {'KDPPUM': '', 'NAMOBJ': '', 'RT': '', 'rw': '', 'RW_1': '', });
lyr_agrikebun_1.set('fieldImages', {'NAMOBJ': 'TextEdit', 'JNSKBN': 'TextEdit', 'FCODE': 'TextEdit', 'PUDATE': 'DateTime', 'AQDATE': 'DateTime', 'REMARK': 'TextEdit', 'KODLCO': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_DANAU_AR_25K_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'OTODAN': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'KODLCO': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'VOLTAP': 'TextEdit', 'DTA': 'TextEdit', 'SEDIMN': 'TextEdit', 'VLCSDN': 'TextEdit', 'QUAAR': 'TextEdit', 'CRH': 'TextEdit', 'KPTS': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'LOKASI': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_AGRISAWAH_AR_25K_3.set('fieldImages', {'NAMOBJ': 'TextEdit', 'JNSSWH': 'TextEdit', 'FCODE': 'TextEdit', 'AQDATE': 'DateTime', 'PUDATE': 'DateTime', 'REMARK': 'TextEdit', 'KODLCO': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'TNMSWH': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_NONAGRIALANG_AR_25K_4.set('fieldImages', {'AQDATE': '', 'FCODE': '', 'KLSRMP': '', 'KODATC': '', 'NAMOBJ': '', 'PUDATE': '', 'REMARK': '', 'SRS_ID': '', 'JNSPDG': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_AGRILADANG_AR_25K_5.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'AQDATE': 'DateTime', 'PUDATE': 'DateTime', 'KODLCO': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'JNSLDG': 'TextEdit', 'TNMLDG': 'TextEdit', 'TIPLDG': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_TAMBANGAN_PT_25K_6.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_kesehatan_7.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'status': 'TextEdit', 'toilets_ha': 'TextEdit', 'access': 'TextEdit', 'health_fac': 'TextEdit', 'amenity': 'TextEdit', 'layer': 'TextEdit', 'access_roo': 'TextEdit', 'healthcare': 'TextEdit', 'parking': 'TextEdit', 'health_f_1': 'TextEdit', 'roof_mater': 'TextEdit', 'name': 'TextEdit', 'isced_leve': 'TextEdit', 'surface': 'TextEdit', 'addr_house': 'TextEdit', 'health_f_2': 'TextEdit', 'depth': 'TextEdit', 'blockage': 'TextEdit', 'pump': 'TextEdit', 'tunnel': 'TextEdit', 'building_m': 'TextEdit', 'landuse': 'TextEdit', 'office': 'TextEdit', 'addr_stree': 'TextEdit', 'military': 'TextEdit', 'communicat': 'TextEdit', 'opening_ho': 'TextEdit', 'toilets_di': 'TextEdit', 'highway': 'TextEdit', 'diameter': 'TextEdit', 'natural': 'TextEdit', 'staff_coun': 'TextEdit', 'smoothness': 'TextEdit', 'railway': 'TextEdit', 'man_made': 'TextEdit', 'covered': 'TextEdit', 'operator_t': 'TextEdit', 'width': 'TextEdit', 'network': 'TextEdit', 'shop': 'TextEdit', 'oneway': 'TextEdit', 'medical_sy': 'TextEdit', 'barrier': 'TextEdit', 'communic_1': 'TextEdit', 'staff_co_1': 'TextEdit', 'building': 'TextEdit', 'capacity': 'TextEdit', 'operator': 'TextEdit', 'water': 'TextEdit', 'bridge': 'TextEdit', 'aeroway': 'TextEdit', 'government': 'TextEdit', 'waterway': 'TextEdit', 'public_tra': 'TextEdit', 'tower': 'TextEdit', });
lyr_jalan_8.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'layer': 'TextEdit', 'parking': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'depth': 'TextEdit', 'blockage': 'TextEdit', 'pump': 'TextEdit', 'tunnel': 'TextEdit', 'landuse': 'TextEdit', 'highway': 'TextEdit', 'diameter': 'TextEdit', 'natural': 'TextEdit', 'smoothness': 'TextEdit', 'railway': 'TextEdit', 'man_made': 'TextEdit', 'covered': 'TextEdit', 'width': 'TextEdit', 'oneway': 'TextEdit', 'barrier': 'TextEdit', 'building': 'TextEdit', 'capacity': 'TextEdit', 'operator': 'TextEdit', 'water': 'TextEdit', 'bridge': 'TextEdit', 'aeroway': 'TextEdit', 'waterway': 'TextEdit', 'public_tra': 'TextEdit', });
lyr_NIAGA_PT_25K_9.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'FUNGSI': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'FGSKOD': 'TextEdit', 'JNSPSR': 'TextEdit', 'JNSTKO': 'TextEdit', 'JNSKTR': 'TextEdit', 'PRSTRP': 'TextEdit', });
lyr_SUNGAI_LN_25K_10.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_PENDIDIKAN_PT_25K_11.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'KATPDK': 'TextEdit', 'JLPDDK': 'TextEdit', 'FGGPDK': 'TextEdit', 'REMARK': 'TextEdit', 'FCODE': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'JJGPDF': 'TextEdit', 'JNSPDL': 'TextEdit', });
lyr_SARANAIBADAH_PT_25K_12.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'FGSIBD': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_KESEHATAN_PT_25K_13.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'REMARK': 'TextEdit', 'TIPSHT': 'TextEdit', 'FCODE': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'FSKADD': 'TextEdit', });
lyr_TOPONIMI_PT_25K_14.set('fieldImages', {'FCODE': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ALIAS': 'TextEdit', 'LOKTPN': 'TextEdit', 'REMARK': 'TextEdit', 'KLSTPN': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'FTYPE': 'TextEdit', 'LAT': 'TextEdit', 'LON': 'TextEdit', 'KOORDY': 'TextEdit', 'KOORDX': 'TextEdit', 'KOORDINAT1': 'TextEdit', 'KORDINTAT2': 'TextEdit', 'LUAS': 'TextEdit', 'Elevasi': 'TextEdit', 'NAMLOK': 'TextEdit', 'NAMSPE': 'TextEdit', 'NAMMAP': 'TextEdit', 'NAMGAZ': 'TextEdit', 'SJHNAM': 'TextEdit', 'ARTINAM': 'TextEdit', 'ASLBHS': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'STATUS': 'TextEdit', });
lyr_PEMERINTAHAN_PT_25K_15.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FGSGOV': 'TextEdit', 'LUAS': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_rumah_16.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'status': 'TextEdit', 'toilets_ha': 'TextEdit', 'access': 'TextEdit', 'health_fac': 'TextEdit', 'amenity': 'TextEdit', 'layer': 'TextEdit', 'access_roo': 'TextEdit', 'healthcare': 'TextEdit', 'parking': 'TextEdit', 'health_f_1': 'TextEdit', 'roof_mater': 'TextEdit', 'name': 'TextEdit', 'isced_leve': 'TextEdit', 'surface': 'TextEdit', 'addr_house': 'TextEdit', 'health_f_2': 'TextEdit', 'depth': 'TextEdit', 'blockage': 'TextEdit', 'pump': 'TextEdit', 'tunnel': 'TextEdit', 'building_m': 'TextEdit', 'landuse': 'TextEdit', 'office': 'TextEdit', 'addr_stree': 'TextEdit', 'military': 'TextEdit', 'communicat': 'TextEdit', 'opening_ho': 'TextEdit', 'toilets_di': 'TextEdit', 'highway': 'TextEdit', 'diameter': 'TextEdit', 'natural': 'TextEdit', 'staff_coun': 'TextEdit', 'smoothness': 'TextEdit', 'railway': 'TextEdit', 'man_made': 'TextEdit', 'covered': 'TextEdit', 'operator_t': 'TextEdit', 'width': 'TextEdit', 'network': 'TextEdit', 'shop': 'TextEdit', 'oneway': 'TextEdit', 'medical_sy': 'TextEdit', 'barrier': 'TextEdit', 'communic_1': 'TextEdit', 'staff_co_1': 'TextEdit', 'building': 'TextEdit', 'capacity': 'TextEdit', 'operator': 'TextEdit', 'water': 'TextEdit', 'bridge': 'TextEdit', 'aeroway': 'TextEdit', 'government': 'TextEdit', 'waterway': 'TextEdit', 'public_tra': 'TextEdit', 'tower': 'TextEdit', });
lyr_ADMINISTRASIDESA_AR_25Kcopy_17.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'RT': 'TextEdit', 'rw': 'TextEdit', 'RW_1': 'TextEdit', });
lyr_RUMAHME_18.set('fieldImages', {'id': 'TextEdit', 'NAMA': 'TextEdit', });
lyr_ADMINISTRASIDESA_AR_25K_0.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'RT': 'no label', 'rw': 'no label', 'RW_1': 'no label', });
lyr_agrikebun_1.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSKBN': 'no label', 'FCODE': 'no label', 'PUDATE': 'no label', 'AQDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_DANAU_AR_25K_2.set('fieldLabels', {'NAMOBJ': 'no label', 'OTODAN': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'VOLTAP': 'no label', 'DTA': 'no label', 'SEDIMN': 'no label', 'VLCSDN': 'no label', 'QUAAR': 'no label', 'CRH': 'no label', 'KPTS': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'LOKASI': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_AGRISAWAH_AR_25K_3.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSWH': 'no label', 'FCODE': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'TNMSWH': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_NONAGRIALANG_AR_25K_4.set('fieldLabels', {'AQDATE': 'no label', 'FCODE': 'no label', 'KLSRMP': 'no label', 'KODATC': 'no label', 'NAMOBJ': 'no label', 'PUDATE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'JNSPDG': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_AGRILADANG_AR_25K_5.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JNSLDG': 'no label', 'TNMLDG': 'no label', 'TIPLDG': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_TAMBANGAN_PT_25K_6.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_kesehatan_7.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'status': 'no label', 'toilets_ha': 'no label', 'access': 'no label', 'health_fac': 'no label', 'amenity': 'no label', 'layer': 'no label', 'access_roo': 'no label', 'healthcare': 'no label', 'parking': 'no label', 'health_f_1': 'no label', 'roof_mater': 'no label', 'name': 'no label', 'isced_leve': 'no label', 'surface': 'no label', 'addr_house': 'no label', 'health_f_2': 'no label', 'depth': 'no label', 'blockage': 'no label', 'pump': 'no label', 'tunnel': 'no label', 'building_m': 'no label', 'landuse': 'no label', 'office': 'no label', 'addr_stree': 'no label', 'military': 'no label', 'communicat': 'no label', 'opening_ho': 'no label', 'toilets_di': 'no label', 'highway': 'no label', 'diameter': 'no label', 'natural': 'no label', 'staff_coun': 'no label', 'smoothness': 'no label', 'railway': 'no label', 'man_made': 'no label', 'covered': 'no label', 'operator_t': 'no label', 'width': 'no label', 'network': 'no label', 'shop': 'no label', 'oneway': 'no label', 'medical_sy': 'no label', 'barrier': 'no label', 'communic_1': 'no label', 'staff_co_1': 'no label', 'building': 'no label', 'capacity': 'no label', 'operator': 'no label', 'water': 'no label', 'bridge': 'no label', 'aeroway': 'no label', 'government': 'no label', 'waterway': 'no label', 'public_tra': 'no label', 'tower': 'no label', });
lyr_jalan_8.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', 'layer': 'no label', 'parking': 'no label', 'name': 'header label - visible with data', 'surface': 'no label', 'depth': 'no label', 'blockage': 'no label', 'pump': 'no label', 'tunnel': 'no label', 'landuse': 'no label', 'highway': 'no label', 'diameter': 'no label', 'natural': 'no label', 'smoothness': 'no label', 'railway': 'no label', 'man_made': 'no label', 'covered': 'no label', 'width': 'no label', 'oneway': 'no label', 'barrier': 'no label', 'building': 'no label', 'capacity': 'no label', 'operator': 'no label', 'water': 'no label', 'bridge': 'no label', 'aeroway': 'no label', 'waterway': 'no label', 'public_tra': 'no label', });
lyr_NIAGA_PT_25K_9.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'FUNGSI': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'FGSKOD': 'no label', 'JNSPSR': 'no label', 'JNSTKO': 'no label', 'JNSKTR': 'no label', 'PRSTRP': 'no label', });
lyr_SUNGAI_LN_25K_10.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_PENDIDIKAN_PT_25K_11.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'KATPDK': 'no label', 'JLPDDK': 'no label', 'FGGPDK': 'no label', 'REMARK': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JJGPDF': 'no label', 'JNSPDL': 'no label', });
lyr_SARANAIBADAH_PT_25K_12.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'FGSIBD': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_KESEHATAN_PT_25K_13.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'REMARK': 'no label', 'TIPSHT': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'FSKADD': 'no label', });
lyr_TOPONIMI_PT_25K_14.set('fieldLabels', {'FCODE': 'no label', 'NAMOBJ': 'no label', 'ALIAS': 'no label', 'LOKTPN': 'no label', 'REMARK': 'no label', 'KLSTPN': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'FTYPE': 'no label', 'LAT': 'no label', 'LON': 'no label', 'KOORDY': 'no label', 'KOORDX': 'no label', 'KOORDINAT1': 'no label', 'KORDINTAT2': 'no label', 'LUAS': 'no label', 'Elevasi': 'no label', 'NAMLOK': 'no label', 'NAMSPE': 'no label', 'NAMMAP': 'no label', 'NAMGAZ': 'no label', 'SJHNAM': 'no label', 'ARTINAM': 'no label', 'ASLBHS': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'STATUS': 'no label', });
lyr_PEMERINTAHAN_PT_25K_15.set('fieldLabels', {'NAMOBJ': 'no label', 'FGSGOV': 'no label', 'LUAS': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_rumah_16.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'status': 'no label', 'toilets_ha': 'no label', 'access': 'no label', 'health_fac': 'no label', 'amenity': 'no label', 'layer': 'no label', 'access_roo': 'no label', 'healthcare': 'no label', 'parking': 'no label', 'health_f_1': 'no label', 'roof_mater': 'no label', 'name': 'no label', 'isced_leve': 'no label', 'surface': 'no label', 'addr_house': 'no label', 'health_f_2': 'no label', 'depth': 'no label', 'blockage': 'no label', 'pump': 'no label', 'tunnel': 'no label', 'building_m': 'no label', 'landuse': 'no label', 'office': 'no label', 'addr_stree': 'no label', 'military': 'no label', 'communicat': 'no label', 'opening_ho': 'no label', 'toilets_di': 'no label', 'highway': 'no label', 'diameter': 'no label', 'natural': 'no label', 'staff_coun': 'no label', 'smoothness': 'no label', 'railway': 'no label', 'man_made': 'no label', 'covered': 'no label', 'operator_t': 'no label', 'width': 'no label', 'network': 'no label', 'shop': 'no label', 'oneway': 'no label', 'medical_sy': 'no label', 'barrier': 'no label', 'communic_1': 'no label', 'staff_co_1': 'no label', 'building': 'no label', 'capacity': 'no label', 'operator': 'no label', 'water': 'no label', 'bridge': 'no label', 'aeroway': 'no label', 'government': 'no label', 'waterway': 'no label', 'public_tra': 'no label', 'tower': 'no label', });
lyr_ADMINISTRASIDESA_AR_25Kcopy_17.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'RT': 'no label', 'rw': 'no label', 'RW_1': 'no label', });
lyr_RUMAHME_18.set('fieldLabels', {'id': 'no label', 'NAMA': 'no label', });
lyr_RUMAHME_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});