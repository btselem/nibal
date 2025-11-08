# Map Guide

[](map/#23.99000,29.92877,2.00,0.0,0.0/~Gaza_border_dash,~Gaza_border_base "Map Overview")
This comprehensive guide covers all features of the interactive map. Learn hash-driven camera control, layer toggling, dynamic data loading, historical satellite imagery, and cinematic animations.


{.heading}

## Introduction

The map is controlled entirely through URL hash parameters:

`map/#lat,lng,zoom,bearing,pitch/+layerA,~layerB`

[](map/#31.42380,34.35370,10.00,37.6,0.0 "Basic map view of Gaza")

**Hash components:**
- **Camera:** `lat,lng,zoom,bearing,pitch` (all numeric)
- **Layers:** `+show`, `~hide`, `+file(style)`, `+file:follow`


{.heading}

## Camera Control

[](map/#31.52888,34.47937,18.14,15.0,0 "Jabalia at high zoom, 15° rotation")
The camera position uses five parameters: latitude, longitude, zoom (0–22), bearing (0–360°), and pitch (0–60°).


[](map/#31.52956,34.47717,14.33,22.4,60.5 "Same location with 60° tilt")
Adding pitch creates a 3D perspective view of the terrain.


[](map/#31.41976,34.39009,10.00,37.6,0.0 "Wider view of Gaza")
The camera smoothly flies between positions as you scroll or click links.


{.heading}

## Layer Management

[](map/#31.42380,34.35370,10.00,37.6,0.0/+idf-poly "IDF evacuation zone outlines")
Show built-in style layers by adding `+layername` to the hash.


[](map/#31.42380,34.35370,10.00,37.6,0.0/+idf-poly,+idf-poly-outlines "IDF zones with fills and outlines")
Stack multiple layers together: polygons and their outlines.


[](map/#31.42391,34.35369,10.00,37.6,0.0/~labels_he "Hide labels")
Hide layers with `~layername` — useful for replacing default basemap layers.


[](map/#31.52374,34.43343,15.00,37.6,0.0/+overlay,~Gaza_border_dash,~Gaza_border_base "Custom overlay without borders")
Combine hiding and showing to swap layers.


[](map/#31.53410,34.48202,15.34,37.6,0.0/+satellite,+family-home "Satellite with point markers")
Open editor (click "E") to view the layers available in the map, both shown and hidden by default.


{.heading}

## Loading External Data

[](map/#31.43672,34.34664,10.16,37.6,0.0/+jabalia-rafah "Displacement path from Jabalia to Rafah: +jabalia-rafah")
Load GeoJSON files from `/map/` by adding `+filename` to the hash.


[](map/#31.47602,34.41973,11.17,37.6,0.0/+jabalia-deir-al-balah(by-foot) "Styled path using track layer appearance: +jabalia-deir-al-balah(by-foot)")
Copy styles from existing layers with `+filename(sourceLayer)` syntax.


[](map/#31.42380,34.35370,10.00,37.6,0.0/+displacement-points "CSV point data with lat/lng columns")
CSV files with `lat`/`lng` columns automatically convert to point markers.

The system searches: `filename.geojson` → `filename.csv` → `data/filename.csv`


{.heading}

## Wayback Imagery

[](map/#31.52374,34.43343,15.00,37.6,0.0/+wayback:20240215 "ESRI Wayback: Feb 15, 2024")
Load very high-resolution imagery with `+wayback:YYYYMMDD` — 30cm resolution in urban areas from Maxar satellites.


[](map/#31.42380,34.35370,10.00,37.6,0.0/+wayback:20231007 "Wayback: Oct 7, 2023 — day before the attack")
Historical archive back to February 2014. System selects closest available release date.


[](map/#31.52374,34.43343,15.00,37.6,0.0/+wayback:20241101 "Wayback: Recent November 2024 imagery")
Updated every few weeks. Free WMTS service, max zoom 22 for extreme detail.


[](map/#31.52374,34.43343,15.00,37.6,0.0/+wayback:20241015,+jabalia "Wayback with vector markers")
Combine high-resolution imagery with vector annotations.


{.heading}

## Camera Animations

[](map/#31.52090,34.47332,14.00,19.2,48.5/+jabalia-rafah:follow "Animate along displacement path")
Create cinematic camera movements with `+layername:follow` — the camera flies along path geometry. 


[](map/#31.52090,34.47332,14.00,19.2,48.5/+jabalia-rafah:follow+ "counter added with follow+")
A **distance ticker** automatically appears showing the cumulative distance traveled (0 km to total path length).


[](map/#31.47949,34.42091,12.96,0.0,39.0/+jabalia-gaza(by-car),+gaza-nuseirat(by-foot):follow+10100,+family-home,+s.gaza,+nuseirat,+cities,+villages,+idf-poly-outlines "offset can be added after like :follow+10100")
The **distance ticker** can start with an offset by marking the km count after the :follow+.


[](map/#31.52103,34.46974,12.79,-14.4,30.4/+jabalia-rafah:follow,+jabalia,+rafah "Path animation with markers")
Show origin and destination points during the animation. The white circular ticker counts from 0.0 km to 37.0 km over ~74 seconds for this path.


[](map/#31.52090,34.47332,14.00,19.2,48.5/+jabalia-rafah:follow,+wayback:20240215 "High-resolution flyover with Wayback")
Use Wayback for detailed terrain visualization during animation. Watch the distance accumulate as you fly over high-resolution imagery.


{.heading}

## Multiple Layers

[](map/#31.43672,34.34664,10.16,37.6,0.0/+jabalia-rafah,+jabalia,+rafah "Three external layers stacked")
Load and control multiple GeoJSON/CSV files independently.


[](map/#31.45086,34.38246,11.54,37.6,0.0/+jabalia-rafah(track),+idf-poly-outlines "Paths layered above polygons")
Use `(sourceHint)` to control z-index and render order.


[](map/#31.42380,34.35370,10.00,37.6,0.0/+idf-poly "Layers persist")
Layers remain active across camera movements...


[](map/#31.52956,34.47717,14.33,22.4,60.5/+idf-poly "...until removed from hash")
...until explicitly removed from the hash URL.


{.heading}

## Embedding

[](map/#31.52888,34.47937,18.14,15.0,0/+jabalia "Map with caption overlay")
Use Markdown link titles for captions: `[](map/#... "Your caption")`

Embed in iframes (control panel auto-hides). Hash updates trigger instant map changes without page reload.


{.heading}

## Quick Reference

[](map/#31.38169,34.34570,10.45,1.6,59.0/+jabalia,+rafah,+wayback:20241015 "Combined features demo")

**Hash tokens:**
- `+layer` show | `~layer` hide | `+file` load GeoJSON/CSV
- `+file(source)` copy styles | `+file:follow` animate camera

**Distance Ticker:**
- Appears automatically during `:follow` animations
- White circular overlay (80px) at line tip position
- Displays cumulative distance: `0.0 km` → `total km`
- Updates in real-time, hides on completion/cancel
- Only visible when following GeoJSON LineString paths


## TBC…