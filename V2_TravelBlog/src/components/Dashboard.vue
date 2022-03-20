<template>
  <div class="wrapperDiv">
    <div class="overviewDiv">
        <DashboardDestination />
    </div>

    <div class="weatherDiv">
      <SeconMapVue />
    </div>
  </div>
</template>

<script>
import DashboardDestination from "./dashboardDestination.vue";
import SeconMapVue from "./SeconMap.vue";

export default {
  components: {
    DashboardDestination,
    SeconMapVue
}
};
</script>

<style scoped>
.wrapperDiv {
  display: flex;
}

.wrapperDiv > div {
  width: 50vw;
  height: 100vh;
}

.overviewDiv > .DestinationDiv{
  width: 10px;
  height: 10px;
}

.overviewDiv {
  background-image: url(https://www.itakeyou.co.uk/wp-content/uploads/2021/05/brown-wallpaper-1-3.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;

  flex-direction: row;

  flex-wrap: wrap;

  justify-content: center;

  width: 10px;
  height: 10px;
}

.overviewDiv > div {
  width: 250px;
  height: 400px;
  background-color: yellow;

  margin: 25px 25px 25px 25px;

  border-radius: 20%;
}

.weatherDiv {
  background-color: green;
}
</style>