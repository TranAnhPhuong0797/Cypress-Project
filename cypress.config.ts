import { defineConfig } from 'cypress'
import { getEnvConfig } from './cypress/support/factories/envFactory'

const envName = (process.env.NODE_ENV ?? 'dev').toLowerCase()
const { baseUrl } = getEnvConfig(envName)

export default defineConfig({
  env: {
    envName,
    user: 'admin',          // default login role
  },
  e2e: {
    baseUrl,
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}',
    supportFile: 'cypress/support/index.ts',
    fixturesFolder: 'cypress/fixtures',
    videosFolder: 'cypress/videos',
    screenshotsFolder: 'cypress/screenshots',
    video: true,
    screenshotOnRunFailure: true,
    // retry twice in CI, none locally
    retries: { runMode: 2, openMode: 0 },
    defaultCommandTimeout: 10_000,
    pageLoadTimeout: 60_000,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      reporterEnabled: 'mochawesome, junit',
      mochawesomeReporterOptions: {
        reportDir: 'cypress/reports/mochawesome',
      },
      junitReporterOptions: {
        mochaFile: 'cypress/reports/junit/results-[hash].xml',
      },
    },
    setupNodeEvents(on, config) {
      // e.g. add webpack preprocessor here if needed
      return config
    },
  },
})
