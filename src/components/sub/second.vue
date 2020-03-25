<template>
    <div class="second">
        {{msg}}
         <p><router-link to="/first">去first页面</router-link></p>
    </div>
</template>

<script>
export default {
    name:'second',
    data(){
        return{
            msg:'Welcome to FirstApp'
        }
    }
}
</script>

<style>
  
</style>