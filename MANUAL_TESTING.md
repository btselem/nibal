# Manual Testing Instructions

Since the Mapbox API requires authentication and may not work in all testing environments, please test the zoom fix manually using these steps:

## Prerequisites

1. Deploy the changes to a server with valid Mapbox API access
2. Or test locally with a development server

## Quick Test (5 minutes)

### Test the Bug is Fixed

**Before this fix:** The map would zoom in and out repeatedly on mobile devices, creating a weird animation loop.

**After this fix:** The map should load once with the correct zoom and stay stable.

1. Open the map on a mobile device (or use browser DevTools mobile emulation)
2. Navigate to: `map/index.html#31.5,34.5,10,0,0`
3. **Expected:** Map loads at zoom level 10 and stays there
4. Change hash to: `#31.5,34.5,12,0,0`
5. **Expected:** Map smoothly flies to zoom level 12, no oscillation
6. Pan the map around
7. **Expected:** Zoom stays stable, no automatic adjustments

### Test the Visual Bounds Indicator

1. Open `map/index.html` on any device
2. Press the **'E'** key to enter edit mode
3. **Expected:** Blue square labeled "Visual Bounds" appears in the center
4. Resize the browser window
5. **Expected:** Blue square resizes but stays centered
6. Press **'E'** again to exit edit mode
7. **Expected:** Blue square disappears

## Detailed Testing (15 minutes)

### Resolution Tests

Test on these resolutions (use browser DevTools device emulation):

#### 1. Desktop (1920x1080)
- Expected bounds: ~972px × 972px square
- Expected zoom calculation: Higher zoom for same geographic area

#### 2. Tablet Landscape (1024x768)
- Expected bounds: ~691px × 691px square
- Expected zoom calculation: Medium zoom

#### 3. Tablet Portrait (768x1024)
- Expected bounds: ~691px × 691px square (same as landscape)
- Expected zoom calculation: Same as tablet landscape

#### 4. Mobile Landscape (667x375)
- Expected bounds: ~338px × 338px square
- Expected zoom calculation: Lower zoom (less screen space)

#### 5. Mobile Portrait (375x667)
- Expected bounds: ~338px × 338px square (same as landscape)
- Expected zoom calculation: Same as mobile landscape

### Hash Navigation Tests

Test these hash URLs and verify smooth, stable zoom:

```
# Default view
map/index.html

# Specific zoom level
map/index.html#31.4238,34.3537,10,37.6,0

# Higher zoom (detailed)
map/index.html#31.5,34.5,14,0,0

# Lower zoom (regional)
map/index.html#31.5,34.5,8,0,0

# With layer
map/index.html#31.5,34.5,12,0,0/+pois
```

For each URL:
1. Load the page
2. Verify zoom is applied correctly
3. Verify NO automatic zoom adjustment happens
4. Change to another hash
5. Verify smooth transition without oscillation

## Comparison Test

If you have access to the old code:

### Old Behavior (BEFORE fix)
1. Load map on mobile (width < 1000px)
2. Hash: `#31.5,34.5,12,0,0`
3. **Bug:** Zoom automatically adjusted to 11 (12 - 1)
4. Change hash to: `#31.5,34.5,10,0,0`
5. **Bug:** Zoom adjusted to 9, then readjusted, creating animation loop

### New Behavior (AFTER fix)
1. Load map on mobile (width < 1000px)  
2. Hash: `#31.5,34.5,12,0,0`
3. **Fixed:** Zoom stays at 12 as specified
4. Change hash to: `#31.5,34.5,10,0,0`
5. **Fixed:** Zoom smoothly transitions to 10, stays stable

## Visual Test

Use the test page to see bounds calculation:

```
open test-bounds.html
```

This page shows:
- How bounds are calculated for different screen sizes
- The blue bounds indicator at each resolution
- Zoom levels calculated for 15km geographic area
- Resizable demo to test dynamic resizing

## Success Criteria

✅ **No zoom oscillation** - Map doesn't zoom in/out repeatedly  
✅ **Stable zoom** - Zoom from hash is applied and maintained  
✅ **Smooth transitions** - Hash changes animate smoothly  
✅ **Bounds indicator** - Blue square appears in edit mode  
✅ **Responsive bounds** - Indicator resizes with window  
✅ **No mobile hack** - Same behavior on all screen sizes  

## Troubleshooting

### Map doesn't load
- Check Mapbox API token is valid
- Check network tab for blocked requests
- Verify you're on HTTPS (required for some APIs)

### Bounds indicator doesn't appear
- Make sure you pressed 'E' key
- Check if layer controls are visible (edit mode)
- Try on a non-mobile device first

### Zoom still seems wrong
- Check the hash format: `#lat,lng,zoom,bearing,pitch`
- Verify no other code is modifying zoom
- Check browser console for errors

## Contact

If you encounter issues or need clarification, please comment on the PR or create an issue with:
- Device/browser used
- Screen resolution
- Hash URL tested
- Expected vs actual behavior
- Screenshots if possible
