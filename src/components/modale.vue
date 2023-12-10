<template>
    <div class="blocmodale">

        <div class="overlay"></div>

        <div class="modale">
            <button class="btn-modale">X</button>

            <!--<div class="cv">
                <img src="../assets/images/cv.PNG" alt="Une photo de mon cv">
                <p>Voici mon cv fait en HTML et en CSS</p>
            </div>

            <div class="carriere">
                <img src="../assets/images/carriere.PNG" alt="Une photo de mon site carriere f1 23">
                <p>Voici mon projet sur un suivi de saison sur un jeux de formule 1</p>
            </div>

            <div class="commentaire">
                <img src="../assets/images/Commentaire.PNG" alt="Voici une image d'un espace commentaire">
                <p>C'est un projet de dynamiser un espace commentaire en javascript</p>
            </div>-->


        </div>

    </div>
</template>



<script setup>
    
    
    

</script>



<style scoped>
      
    .blocmodale{
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
    }
    .overlay{
        background: rgba(0, 0, 0, 0.5);
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 2;
        position: fixed;
    }
  
    
    .modale{
        background: #f1f1f1;
        color: #333;
        z-index: 3;
        width: 600px;
        height: 400px;
        overflow: hidden;
        position: fixed;
    }
    .btn-modale{
        color: #fff;
        background-color: red;
        border-radius: 5px;
        border: none;
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
        padding: 8px 10px;

    }
    .cv image{
        width: 50px;
        height: 20px;
    }
</style>