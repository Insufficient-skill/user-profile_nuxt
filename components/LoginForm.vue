<template>
  <v-flex xs12 sm8>
    <v-alert v-bind:class="alert.class" type="error">{{alert.text}}</v-alert>
    <v-alert v-if="$route.query.message" type="error">Сначала авторизуйтесь!</v-alert>
    <v-card width="400px">
      <v-card-title class="mb-2">
        <h2 class="mx-auto">Вход</h2>
      </v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field v-model="name" :rules="nameRules" label="Логин" outlined required></v-text-field>

          <v-text-field
            v-model="password"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required]"
            :type="show ? 'text' : 'password'"
            name="passwordFromForm"
            label="Пароль"
            outlined
            @click:append="show = !show"
            required
          ></v-text-field>
          <v-btn width="130px" color="primary" @click="login">Войти</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  data: () => ({
    alert: {
      class: "d-none",
      text: "Ошибка! Попробуйте еще раз."
    },
    valid: true,
    show: false,
    name: "",
    nameRules: [
      value => !!value || "Введите логин",
      v => {
        if (v.length !== v.trim().length) {
          return "Логин без пробелов";
        }
        return true;
      }
    ],
    password: "",
    rules: {
      required: value => !!value || "Введите пароль."
    }
  }),

  methods: {
    login() {
      if (this.$refs.form.validate()) {
        const users = this.$store.getters["users/users"];
        let authUser = users.find(
          user => user.userName === this.name && user.password === this.password
        );
        if (authUser) {
          this.$store.commit("users/setAuthUser", authUser);
          this.$router.push("/profile");
        }
        this.alert.text = "Неправильный логин или пароль";
      } else {
        this.alert.text = "Ошибка! Попробуйте еще раз.";
      }
      setTimeout(() => {
        this.alert.class = "d-block";
        this.name = "";
        this.password = "";
      }, 500);
    }
  }
};
</script>