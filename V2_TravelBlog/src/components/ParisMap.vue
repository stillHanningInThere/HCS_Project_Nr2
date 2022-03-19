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
            name: 'Sacre-Coeur',
            position: { lat:48.887282, lng: 2.342945},
            img: "data:image/jpeg;base64,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"
            
          },
          {
            name: 'Arc de Triomphe',
            position: { lat: 48.873480, lng: 2.295979},
            img: "https://loving-travel.com/de/wp-content/uploads/2020/05/Arc-de-Triomphe-Triumphbogen-Paris-Luftaufnahme.jpg",
          },
          {
            name: 'Tour Eiffel',
            position: { lat: 48.856797, lng: 2.295805},
            img: "https://files.structurae.net/files/photos/5256/dsc01171.jpg"
            
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
                            <p class="title is-4"> ${marker.name}</p>
                            <img src="${marker.img}" width="150px" height="150px">
                        </div>
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