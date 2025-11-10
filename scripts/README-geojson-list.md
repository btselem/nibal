# Update GeoJSON File List

## Problem
The `availableLocalLayerFiles` array in `map/index.html` needs to be kept in sync with the actual `.geojson` files in the `map/` directory.

## Solutions

### Solution 1: Accept Any Input (IMPLEMENTED)
The input field now accepts any filename or URL, not just those in the predefined list. The datalist provides suggestions but doesn't restrict what you can enter.

### Solution 2: Update Script (RECOMMENDED)
Run the update script whenever you add/remove `.geojson` files:

```bash
node scripts/update-geojson-list.js
```

This script will:
- Read all `.geojson` files in the `map/` directory
- Update the `availableLocalLayerFiles` array in `map/index.html`
- Sort the list alphabetically

### Solution 3: Server-Side API (Future)
For dynamic file listing, you would need to:
1. Add a backend server (Node.js, Python, PHP, etc.)
2. Create an endpoint like `/api/geojson-files`
3. Fetch this list on page load

Example API endpoint (Node.js/Express):
```javascript
app.get('/api/geojson-files', (req, res) => {
  const files = fs.readdirSync('./map')
    .filter(f => f.endsWith('.geojson'))
    .map(f => f.replace('.geojson', ''));
  res.json(files);
});
```

## Current Workflow
1. Add new `.geojson` files to the `map/` directory
2. Run `node scripts/update-geojson-list.js` to update the list
3. The input field also accepts custom URLs/filenames not in the list
