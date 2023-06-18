if (docker ps -q -f "name=my-keycloak") {
    docker stop my-keycloak
} else {
    Write-Host "Container my-keycloak is not currently running"
}
