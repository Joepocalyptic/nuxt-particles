<template>
  <div :id="id" />
</template>

<script setup lang="ts">
import { onMounted, ref, onUnmounted } from 'vue'
import { tsParticles } from 'tsparticles-engine'
import {useRuntimeConfig, useState} from '#app'
import type {
  ISourceOptions as ParticlesOptions,
  Container as ParticlesContainer
} from 'tsparticles-engine'
import {loadParticles} from '../lib/loaders'

const particlesLoaded = useState('__nuxt_particles_loaded', () => false)
const container = ref<ParticlesContainer | undefined>(undefined)
const { mode, lazy } = useRuntimeConfig().public.particles

const props = defineProps<{
  id: string,
  options?: ParticlesOptions,
  url?: string
}>()

const emit = defineEmits<{
  load: [container: ParticlesContainer]
}>()

onMounted(async () => {
  if(lazy && mode !== 'custom' && !particlesLoaded.value) {
    tsParticles.init()
    await loadParticles(tsParticles, mode)
    particlesLoaded.value = true
  }
  const particlesContainer = await tsParticles.load({
    id: props.id,
    options: props.options,
    url: props.url
  })

  if(particlesContainer) {
    emit('load', particlesContainer)
    container.value = particlesContainer
  }
})

onUnmounted(() => {
  if (!container.value) {
    return
  }
  container.value.destroy()
})
</script>
