# Academic portfolio — Kazi Samin Yasar Alam

A single static page for PhD applications. Plain HTML, CSS and ~50 lines of vanilla
JavaScript; no build step, no dependencies. Every word on it comes from the two CVs
(`CV_Systems.pdf` and `CV_NLP.pdf`), merged into one page that covers both directions.

## Files

```
index.html        the whole page
css/tokens.css    design tokens (colour, type, spacing, radii, layout) — light and dark
css/bundle.css    component classes from the Research Portfolio design system
css/site.css      the few additions this site needs (skip link, facts block, print)
js/main.js        portrait swap-in + nav scroll-spy
assets/           portrait.jpg, CV.pdf, og.jpg go here
```

## Before you send the link

1. `assets/CV.pdf` — drop in the CV you want visitors to download. The header button,
   the hero button and the contact panel all point at this one file.
2. `assets/portrait.jpg` — a 4:5 portrait. Until it exists the hero shows a serif
   monogram; no code change is needed once the file is there.
3. `assets/og.jpg` — 1200×630, used for link previews in email and chat.
4. If the site will not live at `https://syk08.github.io/`, update the `canonical`,
   `og:url` and the two image URLs in `<head>`.

The preprint (ResearchGate), GitHub and LinkedIn URLs are already wired in — they were
taken from the hyperlinks embedded in the CV PDFs.

## Page order

Hero and at-a-glance strip, then: 01 test scores, 02 research interests,
03 publications, 04 research experience, 05 projects, 06 experience and education,
07 skills and service, contact.

The test-score panels are meters: one value against a fixed ceiling, brand fill on a
lighter step of the same hue, every value also written out in text so nothing depends
on colour. The two panels never share an axis — each states its own scale under the
bars (GRE sections run 130–170, IELTS bands 0–9), and analytical writing sits below a
rule because it is scored 0–6.

## Run it locally

```
python -m http.server 8000
```

Then open http://localhost:8000.

## Deploy on GitHub Pages

Push to a repository, then Settings → Pages → Build from branch → `main` / root.
For the address `https://syk08.github.io`, name the repository `syk08.github.io`.
`.nojekyll` is present so Pages serves the files as they are.

## Design

Built on the "Research Portfolio" design system: editorial and quiet, warm paper,
Newsreader for headings, IBM Plex Sans for text, IBM Plex Mono for metadata, one navy
and one oxblood. Do not hard-code colours or sizes — add tokens to `css/tokens.css`
instead.

The page is pinned to the light (paper) theme with `data-theme="light"` on `<html>`,
so every reader sees the same thing regardless of their system setting. The dark
tokens are still in `css/tokens.css`; delete that attribute to follow
`prefers-color-scheme` again.
