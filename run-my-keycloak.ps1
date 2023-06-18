docker run `
    -p 8333:8080 `
    -e KEYCLOAK_ADMIN=sa `
    -e KEYCLOAK_ADMIN_PASSWORD="A0123456" `
    --name my-keycloak `
    quay.io/keycloak/keycloak:21.1.1 start-dev
