# Conference contributions

The website keeps conference presentations separate from bibliographic publications. One contribution is one work at one event; it can link to an existing published abstract, paper or proceedings record without creating another publication. Co-authorship does not imply attendance or presenting.

The editable master is `Conference_contributions.xlsx` in Academic portfolio (Drive file ID `1tPE0ALXH_h4pQUqET24W97c1YHvNFGVk`). Its Guide sheet documents fields and unresolved metadata. The website uses the reviewed public subset in `dist/data/conferences.json`; Source, Private notes and Publish fields are excluded. No automatic Drive synchronization is configured.

The initial 32 records reconcile the supplied publication-list TeX/PDF, 2024/2025 teaching-evaluation documents and existing outreach register. Original titles are preserved. Unknown dates, coauthors and formats remain unspecified. Published outputs remain in `publications.json` and are connected by ID.

Invited talks, public engagement and policy discussions remain in the outreach register and `activities.json`. Three former aggregate scientific-conference activity records were replaced on the website by individual contributions; original spreadsheet rows remain for historical reference.

Run `python3 scripts/build.py` after editing data, templates or assets. Verify compact previews, archive links, role badges and all three languages before publishing.
