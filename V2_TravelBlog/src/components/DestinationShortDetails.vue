<template>
  <div
    class="destinationWrapper"
    v-for="(destination, index) in destinations"
    :key="index"
    @click="redirectToDetails"
  >
    <div class="destinationPictureDiv">
      <img :src="destination.image" alt="" />
    </div>
    <div class="destinationTextDiv">
      <p>Title: {{ destination.title }}</p>
      <p>Accomodation: {{ destination.location }}</p>
      <p>Visiting Date: {{ destination.visitingDate }}</p>
      <p>Author: {{ destination.author }}</p>
      <p class="ID">ID: {{destination.id}}</p>
    
    </div>
  </div>
</template>

<script>

import destinationAPI from "../services/destinationAPI";

export default {
  data: function () {
    return {
      destinations: [],
      location: [],
      
    };
  },
  created: 
    async function () {
    this.destinations = await destinationAPI.getAllDestinations();
    },
    async function() {
    this.location = await destinationAPI.getAllDestinations();
    }, 
  methods: {
    redirectToDetails() {
      const location = document.querySelectorAll("#ID");
      console.log(location.innerHTML)

     
     


    
      
      // push(
      //   {
      //     path: '/details'
      //   }
      // )
    },
  },
};
</script>

<style scoped>
img {
  width: 200px;
  height: 200px;
  border-radius: 20px;
}

.destinationWrapper {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  border-radius: 20%;
  border: solid 2px black;
  margin: 25px 25px 25px 25px;
  cursor: pointer;
}

.destinationWrapper > .destinationPictureDiv {
  flex: 2;
  height: 250px;
}

.destinationWrapper > .destinationTextDiv {
  flex: 1;
  text-align: center;
}
</style>