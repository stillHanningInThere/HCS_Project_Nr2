<template>
    <div class="body">
        <div class = "destinationWrapper"
        v-for="(swedenPlaces, index) in swedenDestinations" :key="index"
        >
                <div class="destinationTextDiv">
                    <p>Title: {{swedenPlaces.title}}</p>
                    <p>Accomodation: {{swedenPlaces.location}}</p>
                    <p>Visiting Date: {{ swedenPlaces.visitingDate }}</p>
                    <p>Author: {{ swedenPlaces.author }}</p>
                    <p>{{swedenPlaces.text}}</p>
            </div>
        </div>
        <div class="PictureColumnDiv"
        v-for="(swedenPics, index) in swedenNature" :key="index">
            <div class="PictureDiv">
                <img :src="swedenPics.one" alt="">
            </div>
            <div class="PictureDiv">
                <img :src="swedenPics.two" alt="">
            </div>
            <div class="PictureDiv">
                <img :src="swedenPics.three" alt="">
            </div>
            <div class="PictureDiv">
                <img :src="swedenPics.four" alt="">
            </div>
            <div class="PictureDiv">
                <img :src="swedenPics.five" alt="">
            </div>
            <div class="PictureDiv">
                <img :src="swedenPics.six" alt="">
            </div>
            <div class="PictureDiv">
                <img :src="swedenPics.seven" alt="">
            </div>
            <div class="PictureDiv">
                <img :src="swedenPics.eight" alt="">
            </div>
            <div class="PictureDiv">
                <img :src="swedenPics.nine" alt="">
            </div>
        </div>
        <div class="MapDiv">
            <SwedenMapVue />
        </div>
        
    </div>
</template>

<script>
import SwedenMapVue from '../components/SwedenMap.vue'
import swedenAPI from "../services/swedenAPI"
import swedenPictures from "../services/swedenImagesAPI"

export default {
    data: function () {
        return {
            swedenDestinations: [],
            swedenNature: []
        };
    },
    created: async function () {
        this.swedenDestinations = await swedenAPI.getSwedenDetails();
        this.swedenNature = await swedenPictures.getSwedenPictures();
    },
    components: { SwedenMapVue }
}
</script>

<style scoped>

.body {
    margin: 0;

    background-image: url(https://images.unsplash.com/photo-1592743263126-bb241ee76ac7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJhbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80);
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
    border-radius: 5%
}
</style>
