import type { Engine } from '@tsparticles/engine'

export const loaderFull = async (engine: Engine) => {
  const { loadFull } = await import('tsparticles')
  await loadFull(engine)
}

export const loaderSlim = async (engine: Engine) => {
  const { loadSlim } = await import('@tsparticles/slim')
  await loadSlim(engine)
}

export const loaderBasic = async (engine: Engine) => {
  const { loadBasic } = await import('@tsparticles/basic')
  await loadBasic(engine)
}

export const loadParticles = async (engine: Engine, mode: string) => {
  const loaderMap = new Map<string, (engine: Engine) => Promise<void>>([
    ['basic', loaderBasic],
    ['slim', loaderSlim],
    ['full', loaderFull]
  ])
  const loader = loaderMap.get(mode)
  if(loader) {
    await loader(engine)
  }
}
