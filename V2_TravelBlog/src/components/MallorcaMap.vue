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
        center: { lat: 39.819, lng: 3.1146},
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
            name: 'Puig Major',
            position: { lat: 39.808716, lng: 2.797843},
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAl2XbjmFvzqBiO8QRDe_A0qengJ0VPQBR-Q&usqp=CAU"
            },
            {
            name: 'Pollenca',
            position: { lat: 39.943797, lng: 3.169301},
            img: "https://cs-static-pro.s3.amazonaws.com/cobi%2Fmedia%2Fpollensa.com%2Fcache%2Fb8%2F1e%2Fb81e59742357454b1d975b40b76549e1.jpg"
            },
            {
            name: 'San Salvador',
            position: { lat: 39.453527, lng: 3.172126},
            img: "https://www.epicroadrides.com/wp-content/uploads/2018/12/San-Salvador-Mallorca-cycling-climb-Copyright-Epic-Road-Rides-10-335x335.jpg"
            },
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