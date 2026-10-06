# ViewTransition in a ShadowRoot root

A React 19.3.0 root created on a ShadowRoot breaks after its first `<ViewTransition>` animation. The same app rendered into an element works.

```sh
pnpm install
pnpm dev
```

Open the page in a browser that supports view transitions and press Toggle twice.

- `?container=shadow` (the default) mounts the root on `host.attachShadow({ mode: 'open' })`. The first toggle logs `TypeError: Cannot read properties of undefined (reading 'viewTransitionName')`, the second logs `Should not already be working.`, and the box never hides again.
- `?container=element` mounts the root on the host element itself. Every toggle animates and commits.
