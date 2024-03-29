import {defineNuxtPlugin, useRuntimeConfig} from '#app'
import { loadParticles } from '../lib/loaders'
import { tsParticles } from '@tsparticles/engine'

export default defineNuxtPlugin(async (nuxtApp) => {
  if(import.meta.server) { return }

  const runtimeConfig = useRuntimeConfig()
  const { mode } = runtimeConfig.public.particles

  await loadParticles(tsParticles, mode)
})
