<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawerREGISTROCRIMEN"      
      app
      clipped
      temporary
      color="rgba(255, 212, 58, 0.85)"
      width="100%"
    >
      <v-subheader inset>Registro de Crimen</v-subheader>
      <v-subheader>Por favor, llene este formulario para tener más detalles del suceso:</v-subheader>
      <v-row justify="center">
        <v-col>
          <v-row
                  align="center"
                  justify="center">
            <form>
              <v-select
                      label="Tipo de crimen"
                      :items="items"
                      required
              ></v-select>
              <v-text-field
                      v-model="hora_del_suceso"
                      :error-messages="nameErrors"
                      label="Hora"
                      required
                      @input="$v.hora_del_suceso.$touch()"
                      @blur="$v.hora_del_suceso.$touch()"
              ></v-text-field>
              <v-textarea
                      filled
                      auto-grow
                      label="Descripción adicional"
                      rows="4"
                      row-height="30"
                      outlined
                      v-model="textoAdicional"
              ></v-textarea>
            </form>
            <v-dialog
                    v-model="dialog"
                    width="500"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                        color="red lighten-2"
                        dark
                        v-bind="attrs"
                        v-on="on"
                >
                  Click Me
                </v-btn>
              </template>

              <v-card>
                <v-card-title class="headline grey lighten-2">
                  Privacy Policy
                </v-card-title>

                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                          color="primary"
                          text
                          @click="dialog = false"
                  >
                    I accept
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
        </v-col>
      </v-row>
    </v-navigation-drawer>
    <v-app-bar dense app clipped-right clipped-left>
      <v-container fluid>
        <v-row align="center" justify="center" no-gutters>
          <v-toolbar-title>Haga click en el lugar del crimen</v-toolbar-title>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-img height="100%" width="100%">
      <l-map
        @click="handleClick"
        ref="myMap"
        id="karte"
        :zoom="zoom"
        :center="center"
        :options="{ zoomControl: false }"
      >
        <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
        <l-marker v-if="marker != null" :lat-lng="marker"></l-marker>
        <LControl
          style=" position: fixed;
  left: 50%;
  bottom: 20px;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  z-index: 9999;"
        >
          <v-btn
            large
            :disabled="marker === null "
            color="error"
            @click.stop="drawerREGISTROCRIMEN = !drawerREGISTROCRIMEN"
          >SIGUIENTE</v-btn>
        </LControl>
      </l-map>
    </v-img>
  </v-app>
</template>

<script>

const { crimeTypes } = require('../constantes/crime_enums');

import L from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup, LControl } from "vue2-leaflet";
import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default {
  name: "ReportarCrimen",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LControl,
  },
  data() {
    return {
      zoom: 18,
      center: L.latLng(-12.022447522008559, -77.03334331512451),
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: null,
      drawerREGISTROCRIMEN: false,
      items: Object.keys(crimeTypes),
      textoAdicional : "",
      dialog: false
    };
  },
  methods: {
    handleClick(event) {
      console.log(event.latlng);
      this.marker = event.latlng;
    },
  },
};
</script>

<style scoped>
</style>
