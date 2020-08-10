<template>
  <v-container fluid fill-height class="ma-0 pa-0">

    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline">A Dialog Box attached to a Marker :-)</v-card-title> 
        <v-card-actions>  
          <v-btn color="primary" @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-img height="100%" width="100%">
      <l-map ref="map" id="karte" :zoom="zoom" :center="center">
        <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
        <l-marker v-for="event in crimeEvents" :key="event.properties.id" :lat-lng="processPosition(event.geometry.coordinates[1], event.geometry.coordinates[0])"  @click="dialog = true"></l-marker>
      </l-map>
    </v-img>

  </v-container>
</template>

<script>
import L from 'leaflet';
import { LMap,LMarker, LTileLayer} from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css'

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const { crimes } = require('../wea_hardcodeada/crimenes');

export default {
    components: { LMap,  LTileLayer, LMarker},
    data() {
      return {
        zoom:16,
        center: L.latLng(-12.02335258576796,-77.03407019376755),
        marker: L.latLng(48.13,11.6),
        dialog: false,
        crimeEvents : crimes,
      }
    },
  methods:{
      processPosition : function(lat, lon) {
        return L.latLng(lat, lon);
      }
  }
};
</script>