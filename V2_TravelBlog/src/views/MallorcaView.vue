<template>
<div class="body">
    <div class = "destinationWrapper"
    v-for="(mallorcaPlaces, index) in mallorcaDestinations" :key="index"
    @click="redirectToMallorca">
        <div class="destinationTextDiv">
            <p>Title: {{mallorcaPlaces.title}}</p>
            <p>Accomodation: {{mallorcaPlaces.location}}</p>
            <p>Visiting Date: {{ mallorcaPlaces.visitingDate }}</p>
            <p>Author: {{ mallorcaPlaces.author }}</p>
            <p>text: {{mallorcaPlaces.text}}</p>
        </div>
    </div>
    <div class="PictureColumnDiv"
        v-for="(mallorcaPics, index) in mallorcaDestinationsTwo" :key="index">
            <div class="PictureDiv">
                <img :src="mallorcaPics.one" alt="">
            </div>
            <div class="PictureDiv">
                <img :src="mallorcaPics.two" alt="">
            </div>
            <div class="PictureDiv">
                <img :src="mallorcaPics.three" alt="">
            </div>
            <div class="PictureDiv">
                <img :src="mallorcaPics.four" alt="">
            </div>
            <div class="PictureDiv">
                <img :src="mallorcaPics.five" alt="">
            </div>
            <div class="PictureDiv">
                <img :src="mallorcaPics.six" alt="">
            </div>
            <div class="MapDiv">
            <MallorcaMapVue />
        </div>
</div>
</div>
</template>

<script>
import mallorcaAPI from "../services/mallorcaAPI"
import mallorcaImagesAPI from "../services/mallorcaImagesAPI";
import MallorcaMapVue from "../components/MallorcaMap.vue";

export default {
    data: function() {
        return {
            mallorcaDestinations: [],
            mallorcaDestinationsTwo: []
        };
    },
    created: async function() {
        this.mallorcaDestinations = await mallorcaAPI.getMallorcaDetails();
        this.mallorcaDestinationsTwo = await mallorcaImagesAPI.getMallorcaPictures();
    },
    components: { MallorcaMapVue }
}
</script>

<style scoped>
.body {
    margin: 0;

    background-image: url(https://s3-eu-west-1.amazonaws.com/assets.pukit.de/roadcyclingde/wp-content/uploads/2021/04/JPEGRennrad-Mallorca-Fotos-4.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    /* height: 100vh; */

    font-family: garamond;
    
}
.destinationWrapper{
    text-align: center;
    display: flex;
    flex-direction: column;
    float: right;
}


.destinationTextDiv{
    width: 500px;
    height: 900px;
	overflow:hidden;
	background-color:#FFF;
	color:#222;
	font-style: italic;
	font-weight:normal;
	font-size:25px;
	resize:none;
	line-height:40px;
	padding-left:100px;
	padding-right:100px;
	padding-top:45px;
	padding-bottom:10px;
	background-image:url(https://static.tumblr.com/maopbtg/E9Bmgtoht/lines.png), url(https://static.tumblr.com/maopbtg/nBUmgtogx/paper.png);
	background-repeat:repeat-y, repeat;
	-webkit-border-radius:12px;
	border-radius:12px;
	-webkit-box-shadow: 0px 2px 14px #000;
	box-shadow: 0px 2px 14px #000;
	border-top:1px solid #FFF;
	border-bottom:1px solid #FFF;
    margin-left: 50px;
    margin-right: 50px;
    margin-bottom: 50px;
    margin-top: 50px;
    text-align: center;
}
.destinationTextDiv > p{
    margin-top: 5px;
    margin-bottom: 20px;
}

.PictureColumnDiv{
    display: flex;

    flex-direction: row;

    flex-wrap: wrap;

    justify-content: center;

    width: 500px;

    float: left;

    margin-left: 50px;
    margin-right: 50px;
    margin-bottom: 50px;
    margin-top: 50px;
}

.PictureDiv{
        
        border: solid 2px white;
        width: 150px;
        height: 150px;

        margin: 5px 5px 5px 5px;
        border-radius: 10%;
    }

.PictureDiv >img{
    width: 150px;
    height: 150px;

    border-radius: 10%;

   
}

.PictureDiv >img:hover{
    transform: scale(1.7);
    transition: all 0.5s ease;
    float: none;
}

.MapDiv{
    width: 475px;
    height: 400px;
    
    float: left;
    margin-left: 4%;
    margin-top: 50px;
    border-radius: 5%
}
</style>