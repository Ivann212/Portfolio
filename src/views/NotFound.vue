<template>
    <div class="erreur">
        
        
        <img src="../assets/images/Error.png" alt="Error">
        <RouterLink class="btn btn-light-green" to="/">Revenir à l'accueil</RouterLink>
    
    
    </div>
        
    </template>
    
    <script setup>
    import { RouterLink } from 'vue-router';
       
    </script>
    <style scoped>
    
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
       
    
    
    </style>
    