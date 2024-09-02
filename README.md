# Find My Mates - Find classmates on LinkedIn

## Overview

This Chrome extension inserts clickable buttons next to each student on the Canvas roster page. These buttons allow you to easily search for classmates on LinkedIn by their names.

## How It Works

1. Click the extension icon in the Chrome toolbar while on the Canvas roster page.
2. A pop-up will confirm that the LinkedIn buttons are being generated.
3. LinkedIn search buttons will be inserted next to each student’s name on the roster.

## Installation

1. Clone this repository or download the files.
2. Go to `chrome://extensions/` in your Chrome browser.
3. Enable **Developer mode** (toggle switch in the top right corner).
4. Click **Load unpacked** and select the directory containing the extension files.

## Usage

1. Navigate to the Canvas roster page.
2. Click on the extension icon in the Chrome toolbar.
3. Click on the LinkedIn buttons next to each student's name to search for them on LinkedIn.

## Files

- `popup.html`: The HTML for the extension's pop-up interface.
- `popup.js`: The JavaScript that handles injecting the content script.
- `content.js`: The content script that generates and inserts the LinkedIn buttons on the Canvas roster page.
