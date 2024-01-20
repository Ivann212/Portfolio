<template>

    <div class="btn" @click="openModale"><h2>{{ title }}</h2>
       
    </div>
   
        
        
    <Modale v-if="revele" v-on:close-modale="closeModale"
     v-bind:title="title" v-bind:date="date" v-bind:content="content" 
     v-bind:github="github" v-bind:image-carriere="imageCarriere"  
     v-bind:image-cv="imageCv" v-bind:image-commentaire="imageCommentaire" 
     v-bind:image-c-d-c="imageCDC"/>
     
</template>


<script setup>
import Modale from './modale.vue';
import { ref } from 'vue'

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
    let revele = ref(false);

    const openModale = () => {
    revele.value = true;
}
    const closeModale = () => {
    revele.value = false;
}
const imageProjet = ref("../../public/cv.PNG")

</script>

<style scoped>
.btn{
    background-color: #17C3B2;
    color: #495159;
    font-size: 1.1em;
    font-weight: bold;
    margin-left: 40%;
    margin-bottom: 20px;

       
}
.btn:hover{
    color: #17C3B2;
    background-color: #495159;
    }
img {
    width: 200px;
    height: 300px;
}
.cv {
    width: 200px;
    height: 300px;
}



</style>