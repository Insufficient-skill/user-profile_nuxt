<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-avatar>
          <v-img :src="authUser.avatar"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{authUser.userName}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item @click.prevent="logout">
          <v-list-item-icon icon>
            <v-icon>{{item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="primary" app>
      <v-toolbar color="primary" flat>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Личный кабинет</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon @click.prevent="logout">
          <v-icon>mdi-logout-variant</v-icon>
        </v-btn>
      </v-toolbar>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  computed: {
    authUser() {
      return this.$store.getters["users/authUser"];
    }
  },
  data() {
    return {
      drawer: null,
      item: {
        id: "1",
        title: "Logout",
        icon: "mdi-logout-variant"
      }
    };
  },
  methods: {
    logout() {
      this.$store.commit("users/setAuthUser", {});
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
</style>
