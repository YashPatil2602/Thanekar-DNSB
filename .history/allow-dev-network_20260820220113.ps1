$ErrorActionPreference = "Stop"

$rules = @(
    @{ Name = "Thanekar DNSB Vite 5173"; Port = 5173 },
    @{ Name = "Thanekar DNSB Flask 5000"; Port = 5000 }
)

foreach ($rule in $rules) {
    $existing = Get-NetFirewallRule -DisplayName $rule.Name -ErrorAction SilentlyContinue
    if (-not $existing) {
        New-NetFirewallRule `
            -DisplayName $rule.Name `
            -Direction Inbound `
            -Action Allow `
            -Protocol TCP `
            -LocalPort $rule.Port `
            -Profile Private,Public
    }
}

Write-Host "Development ports 5173 and 5000 are allowed." -ForegroundColor Green
Write-Host "Restart Vite/Flask, then open the Network URL shown by Vite on the other device." -ForegroundColor Cyan
