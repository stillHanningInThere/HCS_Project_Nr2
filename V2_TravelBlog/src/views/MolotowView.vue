<template>
<div class="body">
    <div class = "destinationWrapper"
    v-for="(moloPlaces, index) in molotowDestinations" :key="index">
    <div class="destinationTextDiv">
        <p>Title: {{moloPlaces.title}}</p>
        <p>Accomodation: {{moloPlaces.location}}</p>
        <p>Visiting Date: {{ moloPlaces.visitingDate }}</p>
        <p>Author: {{ moloPlaces.author }}</p>
        <p>{{moloPlaces.text}}</p>
    </div>
    
    </div>
    <div class="PictureColumnDiv"
        v-for="(molo, index) in molotowPics" :key="index">
            <div class="PictureDiv">
                <img :src="molo.one" alt="">
            </div>
            <div class="PictureDiv">
                <img :src="molo.two" alt="">
            </div>
            <div class="PictureDiv">
                <img :src="molo.three" alt="">
            </div>
            <div class="PictureDiv">
                <img :src="molo.four" alt="">
            </div>
            <div class="PictureDiv">
                <img :src="molo.five" alt="">
            </div>
            <div class="PictureDiv">
                <img :src="molo.six" alt="">
            </div>
            <div class="PictureDiv">
                <img :src="molo.seven" alt="">
            </div>
            <div class="PictureDiv">
                <img :src="molo.eight" alt="">
            </div>
            <div class="PictureDiv">
                <img :src="molo.nine" alt="">
            </div>
        </div>
</div>
</template>

<script>
import molotowAPI from "../services/molotowAPI"
import molotowBands from "../services/molotowImagesAPI"

export default {
    data: function() {
        return {
            molotowDestinations: [],
            molotowPics: []
        };
    },
    created: async function() {
        this.molotowDestinations = await molotowAPI.getMolotowDetails();
        this.molotowPics = await molotowBands.getMolotowPictures();
    }
}
</script>

<style scoped>
.body {
    margin: 0;

    background-image: url(https://christoph-bellin.s3.eu-central-1.amazonaws.com/2014/10/1bPXMZPFo4-11840111655-afa22d47eb_l2.jpg);
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
</style>