# Maintenance Notes

Last updated: 2026-07-11

This file documents everything that needs updating when adding, editing, or removing an AI VTuber from the directory. The same data lives in many places. Miss one and things go out of sync.

---

## Adding a New AI VTuber

### 1. Image asset

- Add a `.webp` image to the repo root (e.g., `newname.webp`)
- This image is referenced by: the HTML card, the JSON-LD schema, the API JSON, the dataset JSON, both READMEs, and llms.txt

### 2. index.html (aivtuber.tv repo)

- **Directory card** (~line 600-860): Add a new `<a>` card inside the `directory-grid` div. Copy an existing card as a template. Fields: name, developer, description, tags, Twitch link, image src.
- **ItemList + FictionalCharacter schema** (in `<head>`, after FAQPage): Add a new `ListItem` entry with position number, name, description, url, image, and sameAs array.
- **FAQPage schema** (in `<head>`): If the "Who are the best AI VTubers to watch?" answer should include them, add their name and developer to that answer text.
- **Visible FAQ section** (in `<body>`): Same. Update the "Who are the best AI VTubers to watch?" answer if the list should include them.
- **Meta description** (line 8-9): Only if they're significant enough to name in the meta description.
- **OG/Twitter description** (lines 17-18, 28-29): Same, only if significant.

### 3. API (aivtuber.tv repo, /api/ folder)

- **api/index.json**: Add two new routes to the `routes` array, one for the AI and one for the developer.
- **api/{ai-slug}/index.json**: Create new folder and file. Fields: name, slug, type, description, tags, image, twitch, api_url, developer, developer_api_url, sameAs.
- **api/{dev-slug}/index.json**: Create new folder and file. Fields: name, slug, type, description, tags, image, twitch, api_url, ai, ai_api_url, sameAs.
- Slug rules: lowercase, hyphens for spaces, remove "AI " prefix (e.g., "AI Rina" becomes "rina"), "&" becomes "-and-".

### 4. Dataset (aivtuber.tv repo, /dataset/ folder)

- **ai-vtubers-2026.json**: Add a new entry to the JSON array. Fields: name, developer, type, species, gender, hair, eyes, model_type, tags, twitch, youtube, twitter, tiktok, instagram, bluesky, discord_247, local_ai, featured, status.
- **ai-vtubers-2026.csv**: Add a new row. Tags are pipe-delimited (e.g., `3D|Gaming|Chaotic`). Null fields are empty strings. Booleans are `true`/`false`.
- **README.md**: Update the entry count if mentioned (currently says "15 entries").

### 5. llms.txt (aivtuber.tv repo root)

- **AI VTuber Directory section** (~line 24-40): Add a new line: `- Name (Developer): https://twitch-url - tags, short description`

### 6. README.md (aivtuber.tv repo)

- **AI VTuber Directory table** (~line 110-125): Add a new row with image, name, developer, vibe, tags, and Twitch link.

### 7. README.md (AI-VTUBER-DIRECTORY repo)

- **AI VTuber Directory table**: Same row as above, but image paths use `images/` prefix instead of `https://aivtuber.tv/`.
- Copy the image to `AI-VTUBER-DIRECTORY/images/` as well.

### 8. sitemap.xml (aivtuber.tv repo root)

- Update `<lastmod>` to the current date.

### 9. Commit and push

- Commit to aivtuber.tv repo.
- Commit to AI-VTUBER-DIRECTORY repo (if README was updated).

---

## Editing an Existing AI VTuber

Same files as above. Search for the VTuber's name across the repo to find all occurrences:

```
grep -r "VTuberName" .
```

Common things to update:
- Description text (index.html card, API JSON, dataset JSON/CSV, README table, llms.txt)
- Tags (same five places)
- Social links (index.html card, API JSON sameAs, dataset JSON/CSV, README table)
- Twitch URL (everywhere)
- Image (replace the .webp file, or update the src/path if renamed)
- Developer name (affects cross-references in API JSON files)

If changing the Twitch URL, also check:
- index.html social links section (for Moonlash/Khaos specifically)
- Contact section (if it's Khaos)
- Footer copyright link
- Schema.org sameAs arrays

---

## Removing an AI VTuber

Reverse of adding. Remove from all the same files. Move their name to the "currently inactive" list in:
- index.html (comment in HTML near the directory grid)
- README.md (both repos)
- llms.txt

---

## File Reference

| File | Repo | What's in it |
| --- | --- | --- |
| `index.html` | aivtuber.tv | Directory cards, all schema.org JSON-LD, FAQ, meta tags |
| `style.css` | aivtuber.tv | All CSS (no streamer data, just styling) |
| `llms.txt` | aivtuber.tv | Plain-text summary for AI crawlers |
| `robots.txt` | aivtuber.tv | Crawler directives, sitemap + llms.txt reference |
| `sitemap.xml` | aivtuber.tv | Last modified date for search engines |
| `api/index.json` | aivtuber.tv | Master API route list |
| `api/{slug}/index.json` | aivtuber.tv | Per-VTuber and per-developer JSON |
| `dataset/ai-vtubers-2026.json` | aivtuber.tv | Full dataset (JSON) |
| `dataset/ai-vtubers-2026.csv` | aivtuber.tv | Full dataset (CSV) |
| `dataset/README.md` | aivtuber.tv | Dataset schema docs |
| `README.md` | aivtuber.tv | Repo README with directory table |
| `README.md` | AI-VTUBER-DIRECTORY | Same README, images/ paths |
| `images/*.webp` | AI-VTUBER-DIRECTORY | Image copies for the directory repo |
| `*.webp` | aivtuber.tv | Image assets (root) |

---

## Other Future Work Ideas

- Build a script or template that generates API JSON, dataset JSON, dataset CSV, and llms.txt entries from a single source of truth (a single JSON file or spreadsheet). Right now everything is manual.
- Add a `.github/workflow` that validates JSON files on push (catch syntax errors early).
- Consider adding Twitch API integration to show live status on the page (separate from the static data).
- The AI-VTUBER-DIRECTORY repo is a snapshot. It does not have the API, dataset, or index.html. Only the README and images. If the directory README gets out of sync, it needs a manual update.
- llms.txt and the Dataset schema both reference the dataset. If the dataset changes, update the `dateModified` field in the Dataset schema (in index.html head).
