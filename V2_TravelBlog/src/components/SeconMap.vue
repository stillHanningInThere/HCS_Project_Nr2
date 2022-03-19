<template>
<div>
  <GMapMap
  ref="gmap"  
  :center="center"
  :zoom="15"
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
        center: {lat: 39.51, lng: 3.7},
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
            name: 'Alcudia, Mallorca',
            position: { lat: 39.819, lng: 3.1146},
            description: "Climbing hills by bike",
            visiting_date: "03-2019",
            link: "http://localhost:3000/mallorca"
          },
          {
            name: 'Ivö, Sweden',
            position: { lat: 56.1, lng: 14.4},
            description: "Hiking in Sweden",
            visiting_date: "08-2021",
            link: "http://localhost:3000/sweden"
          },
          {
            name: 'Paris, France',
            position: {lat: 48.8822, lng: 2.3419 },
            description: "Sightseeing at it´s best",
            visiting_date: "12-2017",
            link: "http://localhost:3000/paris"
          },
          {
            name: 'Naxos, Kyklade, Greece',
            position: {lat: 37.035, lng: 25.378 },
            description: "Sunbathing in Greece",
            visiting_date: "12-2017",
            link: "http://localhost:3000/greece"
          },
          {
            name: 'Molotow, Hamburg',
            position: {lat: 53.5499, lng: 9.9565 },
            description: "Favorite club in Town",
            visiting_date: "too long ago :(",
            link: "http://localhost:3000/molotow"
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
                        <time datetime="2016-1-1"> Last stay: ${marker.visiting_date}</time>
                        <li><a href ="${marker.link}">Details</a></li>
                        <img src="https://images.intouch.wunderweib.de/rowan-atkinson-mr-bean,id=da392030,b=intouch,w=1415,rm=sk.jpeg" width="50px" height="50px"> <p>Author: Jonas </p>
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
  height: 100vh !important;
}
</style>