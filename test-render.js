#!/usr/bin/env node

/**
 * Test script to verify the refactored extension system works
 * Simulates browser environment and checks if README.md renders
 */

const puppeteer = require('puppeteer');

(async () => {
  console.log('Starting browser test...');
  
  const browser = await puppeteer.launch({ 
    headless: 'new',
    args: ['--no-sandbox']
  });
  
  const page = await browser.newPage();
  
  // Listen for console messages
  page.on('console', msg => {
    const text = msg.text();
    if (text.includes('[DEBUG]') || text.includes('[ERROR]')) {
      console.log('Browser:', text);
    }
  });
  
  // Listen for errors
  page.on('pageerror', error => {
    console.error('Page error:', error.message);
  });
  
  // Navigate to the page
  console.log('Loading http://localhost:8003/...');
  await page.goto('http://localhost:8003/', { 
    waitUntil: 'networkidle0',
    timeout: 10000 
  });
  
  // Wait a bit for JavaScript to execute
  await page.waitForTimeout(2000);
  
  // Check if main has content
  const result = await page.evaluate(() => {
    const main = document.querySelector('main');
    if (!main) return { error: 'No main element found' };
    
    const sections = main.querySelectorAll('section');
    const firstSection = sections[0];
    const hasContent = main.textContent.trim().length > 0;
    
    return {
      mainLength: main.innerHTML.length,
      sectionCount: sections.length,
      hasContent,
      firstSectionId: firstSection ? firstSection.id : null,
      firstSectionText: firstSection ? firstSection.textContent.substring(0, 100) : null
    };
  });
  
  console.log('\n=== Test Results ===');
  console.log('Main element HTML length:', result.mainLength);
  console.log('Number of sections:', result.sectionCount);
  console.log('Has content:', result.hasContent);
  console.log('First section ID:', result.firstSectionId);
  console.log('First section text (100 chars):', result.firstSectionText);
  
  if (result.hasContent && result.sectionCount > 0) {
    console.log('\n✓ SUCCESS: Page rendered correctly');
    process.exit(0);
  } else {
    console.log('\n✗ FAILED: Page did not render');
    process.exit(1);
  }
  
  await browser.close();
})();
