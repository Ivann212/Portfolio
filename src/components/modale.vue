<template>
    

    <div class="bloc-modale">
        
        <div class="overlay" v-on:click.stop="$emit('close-modale')"></div>
        
        <div class="modale card">
            <div class="btn-modale btn btn-danger" v-on:click.stop="$emit('close-modale')" >X</div>
                
            <h2>{{ title }}</h2>
            <p>{{ date }}</p>
            <p>{{ content }}</p>
          
            
              
                
        </div>
        
        
    </div>

</template>

<script setup>

    defineProps([
        "title",
        "date",
        "content"
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
        background-color: #f1f1f1;
        color:#333;
        padding: 50px;
        position: fixed;
        top: 30%;
        height: 50%;
        width: 50%;
        overflow-y: auto;

    }
    .btn-modale {
        position: absolute;
        top: 10px;
        right: 10px;
    }


</style>