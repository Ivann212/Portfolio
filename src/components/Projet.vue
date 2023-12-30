<template>

    <div class="btn" @click="openModale"><h2>{{ title }}</h2></div>
        
        
    <Modale v-if="revele" v-on:close-modale="closeModale"
     v-bind:title="title" v-bind:date="date" v-bind:content="content"/>
     

    
   


</template>


<script setup>
import Modale from './modale.vue';
import { ref } from 'vue'

defineProps([
        "title",
        "date",
        "content"
    ])
    let revele = ref(false);

    const openModale = () => {
    revele.value = true;
}
    const closeModale = () => {
    revele.value = false;
}

</script>

<style scoped>

.btn{
        background-color: #f7d117;
        font-size: 1.1em;
        font-weight: bold;
        margin-left: 40%;
        margin-bottom: 20px;

       
    }
    .btn:hover{
        color: #f7d117;
        background-color: #333;
    }



</style>