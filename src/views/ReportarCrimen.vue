<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawerREGISTROCRIMEN"
      bottom
      app
      clipped
      temporary
      color="rgba(255, 212, 58, 0.85)"
      width="100%"
    >
      <v-subheader inset>Registro de Crimen</v-subheader>
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
