export interface EnvConfig {
  baseUrl: string
}

const envConfigs: Record<string, EnvConfig> = {
  dev:        { baseUrl: 'https://opensource-demo.orangehrmlive.com' },
  qa:         { baseUrl: 'https://opensource-demo.orangehrmlive.com' },
  staging:    { baseUrl: 'https://opensource-demo.orangehrmlive.com' },
  production: { baseUrl: 'https://opensource-demo.orangehrmlive.com' },
}

export function getEnvConfig(envName: string): EnvConfig {
  const key = envName.toLowerCase()
  const config = envConfigs[key]
  if (!config) {
    throw new Error(`Unknown environment: ${envName}`)
  }
  return config
}
