<template>
    

    <div class="bloc-modale">
        
        <div class="overlay" v-on:click.stop="$emit('close-modale')"></div>
        
        <div class="modale card">
            <div class="btn-modale btn btn-danger" v-on:click.stop="$emit('close-modale')" >X</div>
                
            <h2>{{ title }}</h2>
            <p>{{ date }}</p>
            <p>{{ content }}</p>
            <p>{{ github }}</p>
            <img class="cv" :src="imageCv" alt="cv">
            <img class="commentaire" :src="imageCommentaire" alt="espace commentaire ">
            <img class="carriere" :src="imageCarriere" alt="carriere F1">
            <img :src="imageCDC" alt="cahier des charges">
            
                 
        </div>
        
        
    </div>

</template>

<script setup>


    defineProps([
        "title",
        "date",
        "content",
        "github",
        "imageCommentaire",
        "imageCv",
        "imageCarriere",
        "imageCDC"



    ])

    defineEmits([
        "close-modale"
    ])
    
 
</script>


<style scoped>
       .bloc-modale{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

    }
    .overlay {
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    
    .modale {
        background-color: #FEF9EF;
        padding: 50px;
        position: fixed;
        top: 30%;
        height: 50%;
        width: 50%;
        overflow-y: auto;
        display: flex;    
        align-items: center;
        color: #495159;

    }
    .btn-modale {
        position: absolute;
        top: 10px;
        right: 10px;
    }
    .commentaire {
        width: 600px;
        height: 600px;
    }
    .carriere {
        width: 600px;
        height: 600px;
    }
    .cv {
        height: 600px;
        width: 500px;
    }



</style>