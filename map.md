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

[](map/#31.42380,34.35370,10.00,37.6,0.0/+idf-poly-outlines "IDF evacuation zone outlines")
Show built-in style layers by adding `+layername` to the hash.


[](map/#31.42380,34.35370,10.00,37.6,0.0/+idf-poly,+idf-poly-outlines "IDF zones with fills and outlines")
Stack multiple layers together: polygons and their outlines.


[](map/#31.43315,34.35321,10.06,37.6,0.0/~satellite "Hide satellite layer")
Hide layers with `~layername` — useful for replacing default basemaps.


[](map/#31.52374,34.43343,15.00,37.6,0.0/~satellite,+overlay "Custom overlay replaces satellite")
Combine hiding and showing to swap layers.


[](map/#31.52929,34.47915,15.50,37.6,0.0/+satellite,+jabalia "Satellite with point markers")
Available layers: `satellite`, `overlay`, `idf-poly`, `idf-poly-outlines`, `jabalia`, `rafah`.


{.heading}

## Loading External Data

[](map/#31.43672,34.34664,10.16,37.6,0.0/+jabalia-rafah "Displacement path from Jabalia to Rafah")
Load GeoJSON files from `/map/` by adding `+filename` to the hash.


[](map/#31.45086,34.38246,11.54,37.6,0.0/+jabalia-rafah(track) "Styled path using track layer appearance")
Copy styles from existing layers with `+filename(sourceLayer)` syntax. Available sources: `track`, `overlay`, `idf-poly`, `idf-poly-outlines`.


[](map/#31.42380,34.35370,10.00,37.6,0.0/+displacement-points "CSV point data with lat/lng columns")
CSV files with `lat`/`lng` columns automatically convert to point markers.

The system searches: `filename.geojson` → `filename.csv` → `data/filename.csv`


{.heading}

## Sentinel-2 Imagery

[](map/#31.52374,34.43343,15.00,37.6,0.0/+s2:20240215 "Sentinel-2 cloudless mosaic: Feb 2024")
Load historical satellite imagery with `+s2:YYYYMMDD` — 10-meter resolution, cloud-free annual mosaics from EOX.


[](map/#31.42380,34.35370,10.00,37.6,0.0/+s2:20230815 "Sentinel-2: Summer 2023")
View imagery from previous years. Available from June 2015 to 2024.


[](map/#31.52374,34.43343,15.00,37.6,0.0/+s2:20200601 "Sentinel-2: Pre-conflict baseline 2020")
Free and open service, no authentication. Mosaics updated annually.


{.heading}

## Wayback Imagery

[](map/#31.52374,34.43343,15.00,37.6,0.0/+wayback:20240215 "ESRI Wayback: Feb 15, 2024")
Load very high-resolution imagery with `+wayback:YYYYMMDD` — 30cm resolution in urban areas from Maxar satellites.


[](map/#31.42380,34.35370,10.00,37.6,0.0/+wayback:20231007 "Wayback: Oct 7, 2023 — day before the attack")
Historical archive back to February 2014. System selects closest available release date.


[](map/#31.52374,34.43343,15.00,37.6,0.0/+wayback:20241101 "Wayback: Recent November 2024 imagery")
Updated every few weeks. Free WMTS service, max zoom 22 for extreme detail.


[](map/#31.42380,34.35370,10.00,37.6,0.0/+s2:20230815,+idf-poly-outlines "Sentinel-2 with evacuation zone overlays")
Stack historical imagery with vector layers for overlay analysis.

[](map/#31.52374,34.43343,15.00,37.6,0.0/+wayback:20241015,+jabalia "Wayback with vector markers")
Combine high-resolution imagery with vector annotations.


{.heading}

## Camera Animations

[](map/#31.52090,34.47332,14.00,19.2,48.5/+jabalia-rafah:follow "Animate along displacement path")
Create cinematic camera movements with `+layername:follow` — the camera flies along path geometry.


[](map/#31.52103,34.46974,12.79,-14.4,30.4/+jabalia-rafah:follow,+jabalia,+rafah "Path animation with markers")
Show origin and destination points during the ~30-second animation.


[](map/#31.52090,34.47332,14.00,19.2,48.5/+jabalia-rafah:follow,+s2:20231001 "Fly over historical Sentinel-2 imagery")
Combine path animation with historical satellite imagery.


[](map/#31.52090,34.47332,14.00,19.2,48.5/+jabalia-rafah:follow,+wayback:20240215 "High-resolution flyover with Wayback")
Use Wayback for detailed terrain visualization during animation.


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
- `+s2:YYYYMMDD` Sentinel-2 | `+wayback:YYYYMMDD` Maxar imagery


## TBC…