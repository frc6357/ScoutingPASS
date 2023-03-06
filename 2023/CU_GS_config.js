var config_data = `
{
  "title": "Scouting PASS 2023",
  "page_title": "Charged Up",
  "checkboxAs": "10",
  "enable_google_sheets": "true",
  "prematch": [
    { "name": "Scouter-Initials",
      "gsCol": "Scouter",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "gsCol": "EventCode",
      "code": "e",
      "type": "event",
      "defaultValue": "2022carv",
      "required": "true",
      "disabled": "true"
    },
    { "name": "Match Level",
      "gsCol": "MatchLevel",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "de": "Double Elimination<br>",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "gsCol": "MatchNumber",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 100,
      "required": "true"
    },
    { "name": "Robot",
      "gsCol": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required":"true"
    },
    { "name": "Team #",
      "gsCol": "TeamNumber",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Auto Start Position",
      "gsCol": "AutoStartPose",
      "code": "as",
      "type": "clickable_image",
      "filename": "2023/field_image.png",
      "clickRestriction": "one",
      "shape": "circle 5 black red true"
    }
  ],
  "auton": [
    { "name": "Auto Scoring",
      "gsCol": "AutoScored",
      "code": "asg",
      "type": "clickable_image",
      "filename": "2023/grid_image.png",
      "dimensions": "9 4",
      "clickRestriction": "onePerBox",
      "toggleClick": "true",
      "showFlip": "false",
      "showUndo": "false",
      "shape": "circle 12 black red true"
    },
    { "name": "Crossed Tape",
      "gsCol": "AutoCrossedTape",
      "code": "acc",
      "type": "bool"
    },
    { "name": "Crossed Charging Station",
      "gsCol": "AutoCrossedChargingStation",
      "code": "acs",
      "type": "bool",
      "crossedTape": "acc"
    },
    { "name": "Mobility? (Did it move at all)",
      "gsCol": "AutoMobility",
      "code": "am",
      "type": "bool"
    },
    { "name": "Docked",
      "gsCol": "AutoDocked",
      "code": "ad",
      "type":"radio",
      "choices": {
        "d": "Docked (not Engaged)<br>",
        "e": "Engaged<br>",
        "a": "Attempted but failed<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    }
  ],
  "teleop": [
    { "name": "Cycle Timer (Time it takes for the robot to go from the community to other-end of the field)",
      "gsCol": "CycleTimes",
      "code": "tct",
      "type": "cycle"
    },
    { "name": "Grid Scoring",
      "gsCol": "ScoredGrid",
      "code": "tsg",
      "type": "clickable_image",
      "filename": "2023/grid_image.png",
      "dimensions": "9 4",
      "clickRestriction": "onePerBox",
      "toggleClick": "true",
      "showFlip": "false",
      "showUndo": "false",
      "shape": "circle 12 black red true"
    },
    { "name": "Played Defense?",
      "gsCol": "PlayedDefense",
      "code": "pd",
      "type": "bool"
    },
    { "name": "Defense Rating",
      "gsCol": "DefenseRating",
      "code": "dr",
      "type": "radio",
      "choices": {
        "b": "Below Average<br>",
        "a": "Average<br>",
        "g": "Good<br>",
        "e": "Excellent<br>",
        "x": "Did not play defense"
      },
      "defaultValue": "x"
    },
    { "name": "Was Defended",
      "gsCol": "WasDefended",
      "code": "wd",
      "type": "bool"
    },
    { "name": "Who Defended this bot",
      "gsCol": "WhoDefended",
      "code": "who",
      "type": "text"
    },
    { "name": "Smart Placement<br>(creates Links)",
      "gsCol": "SmartLinks",
      "code": "lnk",
      "type": "bool"
    },
    { "name": "Floor Pickup",
      "gsCol": "FloorPickUp",
      "code": "fpu",
      "type": "radio",
      "choices": {
        "o": "Cones<br>",
        "u": "Cubes<br>",
        "b": "Both<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    }
  ],
  "endgame": [
    { "name": "Docking Timer (Time it takes for robot to get on the charge station)",
      "gsCol": "DockingTime",
      "code": "dt",
      "type": "timer"
    },
    { "name": "Final Status",
      "gsCol": "FinalState",
      "code": "fs",
      "type":"radio",
      "choices": {
        "p": "Parked<br>",
        "d": "Docked (Not Engaged)<br>",
        "e": "Engaged<br>",
        "a": "Attempted but failed<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    },
    { "name": "Total # of alliance<br>robots docked/engaged",
      "gsCol": "NumOfRobotsDocked",
      "code": "dn",
      "type": "counter"
    }
  ],
  "postmatch": [
    { "name": "Driver Skill (Had a game plan, was adaptable, etc.)",
      "gsCol": "DriverSkill",
      "code": "ds",
      "type": "radio",
      "choices": {
        "n": "Not Effective<br>",
        "a": "Average<br>",
        "v": "Very Effective<br>",
        "x": "Not Observed"
      },
      "defaultValue": "x"
    },
    { "name": "Links Scored",
      "gsCol": "LinksScored",
      "code": "ls",
      "type": "counter"
    },
    { "name": "Speed Rating (How fast they can score a game piece)",
      "gsCol": "SpeedRating",
      "code": "sr",
      "type": "radio",
      "choices": {
        "1": "1 (slow)<br>",
        "2": "2<br>",
        "3": "3<br>",
        "4": "4<br>",
        "5": "5 (fast)"
      },
      "defaultValue":"3"
    },
    { "name": "Died/Immobilized",
      "gsCol": "DiedOrImmobile",
      "code": "die",
      "type": "bool"
    },
    { "name": "Tippy<br>(almost tipped over)",
      "gsCol": "Tippy",
      "code": "tip",
      "type": "bool"
    },
    { "name": "Mismanaged GamePieces (>2)",
      "gsCol": "DroppedGamePieces",
      "code": "dc",
      "type": "bool"
    },
    { "name": "Comments",
      "gsCol": "Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 50
    }
  ]
}`;
