<template>
    <div class="PictureCoulmn">
        <div class="PictureDiv">1</div>
        <div class="PictureDiv">2</div>
        <div class="PictureDiv">3</div>
        <div class="PictureDiv">4</div>
        <div class="PictureDiv">5</div>
        <div class="PictureDiv">6</div>
        <div class="PictureDiv">7</div>
        <div class="PictureDiv">8</div>
        <div class="PictureDiv">9</div>
    </div>
</template>

<style scoped>
    .PictureColumn{
        display: flex;

        flex-direction: row;

        flex-wrap: wrap;

        width: 700px;
        
    }

    .PictureDiv{
        background-color: green;
        border: solid 2px white;
        width: 150px;
        height: 150px;
    }
</style>