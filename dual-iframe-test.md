---
dual-iframe: true
body-class: snap
---

# Dual iframe Test

This page demonstrates the new dual-iframe system where map links load in the background layer and other content (cmp, img, vid) loads in the foreground overlay with a transparent background.


## Map Background

[](map/#31.52888,34.47937,18.14,15.0,0 "Jabalia - map loads in background")

This link loads a map view in the background iframe layer.


## Map with Animation

[](map/#31.52090,34.47332,14.00,19.2,48.5/+jabalia-rafah:follow "Follow animation in background")

The follow animation with distance ticker runs in the background layer.


## CMP Overlay

[](cmp/#basic&1920&1080&none&test.svg "Composition overlay - transparent background")

Composition content loads in the foreground iframe with transparent background, showing the map underneath.


## Map + CMP Combined

[](map/#31.43672,34.34664,10.16,37.6,0.0/+jabalia-rafah "Map with path")

First load a map with the displacement path...


[](cmp/#overlay&1920&1080&none&overlay.svg "Then overlay composition")

...then add a composition overlay on top with transparent background.


## Image Overlay

[](img/#test.png "Image in foreground")

Images also load in the foreground overlay.


## Video Overlay

[](vid/#dQw4w9WgXcQ "Video in foreground")

Videos load in the foreground, map visible through transparent areas.


## Switch Back to Map

[](map/#31.38169,34.34570,10.45,1.6,59.0/+jabalia,+rafah,+wayback:20241015 "Map with multiple layers")

Switching back to a map link updates the background layer while keeping any foreground content visible (if transparent).


## Test Instructions

1. Scroll through this page - map links update the background
2. Non-map links (cmp/img/vid) update the foreground overlay
3. The foreground should have transparent background showing the map underneath
4. Both layers can be visible simultaneously
5. Foreground becomes "inactive" (click-through) when only map is active
