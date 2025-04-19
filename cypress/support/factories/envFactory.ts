export interface EnvConfig {
  baseUrl: string
}

const envConfigs: Record<string, EnvConfig> = {
  dev:        { baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login' },
  qa:         { baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login' },
  staging:    { baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login' },
  production: { baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login' },
}

export function getEnvConfig(envName: string): EnvConfig {
  const key = envName.toLowerCase()
  const config = envConfigs[key]
  if (!config) {
    throw new Error(`Unknown environment: ${envName}`)
  }
  return config
}
