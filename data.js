var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrada",
      "name": "Entrada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.33093647917104363,
        "pitch": 0.10535829021186771,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7545126885364173,
          "pitch": 0.5790083020900205,
          "rotation": 0,
          "target": "1-sala-comedor"
        },
        {
          "yaw": -2.432273309770828,
          "pitch": 0.587884865451624,
          "rotation": 0,
          "target": "4-segunda-planta"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-sala-comedor",
      "name": "Sala comedor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3779796569978053,
          "pitch": 0.5192376236521046,
          "rotation": 0,
          "target": "3-cocina"
        },
        {
          "yaw": -2.610288944617224,
          "pitch": 0.5994625237836342,
          "rotation": 5.497787143782138,
          "target": "0-entrada"
        },
        {
          "yaw": -0.5539335383323944,
          "pitch": 0.6175431970875209,
          "rotation": 0.7853981633974483,
          "target": "2-comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-comedor",
      "name": "Comedor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.1830501578337369,
          "pitch": 0.32790512521020965,
          "rotation": 0.7853981633974483,
          "target": "3-cocina"
        },
        {
          "yaw": -0.4268743038603233,
          "pitch": 0.31132777742118733,
          "rotation": 5.497787143782138,
          "target": "1-sala-comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-cocina",
      "name": "Cocina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6563954356107153,
          "pitch": 0.48093205254749627,
          "rotation": 10.995574287564278,
          "target": "2-comedor"
        },
        {
          "yaw": 0.8644629518814053,
          "pitch": 0.34577140377236404,
          "rotation": 6.283185307179586,
          "target": "1-sala-comedor"
        },
        {
          "yaw": 1.129906132186738,
          "pitch": 0.38506636089230106,
          "rotation": 1.5707963267948966,
          "target": "0-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-segunda-planta",
      "name": "Segunda planta",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.201215820794415,
          "pitch": 0.4579821109142266,
          "rotation": 0.7853981633974483,
          "target": "1-sala-comedor"
        },
        {
          "yaw": 1.491481802896172,
          "pitch": 0.2623363221212536,
          "rotation": 0,
          "target": "10-habitacion-principal"
        },
        {
          "yaw": -2.0717721424663473,
          "pitch": 0.13710588069309892,
          "rotation": 0,
          "target": "6-segunda-habitacion"
        },
        {
          "yaw": -1.3153779980258875,
          "pitch": 0.1555279805966201,
          "rotation": 0,
          "target": "8-tercera-habitacion"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-cuarto-limpieza",
      "name": "Cuarto limpieza",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "6-segunda-habitacion",
      "name": "Segunda habitación",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.558037823172702,
          "pitch": 0.02385145324707949,
          "rotation": 7.0685834705770345,
          "target": "4-segunda-planta"
        },
        {
          "yaw": -2.5629835693285585,
          "pitch": 0.41325760338036943,
          "rotation": 1.5707963267948966,
          "target": "7-bano-habitacion-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bano-habitacion-2",
      "name": "Baño habitación 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "8-tercera-habitacion",
      "name": "Tercera habitación",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.013066053971299,
          "pitch": 0.05622371582041907,
          "rotation": 0,
          "target": "4-segunda-planta"
        },
        {
          "yaw": 2.0153443990271303,
          "pitch": 0.3225769328574426,
          "rotation": 4.71238898038469,
          "target": "9-bano-habitacion-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-bano-habitacion-3",
      "name": "Baño habitación 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "10-habitacion-principal",
      "name": "Habitación principal",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.4569391750072267,
          "pitch": 0.1833026223093448,
          "rotation": 0,
          "target": "4-segunda-planta"
        },
        {
          "yaw": 2.959868200001564,
          "pitch": 0.20995743721273108,
          "rotation": 6.283185307179586,
          "target": "11-bano-habitacin-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-bano-habitacin-1",
      "name": "Baño Habitación 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.4168529695375298,
          "pitch": 0.2626736175687707,
          "rotation": 0,
          "target": "10-habitacion-principal"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Matilda",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
