# Lexa Portfolio V3 — Editorial Edition

Open `index.html` directly in Chrome/Edge, or serve with VS Code Live Server. No Python or npm required.

## What's new
- All seven CV projects now have images from related Drive folders, marked as **not yet project-verified** unless confirmed.
- Editorial photo journal, click-to-enlarge lightbox, hover effects and gentle scroll reveal.
- Preserves EN/ID language switch and category filters.
- Photos are local `assets/` files, not externally hotlinked.

## Verification required before public launch
- Confirm that each project card photo depicts that specific project.
- Confirm the laser optical audio link description (CV text duplicates the antenna description).
- Obtain Lexa's approval for publicly displaying portrait, group photos, email and award materials.
- CCNA certificates are Cisco Networking Academy course completions, not the CCNA professional exam.

## PowerShell
`cd "$HOME\Downloads"`
`Expand-Archive .\lexa-portfolio-v3.zip -DestinationPath . -Force`
`cd .\lexa-portfolio`
`Start-Process (Resolve-Path .\index.html)`


## V4 — Certificate gallery
The Credentials section now displays actual first-page previews of the five certificate PDFs, rendered locally to JPEG for fast loading. Click an image to enlarge it; **Open PDF** opens the bundled original file offline, and **Google Drive** opens the source. No third-party PDF viewer or internet connection is needed for local previews.

Cisco certificates are Networking Academy course-completion certificates, not the professional CCNA exam certification.


## V5 updates
- Typography: Plus Jakarta Sans / DM Sans / DM Mono; fallback works offline.
- Contact cards show the full verified LinkedIn profile and email.
- Subtle reveal-on-scroll, hover lift and pointer parallax; respects reduced-motion preferences.
- Certificate previews and local PDFs from V4 remain intact.
