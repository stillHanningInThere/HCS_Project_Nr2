<template>
  <div class="navMenu">
    <h1><RouterLink to="/">HOME</RouterLink></h1>
    <h1 class="title">Jonas Travel Blog</h1>
    <nav>
      <ul class="contactAnd">
        <!-- <li>Title of my blog</li> -->
        <li><RouterLink to="/contact">Contacts</RouterLink></li>
        <li><RouterLink to="/newPost">New Post</RouterLink></li>
        <li><RouterLink to="/LogIn">LogIn</RouterLink></li>
        <li><FontAwesomeIcon icon="fa-solid fa-mountain-sun" ></FontAwesomeIcon></li>
        <!-- <li><a href="#">New Post</a></li>
        <li><a href="#">LogIn</a></li> -->
      </ul>
    </nav>
  </div>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

</script>

<style scoped>
h1 {
  float: left;
  color:white;
  position: relative;
  display: inline-block;
  padding-top: 5px;
}
h1 :visited{
  color: white;
  text-decoration: none;
  text-transform: uppercase;
}
h1 :link{
  text-decoration: none;
}
h1 :before {
  content: "";
  display: block;
  height: 5px;

  background-color: blue;

  position: absolute;
  top: 0%;
  width: 0%;

  transition: all ease-in-out 250ms;
}

h1 :hover::before {
  width: 100%;
}

.title {
  margin-left: 100px;
}

.navMenu {
  border: solid 2px black;
  background-image: url(https://mondsee.salzkammergut.at/fileadmin/user_upload/mondsee/Responsive_Design/Sommer/Seefest/1bzw2Spalten_750x422/Header.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.navMenu ul {
  display: flex;
  flex-direction: row;
  gap: 20px;

  width: 500px;

  list-style-type: none;
  padding: 20px 0;

  justify-content: space-between;
}

nav li {
  position: relative;
  display: inline-block;
  padding-top: 5px;
}

nav a {
  color: white;
  text-decoration: none;
  text-transform: uppercase;
}

nav a::before {
  content: "";
  display: block;
  height: 5px;

  background-color: blue;

  position: absolute;
  top: 0%;
  width: 0%;

  transition: all ease-in-out 250ms;
}

nav a:hover::before {
  width: 100%;
}

.contactAnd {
  float: right;

  text-align: right;
  align-self: flex-end;
}
</style>