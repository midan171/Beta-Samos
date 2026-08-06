# Beta Samos - Tour Guide Knowledge Base & Agent System

Welcome to the **Beta Samos** workspace. This repository manages the online information, tour catalog, operational policies, and GetYourGuide listings for **Beta Samos ATV and Hiking Tour** (Samos Island, Greece).

---

## 📁 Knowledge Base Architecture (`knowledge_base/`)

The repository maintains a structured, agent-accessible Knowledge Base for all company operations and tour data:

- **[`company_profile.md`](knowledge_base/company_profile.md)**: Company background, mission, contact info, brand tone, USPs, operating hours.
- **[`tours_catalog/`](knowledge_base/tours_catalog/)**:
  - **[`atv_hiking_guided_tour.md`](knowledge_base/tours_catalog/atv_hiking_guided_tour.md)**: Flagship 5-hour ATV & Hiking Tour (€110/person, snacks, itinerary, inclusions).
  - **[`custom_private_tours.md`](knowledge_base/tours_catalog/custom_private_tours.md)**: Tailor-made private group packages.
- **[`operations_and_faq.md`](knowledge_base/operations_and_faq.md)**: License rules (Category B), age limits, weather contingency, cancellation policy, customer FAQs.
- **[`getyourguide_specs.md`](knowledge_base/getyourguide_specs.md)**: GetYourGuide listing character limits, title standards, keywords, and inclusion formatting.
- **[`scraped_site_data.md`](knowledge_base/scraped_site_data.md)**: Extracted content synced from the primary website (`https://6a3157a4b8dfb.site123.me/?app=1`).

---

## 🤖 Agent Customizations & Skills (`.agents/`)

Custom workspace rules and skills are configured so AI agents can perform automated operations:

- **[`AGENTS.md`](.agents/AGENTS.md)**: Core guidelines instructing agents on brand tone, knowledge retrieval, and GetYourGuide compliance.
- **`site-scraper` skill (`.agents/skills/site-scraper/`)**:
  - Scrapes tour & company content from Site123 (`https://6a3157a4b8dfb.site123.me/?app=1`) and syncs knowledge base files.
- **`gyg-listing-manager` skill (`.agents/skills/gyg-listing-manager/`)**:
  - Formats, audits, and generates GetYourGuide listing submission drafts.
- **`tour-kb-manager` skill (`.agents/skills/tour-kb-manager/`)**:
  - Audits catalog completeness and validates tour entries against requirements.

---

## 🛠️ Utilities & CLI Scripts (`scripts/`)

- **Validate Knowledge Base & GYG Specs**:
  ```powershell
  powershell.exe -ExecutionPolicy Bypass -File "scripts/validate_kb.ps1"
  ```
- **Scrape Website Information**:
  ```powershell
  powershell.exe -ExecutionPolicy Bypass -File ".agents/skills/site-scraper/scripts/scrape_site.ps1" -Url "https://6a3157a4b8dfb.site123.me/?app=1"
  ```
- **Export GetYourGuide Listing Draft**:
  ```powershell
  powershell.exe -ExecutionPolicy Bypass -File "scripts/export_gyg_listing.ps1" -TourFile "knowledge_base/tours_catalog/atv_hiking_guided_tour.md"
  ```
