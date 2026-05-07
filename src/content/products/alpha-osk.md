---
title: Alpha-OSK
tagline: The smartest on-screen keyboard you'll never touch.
status: live
tier: featured
order: 1
repo: https://github.com/okstudio1/alpha-osk
downloadUrl: https://github.com/okstudio1/alpha-osk-releases/releases/latest
downloadLabel: Download for Windows
pricing: Free
pricingNote: Pro tier planned for cloud AI prediction and cross-device sync.
icon: ⌨️
category: Accessibility
tags: [Windows, Linux, Prediction, Accessibility, Open Source]
audience: People with motor disabilities, AAC users, kiosk operators, anyone who needs a real on-screen keyboard.
related: [macrovox, nimbus]
media:
  - type: screenshot
    alt: Alpha-OSK keyboard with prediction pills, default Dark theme
    caption: The default Dark theme with predictive text pills
    placeholder: true
  - type: gif
    alt: Word prediction in action, typing "hel" surfaces hello / help / held
    caption: Predictions update in real time as you type
    placeholder: true
  - type: gif
    alt: Swipe typing demo, drag across letters to type a whole word
    caption: Optional swipe typing for one-gesture words
    placeholder: true
  - type: screenshot
    alt: Alpha-OSK in Vaporwave theme with the model visualization dashboard open
    caption: 9 themes, plus a model visualization dashboard
    placeholder: true
installSnippets:
  - label: Windows
    lang: powershell
    code: |
      # Download and run the EV-signed installer
      iwr https://github.com/okstudio1/alpha-osk-releases/releases/latest/download/Alpha-OSK-Setup-latest.exe -OutFile setup.exe
      .\setup.exe
  - label: Linux (AppImage)
    lang: bash
    code: |
      # Grab the AppImage from the releases page
      wget https://github.com/okstudio1/alpha-osk-releases/releases/latest/download/Alpha-OSK-x86_64.AppImage
      chmod +x Alpha-OSK-x86_64.AppImage
      ./Alpha-OSK-x86_64.AppImage
whatsNew:
  version: "1.0"
  date: "2026-05-26"
  highlights:
    - Hybrid prediction engine (n-gram + PPM + fuzzy), no cloud, no GPU, no LLM required
    - Auto-detection of password fields (Windows UI Automation + Linux AT-SPI)
    - Compatibility mode for IDEs and remote-desktop sessions where suffix-only insertion would scramble
    - Swipe typing, drag across letters to type whole words, like Gboard
    - 9 themes, EV code-signed installer, weekly auto-update check
---

## What it does

A modern, AI-powered on-screen keyboard for Windows and Linux. Click virtual keys to type into any application, with word prediction that learns as you type, fuzzy spatial correction for shaky aim, and optional swipe typing.

## Features

- **Hybrid prediction engine**: n-gram + PPM + fuzzy spatial recognition. No GPU, no cloud, no LLM required.
- **Learns as you type**: every word, every phrase, every correction shapes the model on disk.
- **Privacy mode**: auto-detects password fields on Windows (UI Automation) and Linux (AT-SPI). Manual toggle in the title bar.
- **9 themes**: Dark, Light, Ocean, Forest, Amethyst, Vaporwave, Blackboard, Typewriter, Spaceship.
- **Vocabulary packs**: Medical, programming, academic, gaming, business, toggle from settings.
- **Swipe typing**: Drag across letters to type whole words, like Gboard.
- **Compatibility mode**: Auto-detects IDEs and remote-desktop sessions where suffix-only insertion would scramble.
- **Code-signed installer**: EV certificate (OK Studio Inc.). UIAccess so it works above elevated apps.

## Built for

People with motor disabilities (muscular dystrophy, ALS, cerebral palsy, spinal cord injury), accessibility professionals deploying for clients, and anyone who needs a real on-screen keyboard instead of the bare-bones one Windows ships with.
