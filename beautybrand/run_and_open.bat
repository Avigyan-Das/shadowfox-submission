@echo off
echo Starting Aura Botanical Next.js development server...

:: Start the Next.js dev server in a new window so it doesn't block this script
start "Aura Botanical Dev Server" cmd /k "npm run dev"

:: Wait for a few seconds to let the server spin up
echo Waiting for server to initialize...
timeout /t 5 /nobreak > NUL

:: Open the default web browser to the local server
echo Opening browser...
start http://localhost:3000
