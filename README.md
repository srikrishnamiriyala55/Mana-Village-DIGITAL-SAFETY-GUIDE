# Mana Village Digital Safety Guide

A frontend-only React + Vite website in English and Telugu for Venkatapuram village, G. Konduru Mandal, NTR district, Andhra Pradesh. Created for the college Community Service Project **Our Village – On the Digital Path to Empowerment and Safety on Cybercrimes**.

## Run locally

Install Node.js 22.12+ (Node 24 also works), then open a terminal in this directory:

```sh
npm ci
npm run dev
```

Open the printed localhost URL. No account, database, environment secrets or backend is needed.

```sh
npm run check      # Check bilingual content, counts and quiz attempt integrity
npm run build      # Create the production website in dist/
npm run preview    # Serve the production build locally
```

Use `localhost`, rather than opening `index.html` as a file. PWA features require HTTPS in production or a localhost origin. Service workers are deliberately disabled in the development server; use the production preview to test offline behaviour.

## What is included

- Nine main pages, individual lesson routes, a printable learning summary and a helpful not-found page.
- Eight guides with numbered steps, illustrations, comprehension questions, bookmarks and completion controls.
- Eight fictional scam scenarios, feedback for every choice, a follow-up branch and safer next steps.
- Rule-based suspicious-request checklist. No message uploads or supposed AI detection.
- Fictional UPI practice with no payment connection, payable QR code, PIN or OTP entry.
- Twenty bilingual quiz questions; ten per attempt, shuffled question and answer order, explanations, saved progress and revision links.
- Search over English and Telugu guides/scenarios and topic filters.
- Language switching without resetting the current exercise; three text sizes; keyboard focus; skip link; reduced-motion support; mobile navigation.
- Optional browser speech. A suitable voice must exist on the device; unavailable voices are clearly explained.
- Local Telugu fonts, original lightweight SVG village illustration, manifest, generated service worker, cached core lessons/scenarios/quiz and offline indicator.
- Official resource directory and videos loaded only on request.

Only five kinds of values are stored in localStorage under the `mana-` prefix: language, text size, completed lesson IDs, bookmark IDs and quiz progress. Search terms, checklist answers and scenario choices are not persisted. **Reset my progress** removes learning records while preserving language and text-size preferences. To remove preferences too, clear this site's browser storage.

## Folder structure

```text
src/
  main.jsx                  Routes, reusable interface components and local state
  styles.css                Responsive design and shared CSS variables
  components/Village.jsx    Original SVG illustration
  data/
    translations.js         Shared bilingual interface labels and pair() helper
    guides.js               Eight editable guides
    scenarios.js            Eight fictional scenarios and choice feedback
    quiz.js                 Quiz bank and attempt generation
    resources.js            Official links, video configuration, help and gallery
public/
  icon.svg                  App icon
  manifest.webmanifest      PWA metadata
scripts/check-content.mjs   Content integrity checks
vite.config.js              Build configuration and generated offline cache
.openai/hosting.json         Sites identity and static output directory
dist/                       Generated production files, including sw.js
```

## Update English and Telugu

Content is stored in separate data files using `pair('English text', 'తెలుగు పాఠ్యం')`. Keep both sides complete. Retain stable IDs so residents' saved lessons continue to work. Use familiar technical labels when they match phone screens. Test with `npm run check` and `npm run build`, and ask a fluent local Telugu speaker to review wording before a community rollout.

For a guide, edit its title, introduction, numbered steps, caution, question, options and explanation in `guides.js`. The first comprehension option is correct. Each scenario has three choices and matching feedback entries, with the first choice representing independent verification. The quiz bank combines the eight guide questions with twelve additional questions; `correct` points to the correct option before shuffling. The third option lets learners say they need revision.

## Review safety content and resource links

Official sources were reviewed **5 November 2026**:

