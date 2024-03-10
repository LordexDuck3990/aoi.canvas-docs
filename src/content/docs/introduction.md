---
title: Introduction
description: aoi.canvas Introduction.
---

# aoi.canvas

aoi.canvas is a aoi.js extension that allows you to utilize canvas functions with aoi.js bot.

## Installation

```sh
npm install https://github.com/LordexDuck3990/aoi.canvas.git#v2
```

## Setup

```js
const { AoiClient } = require("aoi.js");
const { AoiCanvas } = require("aoi.canvas");

const client = new AoiClient({
    intents: ["Guilds", "GuildMessages", "MessageContent"],
    events: ["onMessage", "onInteractionCreate"],
    prefix: "Discord Bot Prefix",
    token: "Discord Bot Token",
    database: {
        type: "aoi.db",
        db: require("@akarui/aoi.db"),
        dbType: "KeyValue",
        tables: ["main"],
        securityKey: "a-32-characters-long-string-here"
    }
});

const canvas = new AoiCanvas(client);

// Ping Command Example
client.command({
    name: "ping",
    code: `Pong! $pingms`
});

// Canvas Command Example
client.command({
    name: "house",
    code: `
$attachCanvas[mycanvas;house.png]
$drawLines[mycanvas;draw;#03a9f4;50;140;150:60;250:140]
$fillRect[mycanvas;#03a9f4;130;190;40;60]
$strokeRect[mycanvas;#03a9f4;75;140;150;110]
$createCanvas[mycanvas;300;320]
    `
})
```

Feel free to dm Lordex in discord (devlordduck2) if you have any questions or suggestions.
Also feel free to dm Lightner in discord (lightner.) if you have any questions or suggestions specifically related to docs.

Enjoy coding with aoi.canvas! ❤