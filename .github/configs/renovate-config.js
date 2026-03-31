{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": [
    "config:base"
  ],
  "helm-values": {
    "fileMatch": ["charts/.+/values\\.yaml$"]
  },
  "helmv3": {
    "fileMatch": ["charts/.+/Chart\\.yaml$"]
  },
  "regexManagers": [
    {
      "fileMatch": ["charts/.+/Chart\\.yaml$"],
      "matchStrings": [
        "repository: (?<depName>[^\\s]+)\\n\\s+tag: (?<currentValue>[^\\s]+)"
      ],
      "datasourceTemplate": "docker"
    }
  ]
}
