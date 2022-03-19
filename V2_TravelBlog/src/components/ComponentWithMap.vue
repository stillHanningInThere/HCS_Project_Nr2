<template>
<div>
  <div>
    <h2>Current Location</h2>
    <GmapAutocomplete
    @place_changed='setPlace'
    />
    </div>
    <br>
  <GMapMap 
  :center="center"
  :zoom="8"
  :options="{
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: true,
    disableDefaultUI: false
  }" 
  >
  <GMapCluster>
    <GMapMarker
    :key="marker.id"
    v-for="marker in markers"
    :position="marker.position"
    />
  </GMapCluster>
  </GMapMap>
    
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        center: {lat: 39.51, lng: 3.7},
        currentPlace: null,
        markers: [



          // {
          //   id: 'Alcudia',
          //   position: { lat: 39.819, lng: 3.1146},
          // },
          // {
          //   id: 'Ivö',
          //   position: { lat: 56.1, lng: 14.4},
          // },
          // {
          //   id: 'Naxos,',
          //   position: { lat: 37.035, lng: 25.378},
          // },
          // {
          //   id: 'Paris',
          //   position: { lat: 48.8822, lng: 2.3419},
          // },
          // {
          //   id: 'Molotow',
          //   position: { lat: 53.5499, lng: 9.9565},
          // },
          
        ]
      }
    },
    mounted(){
      this.geolocate();
      // function to find my current position
    },
    methods: {
      setPlace(place) {
        this.currentPlace = place
      },
      geolocate: function(){
        navigator.geolocation.getCurrentPosition(position => {
          this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        })
      }
    }
  }
</script>

<style scoped>
.vue-map-container {
  height: 100vh !important;
}
</style>