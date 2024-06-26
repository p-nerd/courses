import { hydrate } from 'solid-js/web'
import { createInertiaApp } from 'inertia-adapter-solid'

export default function render(page: any) {
    return createInertiaApp({
        page,
        resolve: (name) => {
            const pages = import.meta.glob('../pages/**/*.tsx', { eager: true })
            return pages[`../pages/${name}.tsx`]
        },
        setup({ el, App, props }) {
            hydrate(() => <App {...props} />, el)
        },
    })
}
