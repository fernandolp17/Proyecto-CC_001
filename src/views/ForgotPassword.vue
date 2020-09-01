<template>
    <v-app id="inspire">
        <v-main>
            <v-container class="fill-height" fluid>
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="8" md="4">
                        <v-card class="elevation-12">
                            <v-toolbar color="amber" dark flat>
                                <v-toolbar-title>
                                    <h3>Security App - Solicitar Contraseña</h3>
                                </v-toolbar-title>
                                <v-spacer></v-spacer>
                            </v-toolbar>

                            <v-card-text>
                                <v-form ref="form" v-model="valid" lazy-validation>
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
                                <h3>Tu contraseña: {{password}}</h3>
                            </v-card-text>

                            <v-card-actions>
                                <v-container>
                                    <v-row justify="center">
                                        <v-col cols="6" sm="6">
                                            <v-btn color="error" :disabled="!valid" @click="validate">Enviar</v-btn>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>

                <v-snackbar
                        v-model="snackbar"
                        :timeout="timeout"
                        top='top'
                        vertical='vertical'
                >
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
        data: () => ({
            valid: true,
            email: "",
            emailRules: [
                (v) => !!v || "Se requiere E-mail",
                (v) => /.+@.+\..+/.test(v) || "E-mail no valido",
            ],
            snackbar: false,
            message: "",
            timeout: -1,
            password: ""
        }),
        methods: {
            validate() {
                if (this.$refs.form.validate()) {
                    this.snackbar = true;
                    this.message = "Revise su Correo Electronico!!!";
                    this.userRegistered()
                    this.timeout = 3000;
                    setTimeout(() => {
                        this.$router.replace("/");
                    }, 4000);
                }
            },
            userRegistered() {

                this.registerList.forEach(item => {
                    if (this.$refs.form.validate() && item.email === this.email) {
                        this.password=item.password
                    }
                });
            },
        },
        computed: {
            ...mapState(["registerList"]),
        },
    };
</script>