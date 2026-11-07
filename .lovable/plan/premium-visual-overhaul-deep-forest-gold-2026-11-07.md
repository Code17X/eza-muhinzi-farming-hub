# Premium visual overhaul — Deep forest + gold

Restyle every page (homepage, sign-in/sign-up, dashboard, diagnose, livestock, weather, prices, history) with a premium, lightweight look. No new libraries, no changes to features, sign-in, or data.

## Look and feel
- Palette: deep forest (#0f2a1d), forest green (#28543a), warm gold accent (#e9c46a), cream background (#f7f5ec).
- Typography: a refined serif display font for headings paired with a clean sans for body text, with a clear size hierarchy.
- Surfaces: soft cream cards, thin hairline borders, layered soft shadows, consistent rounded corners.
- Subtle frosted-glass header bars on the homepage and in the farmer area.
- Gold used sparingly: primary buttons, active nav links, key numbers (prices, weather temps).

## Per area
- Homepage: dark forest hero with soft gold glow and fine grain texture (CSS only), refined feature cards with hover lift, polished footer.
- Sign-in / sign-up: centered glass card over a forest backdrop, clearer fields, gold focus rings, friendlier error/success messages.
- Dashboard: welcome banner, tool cards with icon tiles and gentle hover motion, active-page highlight in the top navigation.
- Tools (diagnose, livestock, weather, prices, history): consistent page headers, unified card style, nicer loading/empty/error states, readable price and weather figures.

## Motion
- CSS-only fades and hover lifts, respecting "reduce motion" settings.

## Technical details
- Update color/shadow/radius tokens in `src/styles.css` and the shared class styles (`src/styles/site.css` and app classes) rather than rewriting component logic.
- Load fonts via `<link>` in `__root.tsx`; update `theme-color` and manifest colors to the new forest tone.
- Small markup tweaks only where needed for styling hooks (e.g. active nav state via `activeProps`).
- Verify with screenshots on desktop and phone for each page.

## Performance notes
- Imported site CSS (~80 KB plus captured CSS) is large; I'll trim unused rules where safe.
- Prices page fetches in an effect each visit; can be cached later if you want (not part of this change).
