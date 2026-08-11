# Beta Samos - Tour Guide Knowledge Base & Agent System

Welcome to the **Beta Samos** workspace. This repository manages the online information, tour catalog, operational policies, and GetYourGuide listings for **Beta Samos ATV and Hiking Tour** (Samos Island, Greece).

---

## 📁 Knowledge Base Architecture (`knowledge_base/`)

The repository maintains a structured, agent-accessible Knowledge Base for all company operations and tour data:

- **[`company_profile.md`](knowledge_base/company_profile.md)**: Company background, mission, contact info, brand tone, USPs, operating hours.
- **[`tours_catalog/`](knowledge_base/tours_catalog/)**:
  - **[`atv_hiking_guided_tour.md`](knowledge_base/tours_catalog/atv_hiking_guided_tour.md)**: Flagship 3–4 hour ATV Adventure – Pythagoras Cave Tour (€95/person, 3 villages, seaside & mountain trails).
  - **[`megalo_seitani_full_day_sunset_tour.md`](knowledge_base/tours_catalog/megalo_seitani_full_day_sunset_tour.md)**: Full-Day 9–10 hour Megalo Seitani Sunset Experience (€175/person, Mount Kerkis, waterfalls, Drakei lunch, Megalo Seitani hike & swim).
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

## 🌐 Official Website & Cloudflare Deployment

The official bilingual website for **Beta Samos ATV & Hiking Tour** is hosted on **Cloudflare Edge CDN** and mapped to **`https://betasamos.gr`**.

- **Production URL**: `https://betasamos.gr`
- **Cloudflare Edge Deployment**: `https://beta-samos.mikedan171.workers.dev`
- **Registrar**: Papaki.gr (team.blue) | Nameservers: `lee.ns.cloudflare.com`, `lina.ns.cloudflare.com`

### 🔒 Safe Branching & Update Workflow

We use a dual-branch Git workflow to ensure production is never broken:

```
[develop] (Draft changes, new tours, testing) ──> Cloudflare Preview URL
     │
     └── (Pull Request / Merge when tested) ──> [main] (Production: betasamos.gr)
```

1. **Working on Updates (Always on `develop`)**:
   ```bash
   git checkout develop
   # Make your changes to HTML, CSS, images, etc.
   git add .
   git commit -m "feat: add new sunset tour photos"
   git push origin develop
   ```
2. **Reviewing on Preview URL**:
   - Cloudflare creates a private preview build where you can test changes on mobile and desktop safely.
3. **Releasing to Production (`main`)**:
   - Once approved, merge `develop` into `main`:
   ```bash
   git checkout main
   git merge develop
   git push origin main
   ```
   - Cloudflare automatically deploys the update to `betasamos.gr` in ~15 seconds with zero downtime.

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

