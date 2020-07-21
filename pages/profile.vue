<template>
  <div class="ml-3">
    <h1 class="mb-3">Ваш профиль</h1>

    <v-avatar class="profile" color="grey" size="150">
      <v-img :src="authUser.avatar"></v-img>
    </v-avatar>

    <div class="mt-3 mb-2">
      <b>Ваше имя:</b>
      <i>{{authUser.userName}}</i>
    </div>
    <div>
      <b>Ваша почта:</b>
      <i>{{authUser.email}}</i>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    authUser() {
      return this.$store.getters["users/authUser"];
    }
  },
  middleware: ["auth"]
};
</script>
