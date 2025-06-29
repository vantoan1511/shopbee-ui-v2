// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import Aura from '@primeuix/themes/aura';

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    css: [
        '~/assets/css/main.css'
    ],
    modules: ['@primevue/nuxt-module'],
    vite: {
        plugins: [
            tailwindcss(),
        ],
    },
    app: {
        pageTransition: {
            name: 'page',
            mode: 'out-in',
        }
    },
    nitro: {
        routeRules: {
            '/': {prerender: true},
            '/login': {ssr: true},
            '/dashboard': {ssr: true, swr: 3600}
        },
    },
    primevue: {
        options: {
            ripple: true,
            theme: {
                preset: Aura,
                options: {
                    darkModeSelector: '.app-dark',
                    cssLayer: {
                        name: 'primevue',
                        order: 'theme, base, primevue'
                    }
                }
            },
        },
    },
    // openidConnect: {
    //     addPlugin: true,
    //     op: {
    //         issuer: 'http://localhost:8080/realms/shopbee',
    //         clientId: 'shopbee',
    //         clientSecret: 'IeuDVuI4NlMOPn0Nxg9MAr0EePYsM7gB',
    //         callbackUrl: '',
    //         scope: ['profile', 'email'],
    //     },
    //     config: {
    //         debug: true,
    //         response_type: "code",
    //         secret: "oidc._sessionid",
    //         cookie: {loginName: ""},
    //         cookiePrefix: "oidc._",
    //         cookieEncrypt: true,
    //         cookieEncryptKey: "bfnuxt9c2470cb477d907b1e0917oidc",
    //         cookieEncryptIV: "ab83667c72eec9e4",
    //         cookieEncryptALGO: "aes-256-cbc",
    //         cookieMaxAge: 24 * 60 * 60,
    //         cookieFlags: {
    //             access_token: {
    //                 httpOnly: true,
    //                 secure: false,
    //             },
    //         },
    //     },
    // }
})