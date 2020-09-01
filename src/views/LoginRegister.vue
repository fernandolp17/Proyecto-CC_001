<template>
    <v-app id="inspire">
        <v-main>
            <v-container class="fill-height" fluid>
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="8" md="4">
                        <v-card class="elevation-12" mb-3>
                            <v-toolbar color="amber" dark flat>
                                <v-toolbar-title>
                                    <h3>Security App - Registro</h3>
                                </v-toolbar-title>
                                <v-spacer></v-spacer>
                            </v-toolbar>

                            <v-row justify="center">
                                <v-col cols="12" sm="6">
                                    <v-img height="150" src="../assets/login.png"></v-img>
                                </v-col>
                            </v-row>

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
                                            outlined
                                            dense
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
                                            outlined
                                            dense
                                            required
                                    ></v-text-field>

                                    <v-text-field
                                            v-model="distrito"
                                            :counter="1"
                                            :rules="distritoRules"
                                            label="Distrito"
                                            type="text"
                                            outlined
                                            dense
                                            prepend-icon="mdi-home-modern"
                                            required
                                    ></v-text-field>

                                    <v-text-field
                                            v-model="phone"
                                            :counter="9"
                                            :rules="phoneRules"
                                            label="Celular"
                                            type="number"
                                            outlined
                                            dense
                                            prepend-icon="mdi-cellphone"
                                            required
                                    ></v-text-field>

                                    <v-text-field
                                            v-model="email"
                                            label="E-mail"
                                            :rules="emailRules"
                                            outlined
                                            dense
                                            prepend-icon="mdi-gmail"
                                            required
                                    ></v-text-field>
                                </v-form>
                            </v-card-text>

                            <v-card-actions>
                                <v-container>
                                    <v-row justify="center">
                                        <v-col cols="6" sm="6">
                                            <v-btn
                                                    color="error"
                                                    :disabled="!valid"
                                                    @click="validate"
                                                    v-on:click="addRegister"
                                            >Crear Cuenta</v-btn>
                                        </v-col>
                                    </v-row>
                                </v-container>

                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>

                <v-snackbar v-model="snackbar" :timeout="timeout" top="top" vertical="vertical">
                    {{ message }}
                    <template v-slot:action="{ attrs }">
                        <v-btn color="success" text v-bind="attrs" @click="snackbar = false">Cerrar</v-btn>
                    </template>
                </v-snackbar>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>

    import {mapState} from "vuex";

    export default {
        name: "LoginRegister",
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

                distrito: "",
                distritoRules: [
                    (v) => !!v || "Se requiere Distrito de Residencia",
                    (v) => (v && v.length >= 1) || "Distrito al menos 1 caracteres",
                ],
                phone: "",
                phoneRules: [
                    (v) => !!v || "Escriba su Numero Telefonico",
                    (v) => (v && v.length == 9) || "Su telefono debe tener 9 numeros",
                ],
                email: "",
                emailRules: [
                    (v) => !!v || "Se requiere E-mail",
                    (v) => /.+@.+\..+/.test(v) || "E-mail no valido",
                ],
                //alertas
                snackbar: false,
                message: "",
                timeout: -1,
            };
        },
        methods: {
            validate() {
                if (this.$refs.form.validate()) {
                    this.snackbar = true;
                    this.message = "Se ha registrado correctamente!!!";
                    this.timeout = 2000;
                    //console.log(this.name, this.password)
                    setTimeout(() => {
                        this.$router.replace("/");
                    }, 3000);
                }
            },
            addRegister() {
                if (this.$refs.form.validate()) {
                    this.registerList.push({
                        name: this.name,
                        password: this.password,
                        distrito: this.distrito,
                        phone: this.phone,
                        email: this.email,
                    });
                }
            },
        },
        computed: {
            ...mapState(["registerList"]),
        },
    };
</script>