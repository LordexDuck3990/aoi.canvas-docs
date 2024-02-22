---
title: Getting Started
description: Beginner tutorial for aoi.canvas
---

In this guide we will be making a few simple commands using aoi.canvas.

This guide assumes you have a basic understanding of aoi.js. It also assumes you defined your `AoiClient` as `client`

## Installation

```sh
npm install https://github.com/LordexDuck3990/aoi.canvas.git#v2
```

## Setup

```js
//Import packages
const { AoiClient } = require("aoi.js");
const { AoiCanvas } = require("aoi.canvas");

//Aoi.js client
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

//Add canvas functions to aoi.js
const canvas = new AoiCanvas(client);
```

## Before creating your first image

In order to create images using aoi.canvas, we need to learn a few basic functions

The following functions will be used in almost every sngle command
* [$createCanvas](../../functions/createcanvas/) - to create canvases
* [$attachCanvas](../../functions/attachcanvas/) - to send canvases

We also need to know about
* [$drawImage](../../functions/drawimage/) - to add external images (like user avatars)
* [$fillText](../../functions/filltext/) - to write text on your canvas

## Creating your first image