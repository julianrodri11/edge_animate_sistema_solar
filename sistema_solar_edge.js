/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: '_12',
                            type: 'image',
                            rect: ['-245px', '-30px', '1360px', '850px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1.jpg",'0px','0px']
                        },
                        {
                            id: '_1',
                            type: 'ellipse',
                            rect: ['454px', '195px', '303px', '150px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [1,"rgba(135,135,135,1.00)","solid"],
                            transform: [[],['-20']]
                        },
                        {
                            id: 'p1',
                            type: 'ellipse',
                            rect: ['553px', '198px', '25px', '25px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(192,192,192,0)",[270,[['rgba(81,73,92,1.00)',0],['rgba(212,212,212,1.00)',77]]]],
                            stroke: [1,"rgb(135, 135, 135)","none"]
                        },
                        {
                            id: 'p2',
                            type: 'ellipse',
                            rect: ['553px', '198px', '32px', '32px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(192,192,192,0)",[270,[['rgba(227,225,231,1.00)',0],['rgba(136,136,136,1.00)',77]]]],
                            stroke: [1,"rgb(135, 135, 135)","none"]
                        },
                        {
                            id: 'p3',
                            type: 'ellipse',
                            rect: ['526px', '180px', '25px', '25px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(192,192,192,0)",[270,[['rgba(248,240,163,1.00)',0],['rgba(136,136,136,1.00)',77]]]],
                            stroke: [1,"rgb(135, 135, 135)","none"]
                        },
                        {
                            id: 'p4',
                            type: 'ellipse',
                            rect: ['442px', '173px', '70px', '70px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(192,192,192,0)",[270,[['rgba(0,138,60,1.00)',0],['rgba(136,136,136,1.00)',77]]]],
                            stroke: [1,"rgb(135, 135, 135)","none"]
                        },
                        {
                            id: '_2',
                            type: 'ellipse',
                            rect: ['368px', '180px', '419px', '208px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [1,"rgba(135,135,135,1.00)","solid"],
                            transform: [[],['-20']]
                        },
                        {
                            id: '_3',
                            type: 'ellipse',
                            rect: ['269px', '159px', '548px', '272px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [1,"rgba(135,135,135,1.00)","solid"],
                            transform: [[],['-20']]
                        },
                        {
                            id: '_4',
                            type: 'ellipse',
                            rect: ['122px', '151px', '726px', '361px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [1,"rgba(135,135,135,1.00)","solid"],
                            transform: [[],['-20']]
                        },
                        {
                            id: '_5',
                            type: 'ellipse',
                            rect: ['-69px', '135px', '951px', '473px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [1,"rgba(135,135,135,1.00)","solid"],
                            transform: [[],['-20']]
                        },
                        {
                            id: 'Sol',
                            type: 'ellipse',
                            rect: ['622px', '229px', '51px', '52px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(255,241,34,1.00)"],
                            stroke: [1,"rgba(135, 135, 135, 0)","solid"],
                            transform: [[],['-20']]
                        },
                        {
                            id: 'btn_pla1',
                            type: 'rect',
                            rect: ['343px', '680px', '87px', '45px', 'auto', 'auto'],
                            overflow: 'visible',
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(192,192,192,0)",[269,[['rgba(146,146,146,1.00)',25],['rgba(255,255,255,1.00)',100]]]],
                            stroke: [1,"rgb(135, 135, 135)","solid"]
                        },
                        {
                            id: 'btn_pla2',
                            type: 'rect',
                            rect: ['445px', '679px', '87px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(192,192,192,0)",[269,[['rgba(146,146,146,1.00)',25],['rgba(255,255,255,1.00)',100]]]],
                            stroke: [1,"rgb(135, 135, 135)","solid"]
                        },
                        {
                            id: 'btn_pla3',
                            type: 'rect',
                            rect: ['554px', '679px', '87px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(192,192,192,0)",[269,[['rgba(146,146,146,1.00)',25],['rgba(255,255,255,1.00)',100]]]],
                            stroke: [1,"rgb(135, 135, 135)","solid"]
                        },
                        {
                            id: 'btn_pla4',
                            type: 'rect',
                            rect: ['662px', '680px', '87px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(192,192,192,0)",[269,[['rgba(146,146,146,1.00)',25],['rgba(255,255,255,1.00)',100]]]],
                            stroke: [1,"rgb(135, 135, 135)","solid"]
                        },
                        {
                            id: 'des',
                            display: 'none',
                            type: 'rect',
                            rect: ['18px', '434px', '258px', '298px', 'auto', 'auto'],
                            overflow: 'hidden',
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            opacity: '1',
                            fill: ["rgba(192,192,192,0)",[270,[['rgba(183,183,183,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
                            stroke: [1,"rgb(135, 135, 135)","dotted"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '889px', '785px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    labels: {
                        "Etiqueta 1": 0
                    },
                    data: [
                        [
                            "eid162",
                            "height",
                            0,
                            1165,
                            "linear",
                            "${p3}",
                            '25px',
                            '18px'
                        ],
                        [
                            "eid158",
                            "height",
                            1165,
                            1985,
                            "linear",
                            "${p3}",
                            '18px',
                            '46px'
                        ],
                        [
                            "eid156",
                            "height",
                            3150,
                            850,
                            "linear",
                            "${p3}",
                            '46px',
                            '25px'
                        ],
                        [
                            "eid25",
                            "rotateZ",
                            4000,
                            0,
                            "linear",
                            "${Sol}",
                            '-20deg',
                            '-20deg'
                        ],
                        [
                            "eid136",
                            "location",
                            0,
                            2000,
                            "linear",
                            "${p1}",
                            [[467.04, 333.57, 0, 0, 0, 0,0],[589.63, 199.69, 344.49, -123.22, 497.02, -177.79,202.33],[738.54, 207.01, 0, 0, 0, 0,359.46]]
                        ],
                        [
                            "eid138",
                            "location",
                            2000,
                            2000,
                            "linear",
                            "${p1}",
                            [[738.54, 207.01, 0, 0, 0, 0,0],[662.84, 328.42, -464.82, 193.22, -413.58, 217.61,167.39],[470.52, 332.7, 0, 0, 0, 0,370.96]]
                        ],
                        [
                            "eid110",
                            "left",
                            4000,
                            0,
                            "linear",
                            "${Sol}",
                            '622px',
                            '622px'
                        ],
                        [
                            "eid161",
                            "width",
                            0,
                            1165,
                            "linear",
                            "${p3}",
                            '25px',
                            '18px'
                        ],
                        [
                            "eid157",
                            "width",
                            1165,
                            1985,
                            "linear",
                            "${p3}",
                            '18px',
                            '46px'
                        ],
                        [
                            "eid155",
                            "width",
                            3150,
                            850,
                            "linear",
                            "${p3}",
                            '46px',
                            '25px'
                        ],
                        [
                            "eid145",
                            "location",
                            0,
                            2000,
                            "linear",
                            "${p3}",
                            [[454.13, 185.53, 0, 0, 0, 0,0],[746.16, 151.87, 380.89, 168.21, 461.73, 130.19,300.53],[756.8, 327.88, 0, 0, 0, 0,516.5]]
                        ],
                        [
                            "eid146",
                            "location",
                            2000,
                            2000,
                            "linear",
                            "${p3}",
                            [[756.8, 327.88, 0, 0, 0, 0,0],[303.7, 417.98, -273.6, -337.64, -598.27, -352.9,489.26],[447.91, 189.22, 0, 0, 0, 0,798.58]]
                        ],
                        [
                            "eid170",
                            "height",
                            0,
                            1055,
                            "linear",
                            "${p2}",
                            '16px',
                            '10px'
                        ],
                        [
                            "eid174",
                            "height",
                            1055,
                            1945,
                            "linear",
                            "${p2}",
                            '10px',
                            '32px'
                        ],
                        [
                            "eid178",
                            "height",
                            3000,
                            1000,
                            "linear",
                            "${p2}",
                            '32px',
                            '16px'
                        ],
                        [
                            "eid192",
                            "background-image",
                            0,
                            0,
                            "linear",
                            "${p2}",
                            [270,[['rgba(227,225,231,1.00)',0],['rgba(136,136,136,1.00)',77]]],
                            [270,[['rgba(227,225,231,1.00)',0],['rgba(136,136,136,1.00)',77]]]
                        ],
                        [
                            "eid198",
                            "location",
                            0,
                            2000,
                            "linear",
                            "${p4}",
                            [[159.3, 485.51, 0, 0, 0, 0,0],[396.16, 176.01, 617.85, -269.4, 1056.56, -495.67,437.08],[765.42, 145.12, 0, 0, 0, 0,815.09]]
                        ],
                        [
                            "eid199",
                            "location",
                            2000,
                            2000,
                            "linear",
                            "${p4}",
                            [[765.42, 145.12, 0, 0, 0, 0,0],[641.63, 459.36, -1046.1, 523.6, -1048.27, 604,430.48],[159.79, 486.25, 0, 0, 0, 0,940.37]]
                        ],
                        [
                            "eid194",
                            "height",
                            0,
                            1165,
                            "linear",
                            "${p4}",
                            '70px',
                            '40px'
                        ],
                        [
                            "eid195",
                            "height",
                            1165,
                            835,
                            "linear",
                            "${p4}",
                            '40px',
                            '30px'
                        ],
                        [
                            "eid204",
                            "height",
                            2000,
                            1150,
                            "linear",
                            "${p4}",
                            '30px',
                            '46px'
                        ],
                        [
                            "eid196",
                            "height",
                            3150,
                            850,
                            "linear",
                            "${p4}",
                            '46px',
                            '70px'
                        ],
                        [
                            "eid191",
                            "background-image",
                            0,
                            0,
                            "linear",
                            "${p1}",
                            [270,[['rgba(81,73,92,1.00)',0],['rgba(212,212,212,1.00)',77]]],
                            [270,[['rgba(81,73,92,1.00)',0],['rgba(212,212,212,1.00)',77]]]
                        ],
                        [
                            "eid139",
                            "location",
                            0,
                            2000,
                            "linear",
                            "${p2}",
                            [[535, 189.01, 0, 0, 0, 0,0],[761.81, 191.87, 198.28, 176.04, 211.29, 187.58,236.18],[688.97, 348.75, 0, 0, 0, 0,433.08]]
                        ],
                        [
                            "eid140",
                            "location",
                            2000,
                            2000,
                            "linear",
                            "${p2}",
                            [[688.97, 348.75, 0, 0, 0, 0,0],[384.57, 363.2, -152.94, -263.19, -195.64, -336.67,330.55],[533.13, 190.09, 0, 0, 0, 0,583.12]]
                        ],
                        [
                            "eid189",
                            "width",
                            0,
                            1815,
                            "linear",
                            "${p1}",
                            '25px',
                            '8px'
                        ],
                        [
                            "eid185",
                            "width",
                            1815,
                            2185,
                            "linear",
                            "${p1}",
                            '8px',
                            '25px'
                        ],
                        [
                            "eid190",
                            "height",
                            0,
                            1815,
                            "linear",
                            "${p1}",
                            '25px',
                            '8px'
                        ],
                        [
                            "eid186",
                            "height",
                            1815,
                            2185,
                            "linear",
                            "${p1}",
                            '8px',
                            '25px'
                        ],
                        [
                            "eid207",
                            "display",
                            0,
                            0,
                            "linear",
                            "${des}",
                            'none',
                            'none'
                        ],
                        [
                            "eid200",
                            "width",
                            0,
                            1165,
                            "linear",
                            "${p4}",
                            '70px',
                            '40px'
                        ],
                        [
                            "eid201",
                            "width",
                            1165,
                            835,
                            "linear",
                            "${p4}",
                            '40px',
                            '30px'
                        ],
                        [
                            "eid203",
                            "width",
                            2000,
                            1150,
                            "linear",
                            "${p4}",
                            '30px',
                            '46px'
                        ],
                        [
                            "eid202",
                            "width",
                            3150,
                            850,
                            "linear",
                            "${p4}",
                            '46px',
                            '70px'
                        ],
                        [
                            "eid193",
                            "background-image",
                            0,
                            0,
                            "linear",
                            "${p3}",
                            [270,[['rgba(248,240,163,1.00)',0],['rgba(136,136,136,1.00)',77]]],
                            [270,[['rgba(248,240,163,1.00)',0],['rgba(136,136,136,1.00)',77]]]
                        ],
                        [
                            "eid169",
                            "width",
                            0,
                            1055,
                            "linear",
                            "${p2}",
                            '16px',
                            '10px'
                        ],
                        [
                            "eid173",
                            "width",
                            1055,
                            1945,
                            "linear",
                            "${p2}",
                            '10px',
                            '32px'
                        ],
                        [
                            "eid177",
                            "width",
                            3000,
                            1000,
                            "linear",
                            "${p2}",
                            '32px',
                            '16px'
                        ],
                        [
                            "eid112",
                            "top",
                            4000,
                            0,
                            "linear",
                            "${Sol}",
                            '229px',
                            '229px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("sistema_solar_edgeActions.js");
})("EDGE-54682668");
