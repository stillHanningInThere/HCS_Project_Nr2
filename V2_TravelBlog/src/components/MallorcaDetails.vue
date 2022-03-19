<template>
    <div class = "destinationWrapper"
    v-for="(mallorcaPlaces, index) in mallorcaDestinations" :key="index"
    @click="redirectToMallorca">
    <div class="destinationPictureDiv">
      <img :src="mallorcaPlaces.image" alt="" />
    </div>
    <div class="destinationTextDiv">
        <p>Title: {{mallorcaPlaces.title}}</p>
        <p>Accomodation: {{mallorcaPlaces.location}}</p>
        <p>Visiting Date: {{ mallorcaPlaces.visitingDate }}</p>
    </div>
    </div>
</template>

<script>
import mallorcaAPI from "../services/mallorcaAPI"

export default {
    data: function() {
        return {
            mallorcaDestinations: []
        };
    },
    created: async function() {
        this.mallorcaDestinations = await mallorcaAPI.getMallorcaDetails();
    },
    methods: {
        redirectToMallorca(){
            this.$router.push('/mallorca')
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