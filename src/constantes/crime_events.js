const { crimeTypes } = require('./crime_enums');

const crimes = [
    {
        "type": "Feature",
        "properties": {
            id : 1,
            type : crimeTypes.ACCIDENTE
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03141212463379,
                -12.021114842872734
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            id : 2,
            type : crimeTypes.ASALTO
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03308582305908,
                -12.02210123593874
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            id : 3,
            type : crimeTypes.ASESINATO
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03169107437134,
                -12.022720353143571
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            id : 4,
            type : crimeTypes.ASESINATO
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03149795532227,
                -12.024252399762426
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            id : 5,
            type: crimeTypes.ROBO
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.0354676246643,
                -12.023307988494615
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            id : 6,
            type: crimeTypes.VIOLENCIA
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03492045402527,
                -12.022374067424924
            ]
        }
    }
]

exports.crimes = crimes;