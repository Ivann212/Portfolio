<template>
    
    <div class="wrapper my-4" >
       
        <Projet v-bind:title="titre"  date="29 septembre 2023" 
        content="Ce projet à été créer en HTML et CSS"/>
        

        <Projet v-bind:title="titre2" date="30 septembre 2023" 
        content="Ce projet à été coder en HTML, CSS et Javascript"/>

        <Projet v-bind:title="titre3" date="22 septembre 2023" 
        content="Ce Projet est codé en HTML et CSS"/>
        

    </div>

    

</template>

<script setup>
import { ref } from 'vue';
import Projet from './Projet.vue';


const titre = "Le cv"
const titre2 = "Le commentaire"
const titre3 = "Carrière"



    defineProps([
    "title"
    ]) 

    
</script>