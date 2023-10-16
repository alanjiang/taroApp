<template>

    <view class="container">

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

    const activeName = ref('home');

    const jump = () => {

          Taro.navigateTo({
              url: '/pages/table/table',
            });

    };





    return {

      jump,
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
