@echo off
title $LIFE push to GitHub
cd /d D:\life
git add -A
git commit -m "Fluid milestone bar, Minh tiles, native scroll scrubbing" -m "- Liquid progress bar with Minh milestone tiles (unlock per market cap)" -m "- Native scroll drives the footage; runway 520vh; seek chasing" -m "- Background footage re-encoded for scrubbing (1080p 2-frame GOP, 720p/portrait all-intra)" -m "- serve.js on :3000 with webp; run-3000.cmd launcher"
git push origin main
echo.
echo Done. Press any key to close.
pause >nul
