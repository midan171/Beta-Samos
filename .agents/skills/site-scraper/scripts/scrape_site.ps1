param (
    [string]$Url = "https://6a3157a4b8dfb.site123.me/?app=1",
    [string]$OutputFile = "knowledge_base/scraped_site_data.md"
)

Write-Host ('Scraping content from URL: ' + $Url + '...') -ForegroundColor Green

try {
    $webResponse = Invoke-WebRequest -Uri $Url -UserAgent "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" -UseBasicParsing
    $rawContent = $webResponse.Content
} catch {
    Write-Error ("Failed to fetch content from URL: " + $_)
    exit 1
}

# Remove scripts, styles, HTML tags
$noStyles = $rawContent -replace '(?s)<style.*?</style>', '' -replace '(?s)<script.*?</script>', ''
$cleanText = $noStyles -replace '<[^>]+>', "`n"

$lines = $cleanText -split "`n" | Where-Object { 
    $_.Trim().Length -gt 2 -and 
    $_ -notmatch 'font-face|\{|\}|var\(--|function|script|css|unicode-range|@media' 
} | ForEach-Object { $_.Trim() }

$uniqueLines = $lines | Select-Object -Unique

$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"

$header = "# Scraped Website Knowledge Base Data`n`n- **Source URL**: " + $Url + "`n- **Scraped Timestamp**: " + $timestamp + "`n`n## Extracted Content & Details`n`n"
$bodyText = $uniqueLines -join "`n"

$finalMd = $header + $bodyText

# Ensure parent directory exists
$parentDir = Split-Path -Path $OutputFile -Parent
if ($parentDir -and -not (Test-Path $parentDir)) {
    New-Item -ItemType Directory -Path $parentDir -Force | Out-Null
}

Set-Content -Path $OutputFile -Value $finalMd -Encoding UTF8
Write-Host ('Successfully saved scraped knowledge data to: ' + $OutputFile) -ForegroundColor Green
