$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$backendPath = Join-Path $projectRoot "backend\app.py"
$frontendPath = Join-Path $projectRoot "frontend"

Write-Host "Starting Flask backend on http://127.0.0.1:5000 ..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList @(
    "-NoExit",
    "-NoProfile",
    "-Command",
    "python `"$backendPath`""
)

Start-Sleep -Seconds 2

Write-Host "Starting Vite frontend on http://localhost:5173 ..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList @(
    "-NoExit",
    "-NoProfile",
    "-Command",
    "npm --prefix `"$frontendPath`" run dev -- --host 0.0.0.0"
)

Write-Host "" 
Write-Host "Open on this computer: http://localhost:5173/" -ForegroundColor Green
Write-Host "On the same Wi-Fi, use the Network URL shown by Vite." -ForegroundColor Green
Write-Host "Keep both PowerShell windows open while using the website." -ForegroundColor Yellow
