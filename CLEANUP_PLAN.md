# Map Index.html Cleanup Plan

## Current State Analysis
- **File size**: 3,202 lines
- **Debug logs**: 100+ console.log/warn statements
- **Main issues**: Poor organization, excessive debugging, no separation of concerns

## Cleanup Tasks

### 1. Remove Debug Code (HIGH PRIORITY - Performance Impact)
- [ ] Remove all `[FOLLOW DEBUG]` console.log statements (~20 instances)
- [ ] Remove all `[ADD LAYER]` console.log statements (~10 instances)
- [ ] Remove all `[FILTER]` console.log statements (~15 instances)
- [ ] Remove all `[WAYBACK]` console.log statements (~12 instances)
- [ ] Keep only critical console.warn for actual errors
- [ ] Remove or conditionalize UI debug logs

### 2. Organize Variables (HIGH PRIORITY - Readability)
**Move to top of script section:**
- Configuration constants (MAPBOX_STYLE, DEFAULT_CAMERA, FILTERABLE_LAYER_TYPES, AVAILABLE_LOCAL_LAYERS)
- Global state variables (map, allStyleLayers, externalLayers, etc.)
- Animation state (isFreeCameraAnimating)

### 3. Remove Duplicate Code
- Deduplicate console.log instances that appear twice in grep results
- Check for any duplicated functions or event handlers

### 4. Improve Function Organization
**Group functions by purpose:**
- Hash parsing & URL management
- Layer loading & management
- UI creation & interaction
- Filter management
- Follow animation
- Wayback integration
- Map UI controls

### 5. Performance Optimizations
- [ ] Lazy-load Wayback iframe (don't create until needed)
- [ ] Debounce filter input updates
- [ ] Cache queryRenderedFeatures results for property dropdown
- [ ] Remove unnecessary re-renders

### 6. Code Quality Improvements
- [ ] Add JSDoc comments to complex functions
- [ ] Remove excessive inline comments
- [ ] Standardize naming conventions
- [ ] Remove dead code / unused variables

### 7. Potential Feature Removals (USER DECISION NEEDED)

#### A. Wayback Iframe Container
**Current**: Full embedded iframe that loads livingatlas.arcgis.com
**Impact**: Increases page complexity, potential security concern
**Recommendation**: Consider opening in new tab instead
**Lines**: ~400-700 (iframe setup, event handlers, positioning logic)

#### B. Excessive Tooltip Logic
**Current**: Tooltips on almost every UI element with dynamic updates
**Impact**: Extra DOM manipulation
**Recommendation**: Keep static tooltips, remove dynamic ones
**Lines**: Scattered throughout UI creation

#### C. Debug/Development Features
- console.debug paths
- Excessive try/catch with console.warn
- Development-only console.log statements

### 8. Suggested File Splitting (FUTURE)

```
map/
  ├── index.html                 (Main HTML, minimal inline JS)
  ├── styles/
  │   └── map.css               (All CSS ~500 lines)
  ├── js/
  │   ├── config.js             (Constants, available layers ~100 lines)
  │   ├── hash-parser.js        (parseHash, updateHash ~200 lines)
  │   ├── layer-manager.js      (Layer loading, GeoJSON/CSV ~400 lines)
  │   ├── ui-controls.js        (Layer panel, buttons ~500 lines)
  │   ├── filter-manager.js     (Filter parsing & application ~200 lines)
  │   ├── follow-animation.js   (Follow path logic ~300 lines)
  │   ├── wayback.js            (ESRI Wayback integration ~200 lines)
  │   ├── map-ui-controls.js    (Optional zoom/fullscreen ~100 lines)
  │   └── main.js               (Initialization, event wiring ~200 lines)
  └── data/                     (GeoJSON files - already exists)
```

**Benefits**:
- Easier maintenance
- Better caching (CSS/JS can be cached separately)
- Clearer separation of concerns
- Easier testing
- Faster development (edit only relevant file)

**Trade-offs**:
- More HTTP requests (can be mitigated with bundler if needed)
- Slightly more complex deployment

## Execution Priority

1. **Phase 1** (Immediate - No functionality change):
   - Remove debug console.log statements
   - Organize variables at top
   - Remove duplicate code
   - Add function documentation

2. **Phase 2** (Short-term - Minor changes):
   - Performance optimizations
   - Code quality improvements
   - Standardize formatting

3. **Phase 3** (Long-term - Requires testing):
   - File splitting
   - Feature removals (if approved)
   - Architecture refactoring

## Estimated Impact

**Performance**:
- Remove ~100 console.log calls: Minimal impact but cleaner
- Debounce inputs: Noticeable improvement during typing
- Lazy-load iframe: Faster initial page load
- Cache feature queries: Faster property dropdown

**Maintainability**:
- Current: Hard to find specific functionality
- After cleanup: Clear function organization
- After splitting: Each concern in its own file

**File Size**:
- Current: ~150KB
- After Phase 1: ~140KB (remove debug code)
- After Phase 2: ~130KB (optimize)
- After splitting: Same total, but better caching

## Questions for User

1. **Wayback iframe**: Keep embedded or open in new tab?
2. **Debug mode**: Remove all or add a `?debug=1` flag to enable?
3. **File splitting**: Do now or later?
4. **Console warnings**: Keep for errors or remove entirely?
5. **Tooltips**: Keep all or just essential ones?
