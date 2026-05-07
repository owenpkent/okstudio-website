# Product media drop-zone

Drop screenshots and GIFs in this folder, then update the `media` array in
the corresponding `src/content/products/<product>.md` to reference them.

## Naming convention

`<product-slug>-<n>.png` for screenshots, `<product-slug>-<n>.gif` for GIFs.

Examples:
- `alpha-osk-1.png`, main keyboard, default theme
- `alpha-osk-2.gif`, prediction-pill demo
- `alpha-osk-3.gif`, swipe-typing demo
- `alpha-osk-4.png`, vaporwave theme + visualization dashboard

## How to wire one in

In `src/content/products/alpha-osk.md`, change:

```yaml
- type: gif
  alt: Word prediction in action, typing "hel" surfaces hello / help / held
  caption: Predictions update in real time as you type
  placeholder: true
```

to:

```yaml
- type: gif
  src: /screenshots/alpha-osk-2.gif
  alt: Word prediction in action, typing "hel" surfaces hello / help / held
  caption: Predictions update in real time as you type
```

(Drop the `placeholder: true` line and add `src:` pointing at the file.)

## Recommended dimensions

- Screenshots: 1600×1000 (16:10), PNG, < 500 KB
- GIFs: 800×500 (16:10), < 2 MB, ~10–15s loop, optimized via gifski / ezgif
- Videos: MP4 H.264, 1280×800, < 5 MB
