<template>
    <div class="container my-4">

        <h1 class="mb-5">Mes créations</h1>

        <modale v-bind:revele="revele" v-bind:togglemodale="togglemodale"></modale>
        

        <div v-on:click="togglemodale" class="btn"><img id="cv" src="../assets/images/cv.PNG" alt="L'image de mon cv"></div> <br>

    </div>

</template>

<script>
import modale from './modale.vue'
export default {
    name: 'contenu',

    components: {
        'modale' : modale
    },

    data(){
        return{
            revele: false
        }
    },

    methods: {
        togglemodale: function(){
            this.revele = !this.revele
        }
        
        
    },
}
</script>

<style scoped>
    .btn{
        background-color: #f7d117;
        font-size: 1.2em;
        font-weight: bold;
        margin-left: 40%;
        margin-bottom: 20px;
       
    }
    .btn:hover{
        color: #f7d117;
        background-color: #333;
    }
    h1{
        text-align: center;
    }
    #cv {
        width: 250px;
        height: 300px;
    }
    #commentaire {
        width: 250px;
        height: 300px;
    }
  




</style>