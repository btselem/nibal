# Zoom Fix Testing Guide

## Changes Made

### 1. Visual Bounds Indicator
- Added blue square indicator that shows in edit mode (press 'E' key)
- Indicator shows the "Visual Bounds" - the area that should fit in the viewport
- Similar to the reference frame in the SVG app
- Indicator automatically resizes based on viewport dimensions

### 2. Removed Reactive Zoom Adjustments
- **Removed**: `zoom: camera.zoom + (window.innerWidth <= 1000 ? -1 : 0)` in multiple places
- **Removed**: `window._mobileZoomAdjusted` flag and related logic
- **Removed**: `window._skipNextHashUpdate` logic for mobile zoom

### 3. Bounds Calculation System
- Added `getReferenceBounds()` - calculates centered square bounds (90% of smaller viewport dimension)
- Added `calculateOptimalZoom()` - calculates zoom level to fit desired geographic bounds
- Added `updateBoundsIndicator()` - updates visual indicator position
- Added `toggleBoundsIndicator()` - shows/hides indicator in edit mode

## What This Fixes

### Before
- Map constantly zoomed in/out on mobile devices
- Weird animation between zoom levels
- Hash updates triggered reactive zoom adjustments
- Different behavior for mobile (width <= 1000px) vs desktop

### After  
- Zoom level is applied once from hash without adjustments
- No reactive zoom changes based on screen width
- Smooth, stable zoom behavior across all devices
- Visual indicator helps understand what area will be visible

## Testing Plan

### Test 1: Desktop Browser (Wide Screen)
1. Open `map/index.html` in desktop browser
2. Press 'E' to enter edit mode
3. Verify blue "Visual Bounds" square appears
4. Resize window - verify bounds indicator resizes but stays centered
5. Navigate map (pan/zoom) - verify no unexpected zoom jumps
6. Change hash to different location - verify smooth transition without oscillation

### Test 2: Mobile Portrait (iPhone/Android)
1. Open `map/index.html` on mobile device in portrait mode
2. Press 'E' to enter edit mode (if accessible)
3. Verify bounds indicator appears and is properly sized
4. Navigate map - verify zoom stays stable
5. Change hash - verify no zoom in/out animation bug
6. Compare: the map should fit content naturally without the -1 zoom hack

### Test 3: Mobile Landscape
1. Rotate device to landscape
2. Verify bounds indicator updates to new size
3. Verify map doesn't zoom in/out due to orientation change
4. Navigate and test hash changes

### Test 4: Tablet (iPad, etc.)
1. Test in both portrait and landscape
2. Verify bounds are appropriate for medium-sized screen
3. Verify no zoom oscillation

### Test 5: Window Resize
1. Start with wide desktop window
2. Gradually resize to narrow (mobile-like) width
3. Verify bounds indicator resizes smoothly
4. Verify map doesn't constantly re-zoom
5. Verify zoom level from hash is respected

### Test 6: Hash Navigation
1. Test various hash formats:
   - `#31.5,34.5,12,0,0` (lat,lng,zoom,bearing,pitch)
   - `#31.5,34.5,10` (minimal)
   - `#/+pois` (layer only)
2. Verify each loads with correct zoom without adjustment
3. Change between hashes - verify no zoom animation bug

## Test Links

Test these URLs on different devices/screen sizes:

```
http://localhost:8000/map/index.html
http://localhost:8000/map/index.html#31.5,34.5,12,0,0
http://localhost:8000/map/index.html#31.4238,34.3537,10,37.6,0
http://localhost:8000/map/index.html#/+pois
```

## Expected Behavior

1. **No zoom oscillation** - The map should not constantly zoom in and out
2. **Stable zoom** - Zoom level from hash should be applied and stay stable
3. **Screen-size aware** - Bounds indicator shows area that fits on current screen
4. **Smooth transitions** - Hash changes should smoothly animate without zoom jumps
5. **Edit mode indicator** - Blue square clearly shows the visual bounds in edit mode

## Known Limitations

- The bounds system is currently for visualization only
- Zoom calculation based on bounds is available but not yet integrated with hash parsing
- Future enhancement: Allow specifying bounds size in hash instead of zoom for truly responsive zoom levels

## Success Criteria

✅ No reactive zoom adjustments on hash changes  
✅ Visual bounds indicator works in edit mode  
✅ Zoom is stable across different screen sizes  
✅ No animation artifacts or zoom in/out loops  
✅ Clean, minimal code changes  
