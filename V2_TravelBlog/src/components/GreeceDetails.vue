<template>
    <div class = "destinationWrapper"
    v-for="(greecePlaces, index) in greeceDestinations" :key="index"
    @click="redirectToGreece">
    <div class="destinationPictureDiv">
      <img :src="greecePlaces.image" alt="" />
    </div>
    <div class="destinationTextDiv">
        <p>Title: {{greecePlaces.title}}</p>
        <p>Accomodation: {{greecePlaces.location}}</p>
        <p>Visiting Date: {{ greecePlaces.visitingDate }}</p>
    </div>
    </div>
</template>

<script>
import greeceAPI from "../services/greeceAPI";

export default {
    data: function() {
        return {
            greeceDestinations: []
        };
    },
    created: async function() {
        this.greeceDestinations = await greeceAPI.getGreeceDetails();
    },
    methods: {
        redirectToGreece(){
            this.$router.push('/greece')
        }
    }
}
</script>

<style scoped>
img {
  width: 150px;
  height: 150px;
  border-radius: 20%;
}

.destinationWrapper {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  border-radius: 20%;
  border: solid 2px black;
  margin: 25px 25px 0px 25px;
  cursor: pointer;
  width: 150px;
  height: 150px;
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