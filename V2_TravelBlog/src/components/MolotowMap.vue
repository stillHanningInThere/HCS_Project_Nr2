<template>
<div>
  <GMapMap
  ref="gmap"  
  :center="center"
  :zoom="10"
  :streetViewControl= false
  >
    <GMapCluster>
      <GMapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable ="true"
      :icon="markerIcon"
      @click="toggleInfoWindow(m,index)"
      />
      <GMapInfoWindow
      :options="InfoOptions"
      :position="infoWindowPos"
      :opened="infoWinOpen"
      @closeclick="infoWinOpen=false">
      <div v-html="infoContent"></div>
      </GMapInfoWindow>
      
    </GMapCluster>
  </GMapMap>
    
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        center: { lat: 56.041645, lng: 14.685452},
        map: null,
        currentPlace: null,
        hover: false,
        infoWindowPos: {
            lat: 0,
            lng: 0
        },
        infoContent: '',
        infoWinOpen: false,
        currentMidx: null,
        infoOptions : {
            pixelOffset: {
                with: 0,
                height: -35
            }
        },
        markers: [
            {
            name: 'House, Ivö',
            position: { lat: 56.1, lng: 14.4},
            
          },
          {
            name: 'Hanö',
            position: { lat: 56.009012, lng: 14.840666},
          },
          {
            name: '',
            position: { lat: 56.137921, lng: 14.839505},
            
          }

          
        ],
        places: []
      }
    },
    mounted(){
      this.$refs.gmap.$mapPromise.then((map) => {
          const bounds = new google.maps.LatLngBounds()
          for (let m of this.markers) {
              bounds.extend(m.position)
          }
          map.fitBounds(bounds);
          
      });
    },
    methods: {
      setPlace(place) {
        this.currentPlace = place

      },
      toggleInfoWindow: function (marker, idx){
          this.infoWindowPos = marker.position;
          this.infoContent = this.getInfoWindowContent(marker);

          if(this.currentMidx == idx){
              this.infoWinOpen = !this.infoWinOpen;
          }
          else {
              this.infoWinOpen = true;
              this.currentMidx = idx;
          }
      },
      getInfoWindowContent: function (marker){
          return (`<div class="card">
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-4"> Location: ${marker.name}</p>
                        </div>
                    </div>
                    <div class="content">
                        ${marker.description}
                        <br>
                        <div class="card-image">
                          <figure>
                            <img src=${marker.img} alt="Placeholder image">
                          </figure>
                        </div>
                        <img src:</img>
                    </div>
                </div>
            </div>
          `)
      }
    }
  }
</script>

<style scoped>
.vue-map-container {
  width: 475px !important; 
  height: 400px !important;
  border-radius: 5% !important;
}
</style>