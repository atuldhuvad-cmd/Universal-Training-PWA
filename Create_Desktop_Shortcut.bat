@echo off
title Create Desktop Shortcut - Universal Training Platform
echo ==============================================================
echo  Universal Training Intelligence Platform (PWA)
echo  Health Department - Ahmedabad District, Gujarat
echo ==============================================================
echo Creating Desktop Shortcut with App Icon...

powershell -NoProfile -Command "& { $ws = New-Object -ComObject WScript.Shell; $d = [Environment]::GetFolderPath('Desktop'); $sc = $ws.CreateShortcut((Join-Path $d 'Universal Health Training Intelligence Platform.lnk')); $sc.TargetPath = '%~dp0Launch_PWA.bat'; $sc.WorkingDirectory = '%~dp0'; $sc.IconLocation = '%~dp0icons\icon.ico'; $sc.Description = 'Universal Health Training Intelligence Platform'; $sc.Save(); Write-Output 'SUCCESS: Desktop shortcut created on your desktop!' }"

echo.
echo Shortcut created successfully!
pause
