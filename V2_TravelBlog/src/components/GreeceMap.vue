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
        center: { lat: 37.035, lng: 25.378},
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
            name: 'Accomodation, Plaka',
            position: { lat: 37.035190, lng: 25.377503},
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfzH9gqtSvuLvxAIw1nLN0M3q-AvjyK9Kh7Q&usqp=CAU"
          },
          {
            name: 'Kronos',
            position: { lat: 37.116892, lng: 25.536049},
            img: "https://www.picturesfromgreece.com/naxos/koronos-naxos.jpg"
          },
          {
            name: 'Naxos- Stadt',
            position: { lat: 37.113750, lng: 25.392406},
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSPqPpQZKlOCZFoXrSk0HTMLUD9gwz-ai1eQ&usqp=CAU"
          },
          {
            name: 'Naoussa',
            position: { lat: 37.127101, lng: 25.241468},
            img: "https://images.ferryhopper.com/locations/paros/paros-naousa-port-cycladic-architecture-white-blue-holidays-ferry-tickets.jpg"
          },
          {
            name: 'Parikia',
            position: { lat: 37.083706, lng: 25.148792},
            img: "https://www.discovergreece.com/sites/default/files/styles/default/public/2021-02/Parikia.jpg?itok=ZfS-gkbu"
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