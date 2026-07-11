# OKStudio Website

A responsive, single-page portfolio site for OKStudio, a disability-led software studio building open-source, accessibility-first tools by and for people with disabilities. Founded by Owen Kent, a wheelchair user and disabled software engineer.

The site is built to be accessible itself: screen-reader-first, keyboard-only, WCAG 2.2 AA target, with reduced-motion and high-contrast support.

GitHub: https://github.com/owenpkent

## Focus Areas

- Accessibility-first software, by and for people with disabilities
- Adaptive gaming and alternative input systems
- Voice, MIDI, and automation tooling
- Human-computer interaction (HCI)
- Open source

## Featured Work

### Coverage Compass

A free, open-source, browser-only tool that helps disabled Coloradans keep their Medicaid under Colorado's 2027 work-reporting rules. Reads and explains Medicaid letters on your device (live demo), with document form-filling in preview. English and Spanish, built to WCAG 2.2 AA, in partnership with the Colorado Cross-Disability Coalition (CCDC).

Live demo: https://coverage-compass-6ky.pages.dev

### Project Nimbus

Accessibility-focused virtual controller that transforms mouse input into virtual joystick commands (via vJoy). Designed for adaptive gaming and alternative control schemes, including UAV/rover control workflows.

Repo: https://github.com/owenpkent/Project-Nimbus

### Octavium

An accessibility-first, mouse-driven virtual MIDI keyboard for making music without a physical keyboard. Built with PySide6, mido, and pygame.

Repo: https://github.com/owenpkent/Octavium

### MacroVox

Voice-controlled macro executor for Windows. Speak commands, execute keystrokes via AutoHotkey.

Repo: https://github.com/owenpkent/MacroVox

## Tech Stack

- HTML
- CSS
- JavaScript

## Local Development

This is a static site; you can open `index.html` directly.

If you prefer a local server (recommended for consistent asset loading), run one in this folder, for example:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000

## File Structure

```
okstudio-website/
├── index.html
├── styles.css
├── script.js
├── site.webmanifest        # PWA manifest + icons
├── images/
│   ├── okstudio-icon.svg    # logo mark (favicon + nav)
│   ├── favicon.ico          # multi-size favicon
│   ├── apple-touch-icon.png
│   └── okstudio-icon-*.png  # app-icon sizes
└── README.md
```

Brand assets (full logo set, guidelines) live in the private `OKStudio-Company-Info` repo
under `branding/`.

## Deployment

This site can be deployed on any static host:

- GitHub Pages
- Netlify
- Vercel

## License

MIT