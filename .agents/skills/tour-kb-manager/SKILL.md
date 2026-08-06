---
name: tour-kb-manager
description: Manage, search, validate, and update tour listings, company profile, and operational FAQs in the Beta Samos knowledge base.
---

# Tour Knowledge Base Manager Skill

Use this skill when adding new tours to the catalog, updating pricing/itineraries, or auditing knowledge base integrity.

## Structure & Responsibilities

1. **Catalog Maintenance (`knowledge_base/tours_catalog/`)**:
   - Ensure every tour file follows the standard schema: Summary (Duration, Price, Group size), Short Description, Highlights, Full Itinerary, Inclusions/Exclusions, Participant Requirements.

2. **Validation**:
   - Run the validation tool to check for missing fields or compliance issues:
     ```powershell
     powershell.exe -ExecutionPolicy Bypass -File "scripts/validate_kb.ps1"
     ```

3. **Updating Knowledge**:
   - Keep `company_profile.md` and `operations_and_faq.md` updated when policies, hours, or contact details change.
