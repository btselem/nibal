#!/bin/bash
# Script to remove debug console.log statements from map/index.html

set -e

BACKUP_FILE="map/index.html.backup"
TARGET_FILE="map/index.html"

# Create backup if it doesn't exist
if [ ! -f "$BACKUP_FILE" ]; then
  cp "$TARGET_FILE" "$BACKUP_FILE"
  echo "Created backup: $BACKUP_FILE"
fi

# Remove console.log lines with debug prefixes (keep console.warn and console.error)
sed -i.tmp '/console\.log.*\[FOLLOW DEBUG\]/d' "$TARGET_FILE"
sed -i.tmp '/console\.log.*\[FOLLOW BTN\]/d' "$TARGET_FILE"
sed -i.tmp '/console\.log.*\[FOLLOW OFFSET\]/d' "$TARGET_FILE"
sed -i.tmp '/console\.log.*\[FOLLOW START\]/d' "$TARGET_FILE"
sed -i.tmp '/console\.log.*\[FOLLOW CHECK\]/d' "$TARGET_FILE"
sed -i.tmp '/console\.log.*\[FOLLOW\]/d' "$TARGET_FILE"
sed -i.tmp '/console\.log.*\[HASHCHANGE\]/d' "$TARGET_FILE"
sed -i.tmp '/console\.log.*\[INIT\]/d' "$TARGET_FILE"
sed -i.tmp '/console\.log.*\[FILTER INPUT\]/d' "$TARGET_FILE"
sed -i.tmp '/console\.log.*\[UI\]/d' "$TARGET_FILE"
sed -i.tmp '/console\.debug/d' "$TARGET_FILE"

# Remove temp files
rm -f "$TARGET_FILE.tmp"

echo "✓ Removed debug console.log statements"
echo "Remaining console.log statements:"
grep -c "console.log" "$TARGET_FILE" || echo "0"
