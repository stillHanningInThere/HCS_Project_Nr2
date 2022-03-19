<template>
    <div class = "destinationWrapper"
    v-for="(moloPlaces, index) in molotowDestinations" :key="index"
    @click="redirectToMolotow">
    <div class="destinationPictureDiv">
      <img :src="moloPlaces.image" alt="" />
    </div>
    <div class="destinationTextDiv">
        <p>Title: {{moloPlaces.title}}</p>
        <p>Accomodation: {{moloPlaces.location}}</p>
        <p>Visiting Date: {{ moloPlaces.visitingDate }}</p>
        <!-- <p>Author: {{ moloPlaces.author }}</p> -->
    </div>
    </div>
</template>

<script>
import molotowAPI from "../services/molotowAPI"

export default {
    data: function() {
        return {
            molotowDestinations: []
        };
    },
    created: async function() {
        this.molotowDestinations = await molotowAPI.getMolotowDetails();
    },
    methods: {
      redirectToMolotow(){
        this.$router.push('/molotow')
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