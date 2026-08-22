$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$backendPath = Join-Path $projectRoot "backend\app.py"
$frontendPath = Join-Path $projectRoot "frontend"
$network = Get-NetIPConfiguration |
    Where-Object { $_.IPv4DefaultGateway -and $_.IPv4Address } |
    Select-Object -First 1
$lanIp = $network.IPv4Address.IPAddress

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
if ($lanIp) {
    Write-Host "On the same Wi-Fi, open on your phone: http://${lanIp}:5173/" -ForegroundColor Green
} else {
    Write-Host "Could not detect a LAN IP. Use the Network URL shown by Vite." -ForegroundColor Yellow
}
Write-Host "If the phone still cannot connect, run allow-dev-network.ps1 as Administrator." -ForegroundColor Yellow
Write-Host "Keep both PowerShell windows open while using the website." -ForegroundColor Yellow
