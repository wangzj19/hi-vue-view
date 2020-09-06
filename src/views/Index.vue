<template>
    <div>
        <nav-menu></nav-menu>
        <div class="body">
        <router-view></router-view>
        </div>
        <div class="footer"></div>
        <Footer></Footer>
        
    </div>
</template>


<script>
import NavMenu from './common/NavMenu.vue'
import Footer from './common/Footer.vue'
export default {
    components: {
        NavMenu,
        Footer,
        },
    
}
</script>

<style scoped>
.body{
    
    background-color: rgb(255, 255, 255);
    padding: 40px,0px;
}
.footer{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40px;/*脚部的高度*/
    clear:both;
}

</style>