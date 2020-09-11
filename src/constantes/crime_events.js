const { crimeTypes } = require('./crime_enums');

const crimes = [
    {
        "type": "Feature",
        "properties": {
            "id": 1,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05766034237337,
                -12.04533385333985
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 2,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05492168203857,
                -12.014210257088692
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 3,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05910541163016,
                -12.041350595894537
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 4,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05377720781765,
                -12.010586634652963
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 5,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03930661612853,
                -12.026679676106596
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 6,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04544348937797,
                -12.021632793396304
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 7,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03222677888944,
                -12.014462275889388
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 8,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.01993143832264,
                -12.01904629021791
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 9,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02914523099724,
                -12.038369168246263
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 10,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05666346163792,
                -12.041100785079506
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 11,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.0508715473074,
                -12.031296921133388
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 12,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.0541453488496,
                -12.035032366497445
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 13,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02537032886467,
                -12.044182798461057
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 14,
            "type": "Accidente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03886632445875,
                -12.02706758608445
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 15,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02061238474165,
                -12.035504816632068
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 16,
            "type": "Accidente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03846782324861,
                -12.031649031374858
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 17,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04987936522836,
                -12.039958739248695
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 18,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03133808824876,
                -12.037202635707079
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 19,
            "type": "Accidente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.06009190733644,
                -12.038239881861982
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 20,
            "type": "Accidente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03438818285694,
                -12.029647822226513
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 21,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05343641831922,
                -12.029018893940707
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 22,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04565791524948,
                -12.026429259820596
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 23,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.0540531069515,
                -12.027581649559052
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 24,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03627498132305,
                -12.01039651550629
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 25,
            "type": "Accidente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.059704973108,
                -12.028209117317296
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 26,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03181926188412,
                -12.042455104790827
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 27,
            "type": "Accidente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.06133679945596,
                -12.020754228829222
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 28,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02528825257124,
                -12.036706584575336
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 29,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03949339697255,
                -12.045267414375324
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 30,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05980820920699,
                -12.025507107501788
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 31,
            "type": "Accidente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02302228956324,
                -12.024766283274115
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 32,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04636034178797,
                -12.032066691894068
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 33,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02049388610311,
                -12.040461161398696
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 34,
            "type": "Accidente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04924175335965,
                -12.026285682890222
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 35,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04117044421143,
                -12.012507670113141
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 36,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02840161931066,
                -12.03623475472279
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 37,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03780606440787,
                -12.033732558752023
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 38,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03631390497071,
                -12.030946181225751
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 39,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03652519670855,
                -12.029214215072113
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 40,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02324996900899,
                -12.02913515988208
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 41,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02557300399451,
                -12.035260670129047
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 42,
            "type": "Accidente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05231425729708,
                -12.040993593764895
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 43,
            "type": "Accidente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05463699731159,
                -12.02712305216266
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 44,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05218491372474,
                -12.016233912295066
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 45,
            "type": "Accidente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03644151285283,
                -12.043597901432323
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 46,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02816585083706,
                -12.03810130715878
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 47,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02014853929916,
                -12.024667230866582
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 48,
            "type": "Accidente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05910691082569,
                -12.018814840967986
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 49,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02089617103361,
                -12.009293599416916
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 50,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05737739469434,
                -12.032394284115874
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 51,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04695248354577,
                -12.01836556725612
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 52,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03287069689466,
                -12.01205428179941
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 53,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03789758101533,
                -12.042641850220473
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 54,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03327344416957,
                -12.01638530135434
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 55,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04123401438605,
                -12.022869690606218
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 56,
            "type": "Accidente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.0245417590091,
                -12.044798529788068
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 57,
            "type": "Accidente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04297940654975,
                -12.029348387668621
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 58,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03400359686664,
                -12.009051701867763
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 59,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05865933714769,
                -12.022232801236358
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 60,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03558519242972,
                -12.02710925973212
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 61,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04934313088573,
                -12.021776672545373
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 62,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04462753001378,
                -12.015323831750042
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 63,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05476775495475,
                -12.037688308820744
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 64,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04689272138307,
                -12.016201770099954
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 65,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03281301266897,
                -12.012104490221605
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 66,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03208666819584,
                -12.010521108645332
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 67,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05433639777654,
                -12.030823311404133
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 68,
            "type": "Accidente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03741087547955,
                -12.043259087587243
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 69,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03511294234332,
                -12.025235007126778
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 70,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02575822528864,
                -12.00893407390008
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 71,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03088453956471,
                -12.016532002635525
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 72,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02070564259749,
                -12.037918611243535
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 73,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04629985003129,
                -12.015673375558215
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 74,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03763777885102,
                -12.0170290294862
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 75,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02082777326116,
                -12.009723964519507
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 76,
            "type": "Accidente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02466398093591,
                -12.042493537050753
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 77,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05219063880043,
                -12.034280485285414
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 78,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02730080882066,
                -12.013927457540879
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 79,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02397872302049,
                -12.044706989618279
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 80,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02886555002453,
                -12.026107503488078
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 81,
            "type": "Accidente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02646673407159,
                -12.03358037184811
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 82,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04485021302206,
                -12.01574311856529
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 83,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04542938128468,
                -12.039934283082012
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 84,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.0461737205069,
                -12.02703787974341
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 85,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.0497088603753,
                -12.033596644384671
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 86,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.0506861675356,
                -12.0449185271687
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 87,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05477170145929,
                -12.017449266473841
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 88,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03707872577232,
                -12.04249508409051
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 89,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03033254328233,
                -12.031549106327436
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 90,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.038815357149,
                -12.009960971410543
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 91,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03324876524736,
                -12.021447559837142
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 92,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03046233392611,
                -12.036596568678814
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 93,
            "type": "Accidente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03237756775508,
                -12.03623954912598
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 94,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02203073502396,
                -12.018095951011558
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 95,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04915788770407,
                -12.043970529548186
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 96,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03393604305525,
                -12.009017359625924
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 97,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02707440248308,
                -12.039133619395368
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 98,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.0487860979402,
                -12.026392751578662
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 99,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04860241039506,
                -12.043943567731226
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 100,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05665629164231,
                -12.013858398153562
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 101,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02123826893929,
                -12.04227589466812
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 102,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03376956626703,
                -12.028976822974753
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 103,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.0366980617746,
                -12.009392435115593
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 104,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04722787094093,
                -12.024409513145265
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 105,
            "type": "Accidente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04639867222524,
                -12.013471769262068
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 106,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02095050942292,
                -12.032300113465508
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 107,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05052930159421,
                -12.042084164399697
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 108,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.0398487356107,
                -12.032657850460104
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 109,
            "type": "Accidente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02581579162349,
                -12.016846304494997
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 110,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02533097305131,
                -12.024112999500707
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 111,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03478955627266,
                -12.039057944229352
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 112,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03321300984625,
                -12.016447880416653
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 113,
            "type": "Accidente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05545891533208,
                -12.009674046566614
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 114,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05768563520215,
                -12.021703146130006
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 115,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03060506914706,
                -12.039795600567311
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 116,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03386798511802,
                -12.01581072216028
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 117,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02237038593165,
                -12.040176724317114
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 118,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02199881066593,
                -12.037937882830088
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 119,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.0347477244368,
                -12.038021433269373
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 120,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04410048474769,
                -12.018699733951326
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 121,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04711849741172,
                -12.040469476547104
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 122,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04652304042926,
                -12.014119843483337
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 123,
            "type": "Accidente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04403394994273,
                -12.036013688944605
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 124,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02745168492628,
                -12.030507505533555
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 125,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02234010498483,
                -12.0315599370354
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 126,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04767461391647,
                -12.026990716710477
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 127,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03139760735836,
                -12.025824833465562
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 128,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02311790760726,
                -12.023354586910287
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 129,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.0298391132375,
                -12.024540427012607
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 130,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02969476467871,
                -12.022662881866633
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 131,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.0558164297642,
                -12.013271558117877
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 132,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05298715340605,
                -12.012341596922402
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 133,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04939433636335,
                -12.037659394648374
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 134,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02592498094583,
                -12.012117046925264
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 135,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.0552789438373,
                -12.037914754695981
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 136,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.0493333243663,
                -12.036006282785614
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 137,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03172908382953,
                -12.01038418879051
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 138,
            "type": "Accidente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02831718122205,
                -12.03364834004873
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 139,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05203871483802,
                -12.015814433769375
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 140,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02121414288136,
                -12.014460401468801
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 141,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04121640557351,
                -12.031117066999538
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 142,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02243791149044,
                -12.023553578882522
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 143,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05279668468941,
                -12.02064250660365
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 144,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03552195521155,
                -12.014568317693968
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 145,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02297929656946,
                -12.033135207946984
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 146,
            "type": "Accidente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05018130784121,
                -12.034134901040424
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 147,
            "type": "Accidente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.0363966898481,
                -12.03258709864342
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 148,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.039745332016,
                -12.027117601121668
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 149,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05891025021874,
                -12.042652911219212
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 150,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05465528233964,
                -12.011817178656159
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 151,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03627319775997,
                -12.032710178702565
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 152,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05139839720235,
                -12.034615449136526
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 153,
            "type": "Accidente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02761271369332,
                -12.01809970707228
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 154,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05988448126085,
                -12.024116866591111
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 155,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03673765290722,
                -12.010058852792877
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 156,
            "type": "Accidente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03495953851191,
                -12.029363275105778
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 157,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03785998346056,
                -12.034738912183768
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 158,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05126479844182,
                -12.037483979306478
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 159,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.053851459804,
                -12.017361299512693
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 160,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02369387198141,
                -12.010332398862882
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 161,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03599813724793,
                -12.04070807020196
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 162,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.06125579365326,
                -12.020167722508397
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 163,
            "type": "Accidente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04678380498692,
                -12.025648096333393
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 164,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02618764774316,
                -12.028060212737266
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 165,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05605527035871,
                -12.02400185117074
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 166,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05140944292013,
                -12.020075687560647
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 167,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02171202368791,
                -12.034797301861001
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 168,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02971424336238,
                -12.03347388231705
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 169,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02258975880419,
                -12.02449329760804
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 170,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04124126241817,
                -12.013058996570118
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 171,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04117760111427,
                -12.010828609958946
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 172,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03953184629185,
                -12.011199970436884
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 173,
            "type": "Accidente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04006100004332,
                -12.025855565428413
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 174,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02394698419961,
                -12.044439478476516
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 175,
            "type": "Accidente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02588335810547,
                -12.025582861485367
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 176,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02482375356624,
                -12.0198025080833
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 177,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.0348535081136,
                -12.03628180699382
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 178,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.0364809201262,
                -12.041760725328272
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 179,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04415398147876,
                -12.021921307160783
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 180,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03671567915605,
                -12.041066260944499
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 181,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03488360895741,
                -12.021745484761274
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 182,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02612019589678,
                -12.010749299600526
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 183,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04696519607533,
                -12.029237771774614
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 184,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03685129625525,
                -12.02265986129094
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 185,
            "type": "Accidente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04383810839462,
                -12.017614094282676
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 186,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04420550838829,
                -12.028915714089122
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 187,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02669794214788,
                -12.021599000824283
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 188,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03933892550393,
                -12.038458727820847
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 189,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.0596582238024,
                -12.021927217196088
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 190,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.0488533753624,
                -12.028465513449353
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 191,
            "type": "Accidente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.06010534151964,
                -12.035850245727593
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 192,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.0280606527808,
                -12.027652140981857
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 193,
            "type": "Accidente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02019462993722,
                -12.018280587607308
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 194,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04226857213423,
                -12.016061754054363
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 195,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05695340605811,
                -12.013543744181458
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 196,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05621063039371,
                -12.034229720031155
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 197,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03615654099387,
                -12.035179331089378
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 198,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03285782206001,
                -12.028815764510528
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 199,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02670853047142,
                -12.011028946421474
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 200,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.01967270391617,
                -12.035640430372865
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 201,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03488037208685,
                -12.02437521403943
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 202,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02383693423218,
                -12.027166966943302
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 203,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02618911778919,
                -12.024312036612757
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 204,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05034775749787,
                -12.028694847079063
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 205,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05519549946374,
                -12.029506441413737
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 206,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02749838950434,
                -12.026765050919758
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 207,
            "type": "Accidente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04445810912979,
                -12.041521885480407
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 208,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.0295832418757,
                -12.010133857125878
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 209,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.055082396319,
                -12.012816026383009
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 210,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05403777804544,
                -12.04203721402676
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 211,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04923645672842,
                -12.032096261759492
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 212,
            "type": "Accidente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02240012726308,
                -12.038609049202526
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 213,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03794612670056,
                -12.035019696527952
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 214,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05936600094084,
                -12.041093022957723
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 215,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03232729144574,
                -12.039718198063154
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 216,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03694614189035,
                -12.020181334592012
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 217,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03273349045861,
                -12.02256739702622
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 218,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05224781424813,
                -12.021707481648669
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 219,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05864230199727,
                -12.02410319170056
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 220,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02923751539967,
                -12.041622269587874
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 221,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.0608295924684,
                -12.025069945566324
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 222,
            "type": "Accidente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05518470746344,
                -12.03818335369516
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 223,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05491892369206,
                -12.03833902330301
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 224,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03016291393284,
                -12.023802792218804
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 225,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02076095089873,
                -12.04364076743926
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 226,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04186372868084,
                -12.020786908905258
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 227,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05861401353955,
                -12.032211322665464
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 228,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03236249499818,
                -12.028626642423067
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 229,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02459430712058,
                -12.01783835322736
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 230,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02003400042045,
                -12.026722601766352
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 231,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04115193711112,
                -12.045277179198905
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 232,
            "type": "Accidente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05900923022392,
                -12.008986750369386
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 233,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03452680081847,
                -12.016217401818649
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 234,
            "type": "Accidente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.01980250824468,
                -12.023958822697734
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 235,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03154284586405,
                -12.045242532594507
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 236,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04184872851422,
                -12.015859893184421
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 237,
            "type": "Accidente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.0428934221679,
                -12.011621606003901
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 238,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02964705037365,
                -12.03624886167212
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 239,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04322676694802,
                -12.017002914336558
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 240,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03112235562814,
                -12.009771960282707
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 241,
            "type": "Accidente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.0337237931516,
                -12.01737738451956
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 242,
            "type": "Accidente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.0229631112002,
                -12.03760781922915
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 243,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.0438263250346,
                -12.033401302318044
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 244,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05406610422914,
                -12.015150877679767
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 245,
            "type": "Accidente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03280416160882,
                -12.044397992612453
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 246,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.0534683036161,
                -12.0383143176788
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 247,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04558071956727,
                -12.035099340497352
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 248,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02536085047196,
                -12.03733341457077
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 249,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05035143553425,
                -12.01852533065749
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 250,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03701155763777,
                -12.021066256310112
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 251,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05860336220131,
                -12.02532372615733
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 252,
            "type": "Accidente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02757783452874,
                -12.014617018271474
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 253,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.0297021405859,
                -12.009137843902517
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 254,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03824878721828,
                -12.04397457550818
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 255,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04494829727973,
                -12.010976693580496
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 256,
            "type": "Accidente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03368672564086,
                -12.01138773112657
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 257,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03956288093624,
                -12.021756994093144
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 258,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05370556599512,
                -12.014431306184486
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 259,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.0576150294465,
                -12.029519366750042
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 260,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03742563476494,
                -12.016718591392861
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 261,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02255040235,
                -12.021733838690988
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 262,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05277712060713,
                -12.017272478132849
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 263,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05268247170731,
                -12.012201896156983
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 264,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04845192191648,
                -12.036987903254145
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 265,
            "type": "Accidente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04731308165914,
                -12.036057377969366
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 266,
            "type": "Accidente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04956862868028,
                -12.043792112381045
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 267,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04573118423707,
                -12.028845486021375
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 268,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04870680520861,
                -12.021524188561463
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 269,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03184280233023,
                -12.043580522900934
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 270,
            "type": "Accidente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03579201050462,
                -12.019785888466624
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 271,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05189955705595,
                -12.036867520412505
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 272,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.06104977246281,
                -12.040375098984075
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 273,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.060114190723,
                -12.038059586214654
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 274,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02993416730504,
                -12.016377688772886
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 275,
            "type": "Accidente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03451178015906,
                -12.018955365388178
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 276,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05955763884171,
                -12.041638177845604
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 277,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04205533864412,
                -12.036136070559845
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 278,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03026519370465,
                -12.033064575712165
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 279,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02009310227035,
                -12.043232134957409
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 280,
            "type": "Accidente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04704236977616,
                -12.018820625137801
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 281,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04851973857814,
                -12.01734475780685
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 282,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05917678211806,
                -12.029016365244951
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 283,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02579445472043,
                -12.039700375038533
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 284,
            "type": "Accidente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03672679716547,
                -12.02373720905042
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 285,
            "type": "Accidente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04183075319203,
                -12.037833201664228
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 286,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.0383154813586,
                -12.042272135987965
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 287,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.0462845058932,
                -12.040866267722725
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 288,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03632611308375,
                -12.039421650252354
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 289,
            "type": "Violencia"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04373265395952,
                -12.044178023403587
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 290,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05274611087185,
                -12.022830598875279
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 291,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.03518639675798,
                -12.018221384119386
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 292,
            "type": "Asesinato"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05090898792955,
                -12.033104447327021
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 293,
            "type": "Accidente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04811653985374,
                -12.013835591870379
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 294,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05308505909143,
                -12.032797321635313
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 295,
            "type": "Accidente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04932481087958,
                -12.022812289197047
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 296,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.02807347419512,
                -12.032937417300076
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 297,
            "type": "Robo"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05145957198023,
                -12.018938003341713
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 298,
            "type": "Accidente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.04692448205893,
                -12.044146994606987
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 299,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.05792916736695,
                -12.010875902387603
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": 300,
            "type": "Asalto"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77.0480188771548,
                -12.028399281721837
            ]
        }
    }
]

exports.crimes = crimes;