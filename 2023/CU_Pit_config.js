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
    { "name": "Did their comms fail at their last event?",
      "code": "com",
      "type": "bool"
    },
    { "name": "Do they have backup swerve modules/drivetrain motors?",
      "code": "dri",
      "type": "bool"
    },
    { "name": "Do they have spare parts to fix their scoring mechanism?",
      "code": "sco",
      "type": "bool"
    },
    { "name": "Do they have backup electronic components (pdh, roborio, motor controlles, etc.)?",
      "code": "elc",
      "type": "bool"
    },
    { "name": "Do they have a battery beak?",
      "code": "bat",
      "type": "bool"
    },
    { "name": "Wirestripper type",
      "code": "wir",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Allen Key type",
      "code": "alk",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Screwdriver type",
      "code": "scr",
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
