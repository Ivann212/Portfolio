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

    <div class="erreur">
        
        
        <img src="../assets/images/Error.png" alt="Error">
        <RouterLink class="btn btn-light-green" to="/">Revenir à l'accueil</RouterLink>
    
    
    </div>
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
    import { RouterLink } from 'vue-router';
       
    </script>
<style scoped>
header {
  background-color: #FE6D73;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

}
#logo{
  height: 150px;
  width: 160px;
  margin: 20px; 
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
    
.erreur{
    display: flex;
    flex-direction: column;  
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
    padding-top: 20px;
        
        
}
img{
    width: 50%;
    height: 50%;
}
.btn{
    background-color: white;
    border: 3px solid black;
}
footer{
  background-color: #FE6D73;
  color: #495159;
  bottom: 0;
  right: 0;
  left: 0;
}   
    
    
    </style>
    