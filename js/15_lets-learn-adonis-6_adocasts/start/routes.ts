/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.on('/').renderInertia('home', { version: 6 })

router
    .get('/movies/:slug', async (ctx) => {
        return ctx.params.slug
    })
    .as('movies.show')
    .where('slug', router.matchers.slug())
