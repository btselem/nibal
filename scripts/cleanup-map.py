#!/usr/bin/env python3
"""
Cleanup script for map/index.html
Removes debug console.log statements while preserving functionality
"""

import re
import sys

def cleanup_console_logs(content):
    """Remove debug console.log statements but keep console.warn for errors"""
    
    # Patterns to remove (debug logs)
    debug_patterns = [
        r'\s*console\.log\([^)]*\[FOLLOW DEBUG\][^)]*\);?\n',
        r'\s*console\.log\([^)]*\[ADD LAYER\][^)]*\);?\n',
        r'\s*console\.log\([^)]*\[FILTER\][^)]*\);?\n',
        r'\s*console\.log\([^)]*\[WAYBACK\][^)]*\);?\n',
        r'\s*console\.log\([^)]*\[HASHCHANGE\][^)]*\);?\n',
        r'\s*console\.log\([^)]*\[INIT\][^)]*\);?\n',
        r'\s*console\.log\([^)]*\[UI\][^)]*\);?\n',
        r'\s*console\.log\([^)]*\[MAP\][^)]*\);?\n',
        r'\s*console\.log\([^)]*\[FOLLOW BTN\][^)]*\);?\n',
        r'\s*console\.log\([^)]*\[FOLLOW OFFSET\][^)]*\);?\n',
        r'\s*console\.log\([^)]*\[FOLLOW START\][^)]*\);?\n',
        r'\s*console\.log\([^)]*\[FOLLOW CHECK\][^)]*\);?\n',
        r'\s*console\.log\([^)]*\[FOLLOW\][^)]*\);?\n',
        r'\s*console\.log\([^)]*\[HASH PARSE\][^)]*\);?\n',
        r'\s*console\.log\([^)]*\[HASH\][^)]*\);?\n',
        r'\s*console\.log\([^)]*\[MAP UI\][^)]*\);?\n',
        r'\s*console\.log\([^)]*\[FILTER INPUT\][^)]*\);?\n',
        r'\s*console\.log\([^)]*\[FILTER PROPS\][^)]*\);?\n',
        r'\s*console\.debug\([^)]*\);?\n',
    ]
    
    lines_removed = 0
    for pattern in debug_patterns:
        matches = re.findall(pattern, content)
        lines_removed += len(matches)
        content = re.sub(pattern, '', content)
    
    return content, lines_removed

def remove_wayback_iframe(content):
    """Remove the embedded Wayback iframe and replace with simple link"""
    
    # Remove iframe container from HTML
    content = re.sub(
        r'<div id="wayback-iframe-container">.*?</div>\s*\n',
        '',
        content,
        flags=re.DOTALL
    )
    
    # Remove wayback-iframe-container CSS
    content = re.sub(
        r'\s*/\* ==.*WAYBACK IFRAME.*== \*/\n.*?#wayback-iframe \{[^}]+}\n',
        '',
        content,
        flags=re.DOTALL
    )
    
    # Simplify satellite tab to just show link
    # Find and replace the wayback status/hint text
    content = re.sub(
        r'<p class="hint" style="font-size: 11px; margin: 4px 0 0; color: rgba\(255,255,255,0\.8\);">\s*choose the date from the list on the <a id="wayback-open-new"[^>]+>Wayback site</a> and enter it in the date picker\s*</p>',
        '<p class="hint" style="font-size: 11px; margin: 4px 0 0; color: rgba(255,255,255,0.8);">Choose date from the <a id="wayback-open-link" href="https://livingatlas.arcgis.com/wayback/" target="_blank" rel="noopener noreferrer" style="color:#9fd1ff;text-decoration:underline;">Wayback Imagery site</a></p>',
        content
    )
    
    # Remove Wayback iframe show/hide logic from tab switching
    content = re.sub(
        r"    // Show/hide Wayback iframe\n.*?}\n    }\n",
        "",
        content,
        flags=re.DOTALL
    )
    
    # Remove wayback container hide on form close
    content = re.sub(
        r"        // Will close - just hide the Wayback container if visible\n        const waybackContainer = document\.getElementById\('wayback-iframe-container'\);\n        if \(waybackContainer\) waybackContainer\.classList\.remove\('active'\);\n",
        "",
        content
    )
    
    # Remove wayback container hide after layer add
    content = re.sub(
        r"    const waybackContainer = document\.getElementById\('wayback-iframe-container'\);\n    if \(waybackContainer\) waybackContainer\.classList\.remove\('active'\);\n",
        "",
        content
    )
    
    # Remove wayback iframe status monitoring
    content = re.sub(
        r"  // Minimal status updates for the Wayback iframe\n.*?}\n  }\n}\);\n\n",
        "",
        content,
        flags=re.DOTALL
    )
    
    return content

def main():
    input_file = 'map/index.html'
    output_file = 'map/index.html'
    backup_file = 'map/index.html.backup'
    
    try:
        # Read input file
        with open(input_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_lines = len(content.split('\n'))
        
        # Create backup
        with open(backup_file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✓ Created backup: {backup_file}")
        
        # Perform cleanups
        print("\nCleaning up console.log statements...")
        content, logs_removed = cleanup_console_logs(content)
        print(f"✓ Removed {logs_removed} debug console.log statements")
        
        print("\nRemoving Wayback iframe...")
        content = remove_wayback_iframe(content)
        print("✓ Replaced embedded Wayback iframe with external link")
        
        final_lines = len(content.split('\n'))
        lines_saved = original_lines - final_lines
        
        # Write output
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"\n{'='*50}")
        print(f"CLEANUP COMPLETE")
        print(f"{'='*50}")
        print(f"Original lines:    {original_lines:,}")
        print(f"Final lines:       {final_lines:,}")
        print(f"Lines removed:     {lines_saved:,} ({lines_saved/original_lines*100:.1f}%)")
        print(f"\nOutput written to: {output_file}")
        print(f"Backup saved to:   {backup_file}")
        
        return 0
        
    except Exception as e:
        print(f"ERROR: {e}", file=sys.stderr)
        return 1

if __name__ == '__main__':
    sys.exit(main())
