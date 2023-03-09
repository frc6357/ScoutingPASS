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
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Length (inches)",
      "code": "len",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Weight (pounds)",
      "code": "wei",
      "type": "number",
      "defaultValue": "0"
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
    { "name": "Floor pickup Cones",
      "code": "fco",
      "type": "bool"
    },
    { "name": "Floor pickup Cubes",
      "code": "fcu",
      "type": "bool"
    },
    { "name": "Pickup tipped cones",
      "code": "ptc",
      "type": "bool"
    },
    { "name": "Pickup from double-substation",
      "code": "dss",
      "type": "bool"
    },
    { "name": "Does arm need to be extended to drive up to score",
      "code": "arm",
      "type": "bool"
    },
    { "name": "Autos (Extremely brief description ex. score cone & park)",
      "code": "aut",
      "type": "text",
      "size": 20,
      "maxSize": 250
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
