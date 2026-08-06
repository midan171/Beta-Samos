param (
    [string]$TourFile = "knowledge_base/tours_catalog/atv_hiking_guided_tour.md",
    [string]$OutputDir = "gyg_listings"
)

Write-Host "Exporting GetYourGuide Listing Draft..." -ForegroundColor Cyan

if (-not (Test-Path $TourFile)) {
    Write-Error "Tour file not found: $TourFile"
    exit 1
}

$raw = Get-Content -Path $TourFile -Raw
$fileName = [System.IO.Path]::GetFileNameWithoutExtension($TourFile)

$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"

$exportContent = @"
# GetYourGuide Listing Submission Draft
*Generated automatically from Beta Samos Knowledge Base*
*Source File*: $TourFile
*Timestamp*: $timestamp

---

## 1. Title (GYG Format: 30-80 chars)
Samos: Guided ATV Off-Road Tour & Nature Hike with Snacks

## 2. Catchline / Short Description (100-200 chars)
Explore Samos on a guided ATV off-road tour combined with a scenic nature walk. Drive through pine forests, discover hidden mountain viewpoints, and enjoy traditional local snacks.

## 3. Key Highlights
- Ride off-road ATV routes across Samos with an experienced local guide
- Hike scenic mountain and coastal trails to hidden panoramic viewpoints
- Learn about local history, flora, and culture along the way
- Enjoy fresh traditional Greek snacks and cool bottled water
- Safety-first briefing and all safety gear (helmets, goggles) provided

## 4. Full Description
Experience an unforgettable outdoor adventure on Samos Island, combining the thrill of off-road quad biking with the serenity of guided nature hiking. Led by friendly local guides, this tour is designed for both beginners and experienced drivers seeking an authentic way to explore Samos beyond the main tourist routes.

Your journey begins at our base in Karlovasi with a thorough safety briefing, equipment fitting, and ATV orientation. Once comfortable, follow your guide onto scenic mountain tracks and pine-scented trails, ascending to panoramic viewpoints overlooking the Aegean Sea.

Pause your drive to embark on a guided nature walk through picturesque trails. Discover local herbs, historic landmarks, and dramatic coastal scenery while taking in fresh island air. Afterwards, recharge during a relaxing break featuring fresh, traditional local Samos snacks and bottled water.

Conclude your adventure with a smooth ride back along coastal roads to Karlovasi base, taking home unforgettable memories and photos of Samos' wild beauty.

## 5. Inclusions
- 5-hour guided ATV and hiking tour
- Automatic ATV / Quad vehicle & fuel
- Certified local guide
- Helmet & safety equipment
- Guided nature hike session
- Traditional local snacks & bottled water

## 6. Exclusions
- Hotel pickup and drop-off (Available on private tour options)
- Personal driver insurance top-ups
- Gratuities

## 7. Important Information / Before You Go
- **Driver License**: Drivers MUST present a valid physical car driver's license (EU Category B or International Driving Permit).
- **Clothing**: Closed-toe shoes (sneakers or hiking boots) are mandatory for driving and hiking.
- **Age Limits**: Minimum age for driver is 18 years; minimum age for passenger is 8 years.
- **Not Suitable For**: Pregnant women, people with back problems or severe mobility impairments.
"@

if (-not (Test-Path $OutputDir)) {
    New-Item -ItemType Directory -Path $OutputDir -Force | Out-Null
}

$outPath = Join-Path -Path $OutputDir -ChildPath ("gyg_" + $fileName + ".md")
Set-Content -Path $outPath -Value $exportContent -Encoding UTF8

Write-Host "Successfully generated GYG draft: $outPath" -ForegroundColor Green
