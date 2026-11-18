@echo off
title Universal Training Intelligence Platform (PWA)
echo ==============================================================
echo  Universal Training Intelligence Platform (PWA)
echo  Health Department - Ahmedabad District, Gujarat
echo ==============================================================
echo Launching 100%% Offline PWA Dashboard in Standalone App Window...

set CHROME_PATH="C:\Program Files\Google\Chrome\Application\chrome.exe"
set CHROME_X86="C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
set EDGE_PATH="C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
set EDGE_64="C:\Program Files\Microsoft\Edge\Application\msedge.exe"

if exist %CHROME_PATH% (
    start "" %CHROME_PATH% --app="file:///%~dp0index.html"
    exit
)
if exist %CHROME_X86% (
    start "" %CHROME_X86% --app="file:///%~dp0index.html"
    exit
)
if exist %EDGE_PATH% (
    start "" %EDGE_PATH% --app="file:///%~dp0index.html"
    exit
)
if exist %EDGE_64% (
    start "" %EDGE_64% --app="file:///%~dp0index.html"
    exit
)

start "" "%~dp0index.html"
exit