- NPCI fraud awareness: https://www.npci.org.in/fraud-awareness
- NPCI UPI FAQs: https://www.npci.org.in/what-we-do/upi/faqs
- Google Pay safety guidance: https://support.google.com/pay/india/answer/9851787/protecting-against-fraud-or-unauthorised-activity?hl=en-IN
- CERT-In phone guidance: https://www.cert-in.org.in/PDF/ISA_Booklet.pdf
- Ministry of Home Affairs / PIB, financial fraud helpline 1930: https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=1814120&lang=2&reg=48
- National Cybercrime Reporting Portal: https://www.cybercrime.gov.in/
- MyGov video source listing: https://www.mygov.in/staysafeonline
- National Portal of India: https://www.india.gov.in/
- DigiLocker: https://www.digilocker.gov.in/

Keep `sourceOrganisation`, `sourceUrl`, `reviewed` and `topic` metadata with safety content. Before updating a claim or reporting number, open the official source, check that it supports the description and change the review date only after actually reviewing. The visible review label is in `translations.js`; update that and the content metadata together. Do not use a moving “verified today” label. Some official sites require JavaScript and may be temporarily unavailable.

Edit the services and videos arrays in `resources.js`. Each video needs an authentic source listing and a verified YouTube ID. Spoken language and duration could not be independently verified for the included MyGov-listed videos; language is `null`, duration is omitted, and Telugu/English filters show an honest empty state. Playback itself may be restricted or unavailable. Add `language: 'te'` or `'en'` only after verifying the actual audio. Do not invent thumbnails, durations or government endorsements. Additional video topics can be enabled through the existing filter keys.

## Add actual project photographs

The gallery is hidden while `gallery` is empty. Obtain permission from people shown, remove unnecessary identifying information and optimise photos for mobile. Put real team photographs in `public/photos/`, then add entries in `resources.js`:

```js
export const gallery = [
  {
    src: "/photos/our-session.webp",
    alt: p("Describe the actual photograph", "అసలు చిత్రాన్ని వివరించండి"),
    caption: p("Accurate activity caption", "కార్యక్రమం గురించి సరైన వివరణ"),
  },
];
```

Do not label stock photographs as project activities.

## Offline and installation

The build creates `dist/sw.js` with a versioned list of the actual generated assets. On the first complete production visit it caches the app shell, local fonts, guide data, scenarios and quiz. After installation finishes, navigation works without the network. Third-party websites and videos remain online-only. Browser settings, private mode, cleared storage or evicted cache can prevent persistence. The app explains storage failures. Installation is offered through supported browsers' Install app / Add to Home Screen controls; support varies by browser and platform.

The manifest includes original PNG icons at 192×192 and 512×512. Their optional regeneration script is `scripts/create-icons.py` (requires Pillow). The SVG favicon stays lightweight.

## Deploy

Deploy the contents of `dist/` to an HTTPS static host. Configure **SPA fallback**: unknown local paths must serve `/index.html`, while existing asset files remain directly accessible. Vite preview provides this locally. For Cloudflare Pages use build command `npm run build` and output directory `dist`; for Netlify add a `_redirects` file with `/* /index.html 200`; for other hosts use the equivalent rewrite. Serve `sw.js` without a long-lived immutable cache, and use long-lived caching only for hashed assets.

The supplied `.openai/hosting.json` binds this checkout to its private Sites project. Preserve that ID when updating the same Site. Sharing a private deployment with villagers requires a deliberate audience change; the source can also be deployed to your chosen public static host.

## Validation and limits

Run the content check and production build after edits. Manual checks should cover desktop and 320px mobile layouts, both languages, large text, keyboard navigation, search, topic filters, both comprehension outcomes, bookmarks, completion, all scenario choices, UPI checks, all checklist states, the ten-question quiz and retry, reload/resume, summary/printing, reset, unknown URLs and offline production navigation. Offline testing must use the production build after the service worker is installed.

The website does not collect confidential information or provide bank, police, government or accredited certification services. Its checklist is educational and cannot conclusively classify a request. External links and numbers can change and require maintenance. Recovery of money is never promised. No survey results, endorsements, impact statistics or fieldwork photographs have been invented.

Dependencies retain their respective licences. Noto Sans Telugu is provided by Fontsource under the font's SIL Open Font License; see `node_modules/@fontsource/noto-sans-telugu/LICENSE`.
