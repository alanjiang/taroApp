<template>

    <view class="container">

     <view style="color: red; text-align: center;"> 我是购物车页面 </view>


     <!-- start  tabbar -->
    <view>

       <MyTabbar :activeName="activeName" />

    </view>
     <!-- end of tabbar -->

  </view>
</template>

<script>
import { h,ref, reactive, toRefs } from 'vue';
import MyTabbar from '../components/MyTabbar'
export default {
  name: 'Index',
  components: {
       MyTabbar
  },
  setup() {

    const activeName = ref('cart');



    return {


      activeName

    }
  }
}
</script>

<style lang="scss">

.container {

  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;


}

.footer {

  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  right: 0;


}


</style>
