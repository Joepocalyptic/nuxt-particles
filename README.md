# Nuxt Particles

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Run lightweight, heavily customizable particle simulations in your Nuxt project with tsParticles.

- [📖 &nbsp;Documentation](https://nuxt-particles.joeypereira.dev)
- [✨ &nbsp;Release Notes](/CHANGELOG.md)
- [🏀 Online playground](https://stackblitz.com/github/Joepocalyptic/nuxt-particles?file=playground%2Fapp.vue)

## Features

- Built for **Nuxt 3**
- **Lazy loading** by default
- Built-in full, slim, and basic bundles, or
- Use a custom bundle for extra performance
- All with just **one component**!

## Quick Setup

1. Add the `nuxt-particles` dependency to your project

```bash
# Using pnpm
pnpm add -D nuxt-particles

# Using yarn
yarn add --dev nuxt-particles

# Using npm
npm install --save-dev nuxt-particles
```

2. Add `nuxt-particles` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'nuxt-particles'
  ]
})
```

That's it! You can now use the &lt;NuxtParticles&gt; component in your application! ✨

Read the [documentation](https://nuxt-particles.joeypereira.dev) for more information, including
configuration and optimization options. Documentation on how to configure the particles themselves
is available on [tsparticles's website](https://particles.js.org/).

Example:

```vue
<template>
  <NuxtParticles
    id="tsparticles"
    url="/path/to/particles.json"
    @load="onLoad"
  ></NuxtParticles>
  
  <!-- or -->
  
  <NuxtParticles
    id="tsparticles"
    :options="options"
    @load="onLoad"
  ></NuxtParticles>
</template>

<script setup lang="ts">
import type { Container } from '@tsparticles/engine'

const options = {
  // See https://particles.js.org/docs/interfaces/tsParticles_Engine.Options_Interfaces_IOptions.IOptions.html
}

const onLoad = (container: Container) => {
  // Do something with the container
  container.pause()
  setTimeout(() => container.play(), 2000)
}
</script>
```

## Development

```bash
# Install dependencies
pnpm install

# Generate type stubs
pnpm run dev:prepare

# Develop with the playground
pnpm run dev

# Build the playground
pnpm run dev:build

# Run ESLint
pnpm run lint

# Release new version
pnpm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-particles/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-particles

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-particles.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-particles

[license-src]: https://img.shields.io/npm/l/nuxt-particles.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-particles

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
