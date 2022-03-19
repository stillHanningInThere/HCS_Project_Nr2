<template>
    <div class = "destinationWrapper"
    v-for="(parisPlaces, index) in parisDestinations" :key="index"
    @click="redirectToParis">
    <div class="destinationPictureDiv">
      <img :src="parisPlaces.image" alt="" />
    </div>
    <div class="destinationTextDiv">
        <p>Title: {{parisPlaces.title}}</p>
        <p>Accomodation: {{parisPlaces.location}}</p>
        <p>Visiting Date: {{ parisPlaces.visitingDate }}</p>
    </div>
    </div>
</template>

<script>
import parisAPI from "../services/parisAPI";

export default {
    data: function() {
        return {
            parisDestinations: []
        };
    },
    created: async function() {
        this.parisDestinations = await parisAPI.getParisDetails();
    },
    methods: {
        redirectToParis(){
            this.$router.push('/paris')
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