<template>
  <button class="github-login-btn" @click="githubLoginClick"></button>
</template>

<script setup>

import {useGithubAuthenticationStore} from "~/githubAuthentication/stores/githubAuthenticationStore.ts";

const GithubAuthenticationStore = useGithubAuthenticationStore

const githubLoginClick = async () => {

  await GithubAuthenticationStore.requestGithubOauthRedirectionToDjango()
}
</script>

<style scoped>
.github-login-btn {
  margin: 10px 0;
  background-image: url("@/assets/fixed/login/github_login_round.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 80px;
  width: 80px;
}
</style>