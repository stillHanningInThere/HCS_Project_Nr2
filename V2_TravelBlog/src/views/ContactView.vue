<template>
  <div class="about">
    <div class="text">
      <h3>- Traveling is great to ged rid of preduices and discover new places. The best place to keep a clear head is on the road. But if you focus to much on beeing away you tend to miss what is right in front of you -</h3>
    </div>
    <hr>
    <div class="details">
      <h3>Jonas Hanning</h3>
      <h3>Barmbeker Str. 5, 22303 Hamburg</h3>
      <h3>Mail: jonashanning@gmx.de</h3>
      <h3>PhoneNumber: +491733767111 </h3>
      <h3>Everything you see is because of the great Fullstack Course @ the Hamburg Coding School GmbH</h3>
    </div>
  </div>
</template>

<style scoped>
.about {
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    
    align-items: center;
    text-align: center;
    justify-content: center;
    padding: auto;
    background-image: url(https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-color: wheat
  }
.about > .details{
margin: 25px 25px 25px 25px;
}

.about > .text{
width:650px;
margin-left: 10%;
margin-right: 10%;
margin-bottom: 150px;
}

h3{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color:black;
  text-shadow: 4px 4px 3px rgba(0,0,0,0.2)
}
</style>