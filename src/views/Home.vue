<template>
  <v-div id="app">
    <v-app id="inspire">
      <v-app id="inspire">
        <v-navigation-drawer
                v-model="drawerPROFILE"
                hide-overlay
                app
                clipped
                right
                temporary
                color="rgba(255, 212, 58, 0.85)"
        >
          <v-subheader inset>Este es tu perfil mijo :)</v-subheader>
        </v-navigation-drawer>

        <v-app-bar dense app clipped-right clipped-left>
          <v-container fluid>
            <v-row
                    align="center"
                    justify-lg="space-between"
                    justify-xs="space-between"
                    justify-sm="space-between"
                    justify-md="space-between"
                    no-gutters
            >
              <v-btn
                      v-bind="attrs"
                      v-on="on"
                      color="red"
                      icon
                      @click.stop="drawerSIDEBAR = !drawerSIDEBAR"
              >
                <v-icon>filter_list</v-icon>
              </v-btn>
              <v-toolbar-title>Mapa de la ciudad</v-toolbar-title>

              <v-btn
                      v-bind="attrs"
                      v-on="on"
                      color="red"
                      icon
                      @click.stop="drawerPROFILE = !drawerPROFILE"
              >
                <v-icon>person</v-icon>
              </v-btn>
            </v-row>
          </v-container>
        </v-app-bar>

        <v-navigation-drawer
                hide-overlay
                v-model="drawerSIDEBAR"
                app
                clipped
                temporary
                color="rgba(255, 212, 58, 0.85)"
        >
          <v-list>
            <v-subheader inset>TIPOS DE CRIMENES</v-subheader>
            <v-list-item v-for="crime in totalCrimes" :key="crime">
              <v-checkbox v-model="crimesSelected" :label="crime" :value="crime"></v-checkbox>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>

        <v-img height="100%" width="100%">
          <l-map
                  ref="myMap"
                  id="karte"
                  :zoom="zoom"
                  :center="center"
                  :options="{ zoomControl: false }"
          >
            <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
            <l-marker
                    v-for="event in crimesMarked"
                    :key="event.properties.id"
                    :lat-lng="
            processPosition(
              event.geometry.coordinates[1],
              event.geometry.coordinates[0]
            )
          "
                    @click="dialog = true"
            >
              <l-popup>{{ event.properties.type }}</l-popup>
            </l-marker>

            <LControl style=" position: fixed;
  left: 50%;
  bottom: 20px;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  z-index: 9999;">
              <v-btn color="warning" @click="">
                REPORTAR CRIMEN
              </v-btn>
            </LControl>
          </l-map>
        </v-img>
      </v-app>
    </v-app>
  </v-div>
</template>

<script>
  import L from "leaflet";
  import { LMap, LTileLayer, LMarker, LPopup, LControl } from "vue2-leaflet";
  import "leaflet/dist/leaflet.css";

  const { crimes } = require("../constantes/crime_events");
  const { crimeTypes } = require("../constantes/crime_enums");

  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  });

  export default {
    name: "Mapa",

    components: {
      LMap,
      LTileLayer,
      LMarker,
      LPopup,
      LControl,
    },
    data() {
      return {
        zoom: 16,
        center: L.latLng(-12.022447522008559, -77.03334331512451),
        url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
        attribution:
                '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        marker: L.latLng(-12.022447522008559, -77.03334331512451),
        crimeEvents: crimes,
        drawerSIDEBAR: false,
        drawerPROFILE: false,
        crimesSelected: [],
        totalCrimes: Object.keys(crimeTypes),
        closeOnContentClick: false,
        offsetY: true,
        drawer: null,
        drawerRight: null,
      };
    },
    methods: {
      processPosition: function (lat, lon) {
        return L.latLng(lat, lon);
      },
    },
    computed: {
      crimesMarked: function () {
        const filtered_events = this.crimeEvents.filter((crime) =>
                this.crimesSelected.includes(crime.properties.type.toUpperCase())
        );
        return filtered_events;
      },
    },
    mounted() {
      this.crimesSelected = Object.keys(crimeTypes);
    },
  };
</script>



