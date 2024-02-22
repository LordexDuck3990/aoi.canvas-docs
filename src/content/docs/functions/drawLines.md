---
title: $drawLines
description: Draws lines.
---

Draws lines.
## Usage
```
$drawLines[canvas;type;color;strokeWidth?;x?;y?;...lines]
```

## Parameters
| Field | Description | Type | Required |
| --- | --- | --- | --- |
| canvas | The canvas name. | string | true |
| type | The action type. (0 = fill | 1 = draw) | number | true |
| color | The lines/fill color. | color | true |
| strokeWidth | The lines width. | number | false |
| x | The lines start X position. | number | false |
| y | The lines start Y position. | number | false |
| ...lines | The lines. (x:y / move:x:y / bezier:controlX:controlY:centerX2:centerY2:endX:endY / quadric:controlX:controlY:endX:endY) | string | true |

## Example(s)
<!-- TODO -->
Description
```
Code soon:tm:
```
Future image here