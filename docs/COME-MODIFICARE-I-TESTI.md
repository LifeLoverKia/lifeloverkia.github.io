# Come modificare i testi del sito

## Il file da aprire

Per biografia, ricerca, formazione e attività accademiche, apri [dist/data/content.json](../dist/data/content.json). Il file contiene tre blocchi: `en` (inglese, lingua predefinita), `es` (spagnolo), `it` (italiano).

1. Accedi a GitHub con l'account LifeLoverKia e apri il file.
2. Premi la matita **Edit this file**.
3. Cerca il testo attuale (Ctrl+F) e modifica il contenuto tra le virgolette.
4. Controlla l'anteprima delle differenze e premi **Commit changes…**. Scrivi una breve descrizione e salva su `main`.
5. Nella scheda **Actions**, attendi la spunta verde di **Publish academic website**. Il sito viene ricostruito e pubblicato automaticamente; poi aggiorna la pagina del sito.

## Dove si trova ciascun testo

| Campo nel blocco della lingua | Testo visualizzato |
| --- | --- |
| `question` | Domanda principale sotto il nome |
| `intro` | Breve presentazione iniziale |
| `bio` | Biografia nella sezione Research |
| `research` → `title`, `description` | Le tre aree di ricerca |
| `background` | Formazione sotto la foto |
| `service` → prima voce | Postgraduate teaching |
| `service` → seconda e terza voce | Academic service & editorial work |
| `mentoring` | Research supervision & mentoring |
| `grant_reviews` | Grant & fellowship evaluation |
| `declarations` → `title`, `description`, `link_label`, `url` | Dichiarazioni sottoscritte, inclusa quella di New York |
| `cv_url` | Collegamento al CV |

Il vecchio campo `headings` non controlla più i titoli attuali delle sezioni. Titoli dei menu, etichette dei pulsanti e altre brevi scritte di interfaccia si trovano invece in `dist/assets/app.js`, negli oggetti `ui.en`, `ui.es`, `ui.it`. Per modificarli serve maggiore attenzione, perché è codice JavaScript.

## Piccole regole per il JSON

- Mantieni virgolette doppie, virgole, parentesi e nomi dei campi. Cambia solo il testo fra le virgolette.
- Apostrofi e lettere accentate sono consentiti. Se nel testo servono virgolette doppie, scrivi `\"`.
- Aggiorna separatamente le tre lingue: non viene eseguita una traduzione automatica.
- Non modificare direttamente `dist/index.html` o le altre pagine HTML generate: il successivo aggiornamento le ricrea dai dati e dai template.
- La sola modifica di `content.json` non richiede di aggiornare i numeri di versione degli asset.

Se la compilazione fallisce, l'ultima versione pubblicata resta disponibile. Puoi correggere il file o recuperare il testo precedente dalla cronologia del file su GitHub.

## Dati delle liste

I dati pubblicati sono in `dist/data/`: `publications.json`, `conferences.json`, `activities.json`, `projects.json`, `memberships.json`. I file Excel su Drive sono fonti di lavoro: modificarli non sincronizza automaticamente il sito. Quando aggiorniamo quei dati, manteniamo gli identificativi esistenti per conservare i collegamenti alle singole schede.

L'aspetto della home è definito in `template.html`; quello delle pagine dedicate in `list-template.html`; i colori e le dimensioni in `dist/assets/styles.css`.
