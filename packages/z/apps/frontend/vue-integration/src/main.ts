/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */
// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)

// Set Apollo clients
import { apolloClient } from './apollo'

import { RolesProviders, UsersProviders } from '@vuelder.js/users-frontend/core'
UsersProviders.setGqlc(apolloClient)
RolesProviders.setGqlc(apolloClient)


app.mount('#app')
