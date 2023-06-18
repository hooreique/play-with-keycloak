<script setup>
import { ref } from 'vue';
import { keycloak, login, logout, register } from '@/auth/keycloak.js';

const userInfo = ref({});
const setUserInfo = () =>
  keycloak
    .loadUserInfo()
    .then(info => (userInfo.value = info))
    .catch(() => (userInfo.value = {}));

const tokenExpired = ref(true);
const isTokenExpired = () => (tokenExpired.value = keycloak.isTokenExpired());
</script>

<template>
  this is login view

  <div v-if="keycloak.authenticated">
    <div>
      {{ userInfo }}
    </div>
    <div>
      <button @click.prevent.stop="logout">로그아웃</button>
    </div>
  </div>

  <div v-else>
    <div>
      <button @click.prevent.stop="login">로그인</button>
    </div>
    <div>
      <button @click.prevent.stop="register">회원가입</button>
    </div>
  </div>

  <br />

  <div>
    <div>
      <button @click.prevent.stop="setUserInfo">Load User Info</button>
    </div>
    <div>
      <button @click.prevent.stop="isTokenExpired">Is Token Expired</button>:
      {{ tokenExpired }}
    </div>
    <div>
      <button @click.prevent.stop="keycloak.clearToken">Clear Token</button>
    </div>
    <div>
      <button @click.prevent.stop="() => keycloak.updateToken(60)">
        Update Token
      </button>
    </div>
  </div>
</template>
