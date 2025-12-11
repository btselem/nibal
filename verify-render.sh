#!/bin/bash

# Verify that the refactored page renders correctly
# This script checks the key indicators of a successful render

echo "🔍 Verifying refactored extension system..."
echo ""

# Check that frontmatter.js exports the correct API
echo "1. Checking frontmatter.js API exports..."
if grep -q "extractFrontMatter: extractFrontMatter" src/extensions/frontmatter.js && \
   grep -q "applyPageCss: applyPageCss" src/extensions/frontmatter.js && \
   grep -q "applyDualIframeMode: applyDualIframeMode" src/extensions/frontmatter.js; then
    echo "   ✓ API exports are correct"
else
    echo "   ✗ API exports are wrong"
    exit 1
fi

# Check that index.html calls the correct methods
echo "2. Checking index.html method calls..."
if grep -q "FrontmatterExt.extractFrontMatter" index.html && \
   grep -q "FrontmatterExt.applyPageCss" index.html && \
   grep -q "FrontmatterExt.applyDualIframeMode" index.html; then
    echo "   ✓ Method calls match API"
else
    echo "   ✗ Method calls don't match"
    exit 1
fi

# Check that all extension files exist
echo "3. Checking extension files..."
extensions=("frontmatter.js" "dual-iframe.js" "edit-mode.js" "snap-scroll.js" "inflect-caption.js" "section-animations.js")
for ext in "${extensions[@]}"; do
    if [ -f "src/extensions/$ext" ]; then
        echo "   ✓ $ext exists"
    else
        echo "   ✗ $ext missing"
        exit 1
    fi
done

# Check that extension CSS files exist for those that need them
echo "4. Checking extension CSS files..."
if [ -f "src/extensions/dual-iframe.css" ] && [ -f "src/extensions/section-animations.css" ]; then
    echo "   ✓ Required CSS files exist"
else
    echo "   ✗ Missing CSS files"
    exit 1
fi

# Count git commits on the refactor branch
echo "5. Checking git branch..."
current_branch=$(git branch --show-current)
if [ "$current_branch" = "refactor-modular-extensions" ]; then
    commit_count=$(git log --oneline main..HEAD | wc -l | tr -d ' ')
    echo "   ✓ On refactor-modular-extensions branch ($commit_count commits)"
else
    echo "   ✗ Wrong branch: $current_branch"
    exit 1
fi

echo ""
echo "✅ All verification checks passed!"
echo ""
echo "📋 Manual testing required:"
echo "   1. Open http://localhost:5500/ in your browser (or start Live Server)"
echo "   2. Verify README.md content is visible"
echo "   3. Check browser console for errors"
echo "   4. Test keyboard shortcuts: E, F, B, C"
echo "   5. Test scroll snapping"
echo "   6. Test section animations"
echo ""
