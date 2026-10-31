# Updating the site on request

1. Read the current canonical engagement workbook and newest CV without publications in Drive. Keep original documents and private material in Drive.
2. Compare the current public ORCID works of every type, Semantic Scholar records and publisher/Crossref metadata. Use Google Scholar if accessible; otherwise state the coverage limit. Paginate where required.
3. Deduplicate by lowercase DOI. Without DOI compare normalized title, authors, event and year; preserve stable ORCID IDs. Keep posters, presentations, abstracts, chapters, preprints and final articles as distinct output types where the evidence supports this. Link distinct versions rather than merging them.
4. Compare against the JSON records by stable `id`. Update in place. Preserve existing curated order, explicit corrections and user translations. Do not delete absent external records automatically. Check online-first versus issue dates before inserting a new publication; do not rebuild the sequence from API ordering.
5. A source edited in one language is enough for an assisted update. Read it, reconcile factual changes, then prepare EN/ES/IT fields in the JSON. The translation workflow is performed on request, not an automatic continuous sync. Keep publication titles in their original language.
6. Store ISO dates in the data and display full dates as DD/MM/YYYY. Never invent a day when only a year or month is known.
7. Keep internal notes, unresolved source conflicts, personal contacts and grant-application strategy outside the repository. Retain the private maintenance record separately in Drive or the user's private working documents.
8. Run `python scripts/build.py`, check the rendered translations, links, filters, selections, exports and print lists, then prepare a reviewable branch/PR. GitHub Pages remains disabled until the owner approves publication.

Suggested source management: continue using the existing bilingual engagement workbook as the canonical activity source. Updating only one of its languages is acceptable; regenerate the remaining site translations after reviewing that change. Research outputs and biography can be refreshed from ORCID and the current CV. Consolidating all categories into a single master workbook can be a later explicit decision; this draft does not restructure the user's source files.


## CV download

The public CV button points to the current PDF in Google Drive. No CV PDF is committed here. Each activation adds a new timestamp query parameter to discourage reuse of a previously cached download URL. Drive controls the final response and its cache headers.

To keep the destination valid, upload a new version of the existing Drive PDF using **File information → Manage versions → Upload new version**. Keeping the filename alone is insufficient: a newly uploaded separate file receives a different ID. If the file ID changes, update `cv_url` in every language in `dist/data/content.json` and the fallback link in `template.html`. The file must remain downloadable by anyone with its link. Do not expose account credentials or add a private Drive API key to the static site.

## Memberships and source reconciliation

`dist/data/memberships.json` stores public society/network names, roles, start dates and official links. LASC is labelled as an emerging initiative, not an established legal society.

The updated activity register includes Penne Amiche della Scienza and its official volunteer list (expand 2025/2026). Existing verified corrections are preserved: the IIC talk is dated 22/10/2026 despite an older 2025 date in the spreadsheet. The AI & Law talk is shown at year precision because its exact date/location remains mixed with an ICON poster in the source; the Senate contribution is shown as 2020–2021 without invented dates. The 2017 school course and the teaching/service summaries are based on the CIFAR narrative materials and CV. Missing evidence links can be added later; the site does not imply independent verification of every self-reported activity.

For EEG101, 24/09/2025–23/09/2029 are explicitly Action dates; the description records WG1/WG2/WG3 membership from 2026. EEGManyAnalysts uses year precision for participation because the project register flags the exact start date as unconfirmed. Do not publish private notes or source application documents.
