# Dual iframe Mode

The dual-iframe system allows you to layer content with a background map and a transparent foreground overlay for compositions, images, or videos.

## Enabling Dual iframe Mode

Add `dual-iframe: true` to your markdown frontmatter:

```markdown
---
dual-iframe: true
body-class: snap
---

# Your Content Here
```

## How It Works

### Single iframe Mode (Default)
- One iframe (`#if`) displays all content
- Links update this single frame

### Dual iframe Mode
When enabled via frontmatter:
- **Background Frame** (`#background-frame`, z-index: 1)
  - Displays map content (`map/` URLs)
  - Always visible beneath foreground
  
- **Foreground Frame** (`#foreground-frame`, z-index: 2)
  - Displays all other content (default/fallback)
  - Transparent background to show map beneath
  - Includes: `cmp/`, `img/`, `vid/`, and any other paths
  - Becomes click-through when inactive (via `.inactive` class)

## Link Routing

```
map/index.html#...    → background-frame (map layer)
cmp/index.html#...    → foreground-frame (overlay)
img/index.html#...    → foreground-frame (overlay)
vid/index.html#...    → foreground-frame (overlay)
anything-else/...     → foreground-frame (overlay)
```

## Example Usage

```markdown
---
dual-iframe: true
---

## Show Map Background
[](map/#31.5,34.5,12,0,0/+satellite "Map in background")

## Overlay Composition
[](cmp/#data&1920&1080&none&viz.svg "Transparent overlay on map")

## Add Video Overlay
[](vid/#dQw4w9WgXcQ "Video with transparent areas")

## Update Map While Keeping Overlay
[](map/#31.4,34.3,14,45,0/+layers "Map updates, overlays persist")
```

## CSS Classes

### Body Classes
- `.dual-iframe` - Applied when dual mode is active
- Controls visibility of single vs dual frames

### Frame States
- `#foreground-frame.inactive` - Applied when no foreground content loaded
  - `pointer-events: none` allows clicks through to map

## Performance Considerations

### Memory
- Dual mode = 2 active browser contexts
- Each iframe has own DOM, JS runtime, rendering pipeline
- Monitor memory usage for complex content

### Rendering
- Browser composites two layers every frame
- Use CSS `will-change: opacity` for smooth transitions
- Transparent rendering has higher cost than opaque

### Optimization Tips
1. Keep foreground content simple when possible
2. Avoid simultaneous animations in both layers
3. Use `opacity` transitions rather than complex effects
4. Test on target devices (especially mobile)

## Browser Compatibility

✅ Transparent iframes: IE9+, all modern browsers
✅ Pointer-events: IE11+, all modern browsers
✅ CSS stacking/z-index: Universal support

## Disabling Dual Mode

Simply remove or set to false in frontmatter:

```markdown
---
dual-iframe: false
---
```

Or omit the frontmatter entirely to use single iframe mode (default).

## Testing

Test files:
- `dual-iframe-test.md` - Comprehensive test with multiple content types
- `dual-test-simple.md` - Simple map-only test

Access via:
- `http://localhost:8000/#dual-iframe-test`
- `http://localhost:8000/#dual-test-simple`
