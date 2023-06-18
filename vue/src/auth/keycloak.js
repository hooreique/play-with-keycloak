import Keycloak from 'keycloak-js';

export const keycloak = new Keycloak({
    url: 'http://localhost:8333',
    realm: 'my-realm',
    clientId: 'my-vue',
});

export const init = () => keycloak.init({ onLoad: 'check-sso' });

export const login = () =>
    keycloak.login({
        redirectUri: 'http://localhost:3000/login',
    });

export const logout = () =>
    keycloak.logout({
        redirectUri: 'http://localhost:3000/login',
    });

export const register = () =>
    keycloak.register({
        redirectUri: 'http://localhost:3000/login',
    });

keycloak.onReady = event => {
    console.log('ready emitted.', event);
};
keycloak.onAuthSuccess = event => {
    console.log('auth-success emitted.', event);
};
keycloak.onAuthError = event => {
    console.log('auth-error emitted.', event);
};
keycloak.onAuthRefreshSuccess = event => {
    console.log('auth-refresh-success emitted.', event);
};
keycloak.onAuthRefreshError = event => {
    console.log('auth-refresh-error emitted.', event);
};
keycloak.onAuthLogout = event => {
    console.log('auth-logout emitted.', event);
};
keycloak.onTokenExpired = event => {
    console.log('token-expired emitted.', event);
};
