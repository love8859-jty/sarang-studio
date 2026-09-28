@echo off
chcp 65001 >nul
cd /d "%~dp0"
set URL=http://localhost:8080/
set CHROME=%ProgramFiles%\Google\Chrome\Application\chrome.exe
if not exist "%CHROME%" set CHROME=%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe
if not exist "%CHROME%" set CHROME=%LocalAppData%\Google\Chrome\Application\chrome.exe
if exist "%CHROME%" (start "" "%CHROME%" "%URL%") else (start "" "%URL%")
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0server.ps1" -Port 8080
