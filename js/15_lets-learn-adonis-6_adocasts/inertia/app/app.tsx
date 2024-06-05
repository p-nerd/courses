/// <reference path="../../adonisrc.ts" />
/// <reference path="../../config/inertia.ts" />

import '../css/app.css'
import { hydrate } from 'solid-js/web'
import { createInertiaApp } from 'inertia-adapter-solid'
import { resolvePageComponent } from '@adonisjs/inertia/helpers'

const appName = import.meta.env.VITE_APP_NAME || 'AdonisJS'

createInertiaApp({
    progress: { color: '#5468FF' },

    title: (title: string) => `${title} - ${appName}`,

    resolve: (name: string) => {
        return resolvePageComponent(`../pages/${name}.tsx`, import.meta.glob('../pages/**/*.tsx'))
    },

    setup({ el, App, props }: any) {
        hydrate(() => <App {...props} />, el)
    },
} as any)
