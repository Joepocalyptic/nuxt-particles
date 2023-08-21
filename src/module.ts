import {defineNuxtModule, addPlugin, createResolver, addComponent} from '@nuxt/kit'
import defu from "defu";

export interface ModuleOptions {
  mode: 'full' | 'slim' | 'basic' | 'custom'
  lazy: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-particles',
    configKey: 'particles'
  },
  // Default configuration options of the Nuxt module
  defaults: {
    mode: 'full',
    lazy: true
  },
  setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)

    if(!options.lazy) {
      addPlugin(resolver.resolve('./runtime/plugins/particle-loader.client'))
    }

    nuxt.options.runtimeConfig.public = defu(nuxt.options.runtimeConfig.public || {}, {
      particles: {
        mode: options.mode,
        lazy: options.lazy
      }
    })

    // noinspection JSIgnoredPromiseFromCall
    addComponent({
      name: 'NuxtParticles',
      filePath: resolver.resolve('./runtime/components/NuxtParticles.vue')
    })
  }
})
