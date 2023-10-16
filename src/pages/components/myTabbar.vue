<template>
    <view class="container">
     <!-- start  tabbar -->
    <view>
        <nut-tabbar v-model="props.activeName" @tab-switch="tabSwitch"   bottom safe-area-inset-bottom placeholder>
            <nut-tabbar-item v-for="(item, index) in list" :name="item.name" :tab-title="item.title" :icon="item.icon">
            </nut-tabbar-item>
          </nut-tabbar>
    </view>
     <!-- end of tabbar -->
  </view>
</template>

<script>
import { h,ref, reactive, toRefs, defineProps } from 'vue';
import { Tabbar, TabbarItem } from '@nutui/nutui-taro';
import Taro, {useRouter,getCurrentInstance} from '@tarojs/taro';
import { Home, Category, Find, Cart, My } from '@nutui/icons-vue-taro';
export default {
  name: 'Index',
  components: {
    Home,
    Category,
    Find,
    Cart,
    My

  },
 props: {
   activeName: String
 },
  setup(props) {

  console.log('--->属性props='+JSON.stringify(props));

  //const activeName = ref('category');
  const state =  reactive({ list: [
                                         {
                                           title: '首页',
                                           icon: h(Home),
                                           name: 'home'
                                         },
                                         {
                                           title: '分类',
                                           icon: h(Category),
                                           name: 'category'
                                         },
                                         {
                                           title: '发现',
                                           icon: h(Find),
                                           name: 'find'
                                         },
                                         {
                                           title: '购物车',
                                           icon: h(Cart),
                                           name: 'cart'
                                         },
                                         {
                                           title: '我的',
                                           icon: h(My),
                                           name: 'my'
                                         }
                                       ]});

    const jump = () => {

          Taro.navigateTo({
              url: '/pages/table/table',
            });

    };

     const tabSwitch = (item, index) => {
            console.log(item, index);
            console.log('name='+item.name+',index='+index);
            if (item.name == 'category') {

              Taro.redirectTo({
                  url: '/pages/table/table',
              });

            }else if (item.name == 'home') {

               Taro.redirectTo({
                       url: '/pages/index/index',
                 });
            }

     };



    return {
      ...toRefs(state),
      props,
      tabSwitch,
      jump


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
