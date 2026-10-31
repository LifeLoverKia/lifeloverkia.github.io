# Chiara Saracini — academic website

Review draft, prepared 30/10/2026. Not published. English is the default; use the fixed English · Español · Italiano selector. Publication titles retain their original language.

## GitHub repository

`LifeLoverKia/lifeloverkia.github.io`. The owner created this private repository. The initial site is proposed on `site/academic-draft` for review; no deployment workflow is included.

## Structure

- `dist/index.html`: generated page ready for static hosting.
- `dist/assets/`: CSS, JavaScript and the portrait used by the site.
- `dist/data/publications.json`: bibliographic records with stable IDs, output types, curated order, original titles, DOI, ORCID IDs and available publication dates.
- `dist/data/activities.json`: one activity per record, with EN/ES/IT fields.
- `dist/data/projects.json`: projects, dates and translated descriptions.
- `dist/data/content.json`: headings, biography, research, teaching and academic service.
- `template.html`: page structure.
- `scripts/build.py`: rebuilds the static page and standalone review copy, using Python's standard library.
- `docs/UPDATES.md`: maintenance workflow.
- `Chiara-Saracini-anteprima.html`: generated locally by the build script (not tracked); self-contained offline review copy, to open directly in a browser. It contains the same public-facing data and portrait as the site.

Build: `python scripts/build.py`. Preview: serve `dist/` with a standard static web server. GitHub Pages can later publish `dist/` through an approved Actions workflow. No deployment workflow is enabled in this draft.

## Design review

The top bar opens three palette choices and five typography choices. The initial pair is Trebuchet MS + Arial with a pale lilac background. Indigo and violet rose are alternatives. Links default to #C60070; #FF0090 is selectable. Comfortaa and Pangolin are bundled locally under the SIL Open Font License; system-font options use installed fonts and documented fallbacks. Browser-only preferences do not update the repository.

## Lists, reuse and printing

Search and filters operate on the full dataset. Six records are initially shown; Show all reveals the rest. Select filtered records selects all matching entries, including those outside the initial six. CSV and Print / PDF use the selected matching records, or all matching records when none are selected. Project printing includes all four documented projects. Save as PDF is provided by the browser's print dialog.

## Coverage and review limits

55 distinct research outputs are included: the 54 curated Notion records plus one deduplicated ORCID preprint linked to its final article. The existing Notion record sequence is retained; no API sorting replaces it. The 37 DOI-bearing records already present were checked successfully through Crossref on this run. The additional preprint DOI and author list come from the public ORCID work record. ORCID had 43 work groups, including duplicate deposited versions; Semantic Scholar returned 40 records, without a next page. Neither raw count is a publication total. Fifteen conference contributions without DOI are retained. Types previously corrected from journal articles to conference abstracts are preserved.

Live Google Scholar was inaccessible through the web tool. The saved Google Scholar PDF dated 27/10/2026 was consulted as a historical comparison, not a live feed. The draft is not an independent audit of every DOI-less record's event or output subtype.

28 activities and four historical projects are included. The original workbook contains 30 activity rows; two unresolved rows remain excluded. The corrected IIC date is 22/10/2026. CV private details, internal notes, application strategy and source documents are excluded from this package.

The site uses no analytics, external font requests, accounts or automatic synchronization. The noindex directive marks this as a review draft; it is not access control. Nothing has been deployed.

## Validation

JavaScript syntax checked. Browser checks covered language switching, filtering, selection, print-list creation, and rendered desktop layout. CSS includes phone-width breakpoints; a physical/mobile browser test remains part of final design review. PDF pagination can vary by browser and selected paper settings.

All source content and the portrait remain the author's. No licence to redistribute the portrait or academic texts is granted by this package.
