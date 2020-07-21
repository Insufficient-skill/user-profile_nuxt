<template>
  <v-layout column justify-center align-center>
    <LoginForm />
  </v-layout>
</template>

<script>
import LoginForm from "~/components/LoginForm";
export default {
  async fetch({ store }) {
    if (store.getters["users/users"].length === 0) {
      await store.dispatch("users/fetch");
    }
  },
  computed: {
    users() {
      return this.$store.getters["users/users"];
    }
  },
  layout: "empty",
  components: {
    LoginForm
  },
  head: {
    title: "Авторизация | NuxtJS"
  }
};
</script>
