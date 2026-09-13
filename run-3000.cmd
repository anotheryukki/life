@echo off
title $LIFE dev server :3000
cd /d D:\life
echo Closing anything on port 3000...
for /f "tokens=5" %%p in ('netstat -ano ^| findstr /r /c:":3000 .*LISTENING"') do taskkill /F /PID %%p >nul 2>&1
timeout /t 1 /nobreak >nul
start "" http://localhost:3000
node serve.js
