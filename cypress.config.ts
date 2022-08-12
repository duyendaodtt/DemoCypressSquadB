import { defineConfig } from 'cypress'

let status

export default defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        setStatus: (val) => {
          return (status = val)
        },
        getStatus: () => {
          return status
        },
      })
    }
  }
})