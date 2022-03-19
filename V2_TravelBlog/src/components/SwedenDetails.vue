<template>
    <div class = "destinationWrapper"
    v-for="(swedenPlaces, index) in swedenDestinations" :key="index"
    @click="redirectToSweden">
    <div class="destinationPictureDiv">
      <img :src="swedenPlaces.image" alt="" />
    </div>
    <div class="destinationTextDiv">
        <p>Title: {{swedenPlaces.title}}</p>
        <p>Accomodation: {{swedenPlaces.location}}</p>
        <p>Visiting Date: {{ swedenPlaces.visitingDate }}</p>
        <!-- <p>Author: {{ swedenPlaces.author }}</p> -->
    </div>
    </div>
</template>

<script>
import swedenAPI from "../services/swedenAPI"

export default {
    data: function() {
        return {
            swedenDestinations: []
        };
    },
    created: async function() {
        this.swedenDestinations = await swedenAPI.getSwedenDetails();
    },
    methods: {
        redirectToSweden(){
            this.$router.push('/sweden')
        }
    }
}
</script>

<style scoped>
img {
  width: 150px;
  height: 150px;
  border-radius: 20%;
  margin-bottom: 5px;
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
  /* height: 5000px; */
}

.destinationWrapper > .destinationTextDiv {
  flex: 1;
  text-align: center;
  
}
</style>