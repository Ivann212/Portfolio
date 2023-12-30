<template>
    <!--Div pour le cv-->
    <div class="bloc-modale" v-if="revele">

        <div class="overlay" v-on:click="togglemodale"></div>

        <div class="modale card">
            <div v-on:click="togglemodale" class="btn-modale btn btn-danger">X</div>
             
        </div>

    </div>
    


</template>

<script setup>

    const props = defineProps(['revele','togglemodale'])
    
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
        background-color: #f1f1f1;
        color:#333;
        padding: 50px;
        position: fixed;
        top: 30%;
      
    }
    h2{
        text-align: center;
        text-decoration: underline;
    }
    .btn-modale {
        position: absolute;
        top: 10px;
        right: 10px;
        

    }
    img {
        padding-bottom: 20px;
    }
    p {
        padding-bottom: 10px;
    }
    a {
        text-decoration: none;
        color: #333;
        text-align: center;
        font-size: 1.4em;
        font-weight: bold;
    }
    a:hover {
        color: #f7d117;
        text-decoration: underline;
    }
   


</style>