<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="amber" dark flat>
                <v-toolbar-title>
                  <h2>Security App</h2>
                </v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>

              <v-img height="250" src="../assets/anti_murder.png"></v-img>

              <v-card-text>
                <v-form ref="form" class="login" lazy-validation>
                  <v-text-field
                          v-model="name"
                          :counter="10"
                          :rules="nameRules"
                          label="Nombre Usuario"
                          prepend-icon="mdi-account-circle"
                          type="text"
                          required
                  ></v-text-field>

                  <v-text-field
                          v-model="password"
                          :counter="8"
                          :rules="passwordRules"
                          label="Contraseña"
                          prepend-icon="mdi-lock"
                          :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                          :type="showPassword ? 'password' : 'text'"
                          @click:append="showPassword = !showPassword"
                          required
                  ></v-text-field>
                </v-form>
              </v-card-text>

              <v-card-actions>
                <v-container>
                  <v-row align="center">
                    <v-col cols="6" sm="6">
                      <v-btn depressed small>
                        <router-link to="/register">Registrarse</router-link>
                      </v-btn>
                    </v-col>
                    <v-col cols="6" sm="6">
                      <v-btn color="error" :disabled="!valid" @click="userRegistered">Ingresar</v-btn>
                    </v-col>
                  </v-row>

                  <v-row align="center">
                    <v-col cols="12" sm="12">
                      <p class="forgot-password text-center mt-2 mb-4">
                        <router-link to="/forgot-password">Olvidaste tu Contraseña?</router-link>
                      </p>
                    </v-col>
                  </v-row>
                </v-container>

                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import LoginRegister from "./LoginRegister.vue";
  import { mapState } from "vuex";

  export default {
    data() {
      return {
        valid: true,
        name: "",
        nameRules: [
          (v) => !!v || "Se requiere Nombre",
          (v) =>
                  (v && v.length > 0 && v.length <= 10) ||
                  "Nombre no mas 10 caracteres",
        ],
        showPassword: true,
        password: "",
        passwordRules: [
          (v) => !!v || "Se requiere Contraseña",
          (v) => (v && v.length >= 8) || "Contraseña al menos 8 caracteres",
        ],
        lista: [{}],
      };
    },
    methods: {
      validate() {
        if (this.$refs.form.validate()) {
          //console.log(Object.values(this.registerList[0])[0])
          //this.$router.replace("/");
        }
      },
      userRegistered() {

        this.registerList.forEach(item => {
          if (this.$refs.form.validate() && item.name === this.name && item.password === this.password) {
            this.$router.replace("/mapa");
          }
        });
      },
    },
    components: {
      LoginRegister,
    },
    computed: {
      ...mapState(["registerList"]),
    },
  };
</script>