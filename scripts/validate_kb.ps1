param (
    [string]$CatalogDir = "knowledge_base/tours_catalog"
)

Write-Host "--- Beta Samos Knowledge Base & GYG Validation Tool ---" -ForegroundColor Cyan

if (-not (Test-Path $CatalogDir)) {
    Write-Error "Catalog directory not found: $CatalogDir"
    exit 1
}

$tourFiles = Get-ChildItem -Path $CatalogDir -Filter "*.md"
if ($tourFiles.Count -eq 0) {
    Write-Warning "No tour markdown files found in $CatalogDir."
    exit 0
}

$errors = 0
$warnings = 0

foreach ($file in $tourFiles) {
    Write-Host "`nValidating file: $($file.Name)" -ForegroundColor Yellow
    $content = Get-Content -Path $file.FullName -Raw

    # Check mandatory sections
    $requiredSections = @("## Tour Summary", "## Short Description", "## Highlights", "## Full Itinerary", "## Inclusions", "## Participant Requirements")
    foreach ($sec in $requiredSections) {
        if ($content -notmatch [regex]::Escape($sec)) {
            Write-Host "  [ERROR] Missing mandatory section: '$sec'" -ForegroundColor Red
            $errors++
        } else {
            Write-Host "  [OK] Found section: '$sec'" -ForegroundColor Green
        }
    }

    # Check Title Length (Rough heuristic for GYG specs 30-80 chars)
    if ($content -match '# (.*)') {
        $title = $matches[1].Trim()
        Write-Host "  [INFO] Title: '$title' (Length: $($title.Length) chars)" -ForegroundColor Cyan
        if ($title.Length -lt 25 -or $title.Length -gt 85) {
            Write-Host "  [WARNING] Title length ($($title.Length) chars) is outside optimal GYG range (30-80 chars)." -ForegroundColor Yellow
            $warnings++
        }
    }

    # Check for Price & Duration
    if ($content -notmatch 'Duration') {
        Write-Host "  [WARNING] No 'Duration' field detected in tour summary." -ForegroundColor Yellow
        $warnings++
    }
    if ($content -notmatch 'Pricing|Price') {
        Write-Host "  [WARNING] No 'Price' field detected in tour summary." -ForegroundColor Yellow
        $warnings++
    }
}

Write-Host "`n================ Validation Summary ================" -ForegroundColor Cyan
Write-Host "Total files checked: $($tourFiles.Count)"

if ($errors -eq 0) {
    Write-Host "Total Errors: $errors" -ForegroundColor Green
} else {
    Write-Host "Total Errors: $errors" -ForegroundColor Red
}

if ($warnings -eq 0) {
    Write-Host "Total Warnings: $warnings" -ForegroundColor Green
} else {
    Write-Host "Total Warnings: $warnings" -ForegroundColor Yellow
}

if ($errors -gt 0) {
    exit 1
} else {
    exit 0
}
