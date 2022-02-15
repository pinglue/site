export const cmdMock = {
    "description": "The stuff we show on the main help page",
    "command": "<command> [param] [options]",
    "commands": [
      {
        "command": "info [route-name]",
        "description": "Show info about packages. If route provided then the info will be about that route, otherwise it'll be about general info about all routes",
        "shortDescription": "Show info about installed packages.",
        "options": [
          {
            "flags": "-e, --env <env-type>",
            "description": "Specifying the environment for the hub (defaults to local)"
          },
          {
            "flags": "-p, --profiles <profiles>",
            "description": "Specifying the profiles for the hub (defaults to dev)"
          },
          {
            "flags": "-k, --pkg <package-name>",
            "description": "Show info only for this package"
          }
        ],
        "examples": [
          {
            "description": "this is example for info command",
            "command": "run info route1"
          },
          {
            "description": "this is another example for info command",
            "command": "run info route1 -p -k"
          }
        ],
        "action": "infoAction"
      },
      {
        "command": "run [route-name]",
        "description": "Run the given route (defaults to /)",
        "options": [
          {
            "flags": "TODO",
            "description": "TODO"
          }
        ]
      }
    ]
  }