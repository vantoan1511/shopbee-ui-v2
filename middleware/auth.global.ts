function isAuthenticated(): boolean {
    return false
}

export default defineNuxtRouteMiddleware((to, from) => {
    if (import.meta.server) {
        return;
    }

    const isAuthenticatedRequired = to.meta.auth || false;

    // const oidc = useOidc();
    //
    // if (isAuthenticatedRequired && !oidc.isLoggedIn) {
    //     oidc.login(to.fullPath)
    // }
})
