<template>

  <header>
    <img id="logo" src="../assets/images/Logo.jpg" alt="Mon logo">
    <ul id="menu">
      <li>
        <a href="#titre">Présentation</a>
      </li>
      <li>
        <a href="#projet">Mes projets</a>
      </li>
      <li>
        <a href="#formulaire">Contact</a>
      </li>
    </ul>
  </header>

  <main> 
    <h1 id="titre">Voici mon portfolio !</h1>
    <p>Je m'appelle Ivann Rambaud et je suis étudiant developpeur web full stack au Centre Européen de Formation. J'ai actuellement 18 ans
      et j'ai découvert  le développement web au lycée.
       Bienvenue sur mon portfolio, vous retrouverez ici quelques-unes de mes créations !</p>
    
    <div id="projet" class="wrapper my-4" >
       
      <Projet v-bind:title="titre"  date="29 septembre 2023" 
      content="Ce projet à été créer en HTML et CSS" github="https://github.com/Ivann212/Mon-CV" v-bind:imageCv="imageCv"/>
        

      <Projet v-bind:title="titre2" date="30 septembre 2023" 
      content="Ce projet à été coder en HTML, CSS et Javascript" github="https://github.com/Ivann212/com" v-bind:imageCommentaire="imageCommentaire"/>

      <Projet v-bind:title="titre3" date="22 septembre 2023" 
      content="Ce Projet est codé en HTML et CSS" github="https://github.com/Ivann212/Carriere" v-bind:imageCarriere="imageCarriere"/>
      
        

    </div>
    <a href="#logo" class="haut"> <img src="../assets/images/fleche.png" alt="fleche"></a>
    
    <form id="formulaire" method="post" action="../views/NotFound.vue">
      <ul>
        <li>
          <label for="name">Nom&nbsp;:</label>
          <input type="text" id="name" name="user_name" />
        </li>
        <li>
          <label for="mail">E-mail&nbsp;:</label>
          <input type="email" id="mail" name="user_mail" />
        </li>
        <li>
          <label for="msg">Message&nbsp;:</label>
          <textarea id="msg" name="user_message"></textarea>
        </li>
      </ul>

      <div class="button">
        <button type="submit">Envoyer le message</button>
      </div>
    </form>

   
  </main>
  <footer>
    <p>Lien vers les réseaux :</p>

    <div id="reseaux">
      <a href="https://www.facebook.com/ivann.rambaud" target="_blank"><img id="facebook" src="../assets/images/facebook.png" title="Mon Facebook" alt="Voici un lien vers mon Facebook"></a>
      <a href="https://www.linkedin.com/in/ivann-rambaud-864176247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank"><img id="linkedin" src="../assets/images/linkedin.png" title="Mon Linkedin" alt="Voici mon lien vers mon linkedin"></a>
      <a href="https://github.com/Ivann212" target="_blank"><img id="github" src="../assets/images/github.png" title="Mon github" alt="Voici le lien vers mon repository github"></a>
    </div>

    <div id="date">
      <p>derniere mise à jour: </p> 
      <time datetime="2023-11-25T17:54+02:00"> mardi 9 janvier 2024</time>
    </div>


  </footer>
</template>

<script setup>
import { ref } from 'vue';
import Projet from './Projet.vue';


const titre = "Le cv"
const titre2 = "Le commentaire"
const titre3 = "Carrière"
const imageCv = ref("../../public/cv.PNG")
const imageCarriere = ref("../../public/carriere.PNG")
const imageCommentaire = ref("../../public/Commentaire.PNG")

defineProps([
  "title",
  "date",
  "content",
  "github",
  "imageCv",
  "imageCarriere",
  "imageCommentaire"
]) 

    
</script>

<style scoped>

#titre{
  text-align: center;
  padding-bottom: 20px;
  padding-top: 60px;
}
.wrapper {
    padding-top: 30px;
}
form {
  margin: auto;
  margin-bottom: 30px;
  width: 400px;
  padding: 1em;
  border: 2px solid #ccc;
  border-radius: 1em;
}

form ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

form li + li {
  margin-top: 1em;
}

label {
  display: inline-block;
  width: 90px;
  text-align: right;
}
header {
  background-color: #FE6D73;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  

}
#menu {
  display: flex;
  padding:0 ;
  
}
header ul {
  list-style: none;
}
header a {
  padding-top: 20px ;
  display: block;
  min-width: 120px;
  text-align: center;
  text-decoration: none;
  color: #495159;
  background-color: #17C3B2;
  border: 2px solid #FE6D73;
  font-size: 1.2em;
  font-weight: 600;
  border-radius: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 5px;
  padding-right: 5px;
  margin: 10px;
}
header a:hover {
  background-color: #FE6D73;
  border:2px solid #17C3B2;
}
header a:active {
  border-bottom: 3px solid #0088cc;
}
.haut {
  display: flex;
  width: 30px;
}

</style>