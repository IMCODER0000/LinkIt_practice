import { defineNuxtModule } from "@nuxt/kit";
import { resolve } from 'path';

export default defineNuxtModule ({
    meta: {
        name: 'GithubRedirection',
        configKey: 'GithubRedirection',
    },

    setup(moduleOptions, nuxt) {
        const themeDir = resolve(__dirname, '..')

        nuxt.hook('pages:extend', (pages) => {
            pages.push({
                name: 'GithubRedirection',
                path: '/github_oauth/access-token',
                file: resolve(themeDir, 'githubAuthentication/pages/GithubRedirection.vue'),
            })
        })

        nuxt.hook('imports:dirs', (dirs) => {
            dirs.push(resolve(__dirname, 'store'))
        })
    },
})