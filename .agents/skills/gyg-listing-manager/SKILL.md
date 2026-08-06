---
name: gyg-listing-manager
description: Draft, format, audit, and export GetYourGuide tour listings for Beta Samos based on knowledge base data and GetYourGuide platform guidelines.
---

# GetYourGuide Listing Manager Skill

Use this skill when preparing tour listings for submission to GetYourGuide (GYG) or auditing existing listings for platform compliance and SEO optimization.

## Workflow & Guidelines

1. **Read Specifications**:
   - Inspect `knowledge_base/getyourguide_specs.md` for current GYG character limits, title structures, and inclusion rules.

2. **Retrieve Tour Knowledge**:
   - Load target tour markdown file from `knowledge_base/tours_catalog/` (e.g. `atv_hiking_guided_tour.md`).

3. **Format & Validate Listing Fields**:
   - **Title**: 30–80 characters (e.g., `Samos: Guided ATV Off-Road Tour & Nature Hike with Snacks`).
   - **Catchline (Short Description)**: 100–200 characters summarizing the core experience.
   - **Highlights**: 3–5 bullet points starting with active verbs.
   - **Full Description**: 3–4 clean paragraphs outlining the flow.
   - **Inclusions / Exclusions**: Explicit bulleted list.
   - **Important Information**: Driver's license requirements (physical license, Category B), clothing (closed-toe shoes), age limits.

4. **Export Draft**:
   - Run `python scripts/export_gyg_listing.py` or generate a markdown draft file in `gyg_listings/` ready for copying into the GetYourGuide Supplier Portal.
