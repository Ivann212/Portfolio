<template>
    <div class="container mb-5">

        <h1 class="mb-5">une modale de vue</h1>
        <modale></modale>


    </div>

</template>
<script>

    import Modale from './modale.vue'

    export default{
        name:'contenu',
        components : {
            'modale': Modale
        }
    }


</script>

<style>
</style>