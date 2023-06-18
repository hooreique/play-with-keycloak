if (
    docker ps -f "name=my-keycloak" --format "{{.Names}}" ` 
        | Select-String -Pattern "^my-keycloak$" -Quiet
) {
    Write-Host "Container my-keycloak is currently running"
} elseif (
    docker ps -a -f "name=my-keycloak" --format "{{.Names}}" ` 
        | Select-String -Pattern "^my-keycloak$" -Quiet
) {
    docker start my-keycloak
} else {
    docker run `
        -d `
        -p 8333:8080 `
        -e KEYCLOAK_ADMIN=sa `
        -e KEYCLOAK_ADMIN_PASSWORD="A0123456" `
        --name my-keycloak `
        quay.io/keycloak/keycloak:21.1.1 start-dev
}
