#!/usr/bin/env node
/**
 * Update the availableLocalLayerFiles list in map/index.html
 * Run this script whenever you add new .geojson or .csv files to the map/ directory
 * 
 * Usage: node scripts/update-geojson-list.js
 */

const fs = require('fs');
const path = require('path');

const MAP_DIR = path.join(__dirname, '../map');
const INDEX_FILE = path.join(MAP_DIR, 'index.html');

// Read all .geojson and .csv files in the map directory
function getGeojsonFiles() {
  const files = fs.readdirSync(MAP_DIR);
  return files
    .filter(f => f.endsWith('.geojson') || f.endsWith('.csv'))
    .map(f => f.replace(/\.(geojson|csv)$/, ''))
    .sort();
}

// Update the index.html file
function updateIndexHtml() {
  let content = fs.readFileSync(INDEX_FILE, 'utf8');
  
  const geojsonFiles = getGeojsonFiles();
  const fileListStr = geojsonFiles.map(f => `'${f}'`).join(',');
  
  // Find and replace the availableLocalLayerFiles array
  const pattern = /(const availableLocalLayerFiles = \[)[^\]]+(\];)/;
  
  if (!pattern.test(content)) {
    console.error('Could not find availableLocalLayerFiles array in index.html');
    process.exit(1);
  }
  
  const newContent = content.replace(
    pattern,
    `$1\n  ${fileListStr}\n$2`
  );
  
  fs.writeFileSync(INDEX_FILE, newContent, 'utf8');
  
  console.log(`✅ Updated availableLocalLayerFiles with ${geojsonFiles.length} files`);
  console.log('Files:', geojsonFiles.join(', '));
}

try {
  updateIndexHtml();
} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
}
