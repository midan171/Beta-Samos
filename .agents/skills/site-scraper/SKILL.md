---
name: site-scraper
description: Scrape website information from Beta Samos' Site123 or external website URLs and store/sync extracted tour and company info into the knowledge base.
---

# Site Scraper Skill - Beta Samos

Use this skill when you need to fetch, extract, and update the knowledge base with content from Beta Samos websites (e.g., `https://6a3157a4b8dfb.site123.me/?app=1` or future domain URLs).

## Instructions

1. Run the PowerShell scraper script to fetch raw text content:
   ```powershell
   powershell.exe -ExecutionPolicy Bypass -File ".agents/skills/site-scraper/scripts/scrape_site.ps1" -Url "https://6a3157a4b8dfb.site123.me/?app=1" -OutputFile "knowledge_base/scraped_site_data.md"
   ```

2. Read the resulting file `knowledge_base/scraped_site_data.md`.

3. Extract relevant updates (new tour offerings, updated prices, contact details, customer reviews) and integrate them into the corresponding files in `knowledge_base/`:
   - `knowledge_base/company_profile.md`
   - `knowledge_base/tours_catalog/`
   - `knowledge_base/operations_and_faq.md`
