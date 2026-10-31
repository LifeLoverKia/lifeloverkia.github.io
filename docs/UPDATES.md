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
