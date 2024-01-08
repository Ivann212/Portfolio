<template>
    
    <div class="wrapper my-4" >
       
        <Projet v-bind:title="titre"  date="29 septembre 2023" 
        content="Ce projet à été créer en HTML et CSS" github="https://github.com/Ivann212/Mon-CV" v-bind:imageCV="imageCV"/>
        

        <Projet v-bind:title="titre2" date="30 septembre 2023" 
        content="Ce projet à été coder en HTML, CSS et Javascript" github="https://github.com/Ivann212/com"/>

        <Projet v-bind:title="titre3" date="22 septembre 2023" 
        content="Ce Projet est codé en HTML et CSS" github="https://github.com/Ivann212/Carriere"/>
        

    </div>
    
    <form method="post">
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
     <button type="submit" href= test.email@gmail.com>Envoyer le message</button>
    </div>
</form>
   

    

</template>

<script setup>
import { ref } from 'vue';
import Projet from './Projet.vue';


const titre = "Le cv"
const titre2 = "Le commentaire"
const titre3 = "Carrière"
const imageCV = ref("../assets/images/cv.PNG")



    defineProps([
    "title"
    ]) 

    
</script>

<style scoped>
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

ul {
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

</style>