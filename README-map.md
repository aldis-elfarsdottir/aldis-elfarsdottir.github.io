# Adding the "Where I've Worked" map

This adds an interactive world map to your site: click a pin to see a
scrollable timeline of the role(s) you held there. It uses D3.js to draw
real country borders (loaded from a CDN at runtime — nothing to store
in your repo), so it works the same locally and once deployed.

## Files in this folder

- `map-section.html` — the HTML to paste in, plus the script tags it needs
- `map.css` — styles to append to your existing `style.css`
- `map-data.js` — **edit this** with your real locations and roles
- `map.js` — the rendering logic (no edits needed)

## Steps

1. **Copy the section into `index.html`.**
   Open `map-section.html`, copy the `<section id="map">...</section>`
   block, and paste it into your `index.html` wherever you'd like it to
   appear (e.g. between Experience and Projects).

2. **Add the script tags.**
   Still in `map-section.html`, copy the four `<script>` lines at the
   bottom and paste them into `index.html`, right before your existing
   `<script src="script.js"></script>` line. Order matters — d3 and
   topojson-client must come before `map-data.js` and `map.js`.

3. **Add the nav link (optional).**
   In the sidebar `<nav class="nav">` in `index.html`, add:
   ```html
   <a href="#map">Map</a>
   ```

4. **Copy the data and script files.**
   Copy `map-data.js` and `map.js` into the same folder as your
   `index.html` (alongside `style.css` and `script.js`).

5. **Add the CSS.**
   Open `map.css` and append its entire contents to the end of your
   existing `style.css`.

6. **Edit `map-data.js` with your real data.**
   The locations already reflect your resume (Cambridge/Boston,
   Stanford/SF, the Netherlands, Iceland, Gurugram) — double check the
   dates, titles, and descriptions read the way you want, and adjust
   any coordinates if you'd like a different city to represent a
   cluster.

7. **Preview locally**, then commit and push as usual:
   ```
   git add .
   git commit -m "Add interactive world map"
   git push
   ```

## Notes

- Clicking a pin (or a place-name button below the map) opens that
  location's roles in the panel underneath, newest first. If a
  location has several roles, the panel scrolls internally rather than
  pushing the rest of the page down.
- The map fetches `countries-110m.json` from a public CDN
  (`jsdelivr.net`) each time the page loads — this requires an internet
  connection but keeps your repo lightweight.
- Pins are keyboard-accessible (tab to a pin, press Enter or Space).
