<template>
    <div class="first-app">
        {{msg}}
         <confirm text="注册" @message="getMessage"></confirm>
         <p><router-link to="/second">去second页面</router-link></p>
    </div>
</template>

<script>
import Confirm from '../sub/Confirm'
export default {
    name:'First',
    components:{
        Confirm
    },
    data(){
        return{
            msg:'Welcome to FirstApp'
        }
    },
    methods: {
        getMessage(val){
            alert(val);
        }
    }
}
</script>

<style lang="less" scoped>
    .first-app{
        color:#ff0000;
        p{
            a{
                text-decoration: none;
            }
        }
    }
</style>