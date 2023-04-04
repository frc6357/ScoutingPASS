var config_data = `
{
  "title": "Scouting PASS 2023",
  "page_title": "Charged Up",
  "pitConfig": "true",
  "prematch": [
    { "name": "Team Number",
      "code": "t",
      "type": "number"
    },
    { "name": "Width (inches)",
      "code": "wid",
      "type": "number"
    },
    { "name": "Swerve",
      "code": "swe",
      "type": "bool"
    },
    { "name": "Type of Serve",
      "code": "typ",
      "type": "radio",
      "choices": {
        "r": "REV<br>",
        "w": "West Coast<br>",
        "a": "SDS<br>",
        "x": "No Swerve"
      },
      "defaultValue": "x"
    },
    { "name": "Other Drivetrain",
      "code": "odt",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Drivetrain Motor",
      "code": "mot",
      "type": "radio",
      "choices": {
        "n": "Neo<br>",
        "f": "Falcon<br>",
        "c": "CIM<br>",
        "x": "Other<br>"
      },
      "defaultValue":"x"
    },
    { "name": "What is their power wire connectors",
      "code": "pwr",
      "type": "radio",
      "choices": {
        "a": "Anderson<br>",
        "w": "Wago<br>",
        "d": "Direct Connect (Crimp or Sauter)<br>",
        "x": "Other<br>"
      },
      "defaultValue":"x"
    },
    { "name": "Other power wire connectors",
      "code": "opc",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "What is their sensor canbus connectors",
      "code": "can",
      "type": "radio",
      "choices": {
        "a": "Anderson<br>",
        "w": "Wago<br>",
        "d": "Direct Connect (Crimp or Sauter)<br>",
        "x": "Other<br>"
      },
      "defaultValue":"x"
    },
    { "name": "Other canbus connectors",
      "code": "occ",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "How long have you had your drive team?",
      "code": "tem",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Do they have backup swerve modules/drivetrain motors?",
      "code": "dri",
      "type": "bool"
    },
    { "name": "Do they have spare parts to fix their scoring mechanism?",
      "code": "sco",
      "type": "bool"
    },
    { "name": "Which type of motor controllers",
      "code": "cot",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Wirestripper brand",
      "code": "wir",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Allen Key brand",
      "code": "alk",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Screwdriver brand",
      "code": "scr",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Wheel type",
      "code": "whe",
      "type": "text",
      "size": 20,
      "maxSize": 50
    }
  ],
  "auton": [
  ],
  "teleop": [
  ],
  "endgame": [
  ],
  "postmatch": [
  ]
}`;
