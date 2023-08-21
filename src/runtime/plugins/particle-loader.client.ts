import {defineNuxtPlugin, useRuntimeConfig} from '#app'
import { loadParticles } from '../lib/loaders'
import { tsParticles} from 'tsparticles-engine'

export default defineNuxtPlugin(async (nuxtApp) => {
  if(process.server) { return }

  const runtimeConfig = useRuntimeConfig()
  const { mode } = runtimeConfig.public.particles

  if (mode === 'custom') {
    return
  }

  await loadParticles(tsParticles, mode)
})
