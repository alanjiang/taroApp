<template>
    <view class="container">
     <!-- start  tabbar -->

        <nut-tabbar v-model="props.activeName" @tab-switch="tabSwitch"   bottom safe-area-inset-bottom placeholder>
            <nut-tabbar-item v-for="(item, index) in list" :name="item.name" :tab-title="item.title" :icon="item.icon">
            </nut-tabbar-item>
          </nut-tabbar>

     <!-- end of tabbar -->
  </view>
</template>

<script>
import { h,ref, reactive, toRefs, defineProps } from 'vue';
import { Tabbar, TabbarItem } from '@nutui/nutui-taro';
import Taro, {useRouter,getCurrentInstance} from '@tarojs/taro';
import { Home, Category, Add, Cart, My } from '@nutui/icons-vue-taro';
export default {
  name: 'Index',
  components: {
    Home,
    Category,
    Add,
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
                                           title: '收藏',
                                           icon: h(Add),
                                           name: 'add'
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
     const forward = (name) => {

          const pages = Taro.getCurrentPages();
          console.log('--->pages.length='+pages.length);
          let route = '';
          if ( name == 'category') {
             route = 'pages/category/category'
          }else if (name == 'home') {
             route = 'pages/index/index'
          }else if (name == 'cart') {
             route = 'pages/cart/cart'
          }else if (name == 'my') {
             route = 'pages/my/my'
          }else if (name == 'add') {
              route = 'pages/add/add'
          }
          if ( pages.length > 0 ) {
              pages.forEach( page => {
                  console.log('--->page.route='+page.route);
               } );

          }

          let index =  pages.findIndex( (page, index) => page.route == route);
          console.log('index='+index);
          if (index != -1) {

              console.log('found the page in  Taro.getCurrentPages(),pages.length='+pages.length+',index='+index);
              let delta =  pages.length - index;
              console.log('--->delta='+delta);



              if ( pages.length < 5) {

                 if (pages[pages.length - 1].route == route ) {

                     console.log('--->重复点击<----');

                 }else{

                    if (pages.length == 1) {

                      Taro.navigateTo({
                         url: '/'+route
                       });
                   }else{
                      Taro.navigateBack({
                          delta:  delta
                      });
                   }


                 }



              }else{
                  Taro.navigateTo({
                     url: '/'+route
                  });
              }
          }else{
              Taro.navigateTo({
                  url: '/'+route
              });

          }


     };

      const getRoute = (name) => {

               const pages = Taro.getCurrentPages();
               console.log('--->pages.length='+pages.length);
               let route = '';
               if ( name == 'category') {
                  route = 'pages/category/category'
               }else if (name == 'home') {
                  route = 'pages/index/index'
               }else if (name == 'cart') {
                  route = 'pages/cart/cart'
               }else if (name == 'my') {
                  route = 'pages/my/my'
               }else if (name == 'add') {
                   route = 'pages/add/add'
               }

               return '/'+route;


          };

     const tabSwitch = (item, index) => {
            console.log('--->activeName='+props.activeName);
            console.log(item, index);
            console.log('name='+item.name+',index='+index);
            const pages = Taro.getCurrentPages();
            if (pages.length < 5) {
              Taro.navigateTo({
                url: getRoute(item.name)
              });
            }else{

               Taro.reLaunch({
                  url: getRoute(item.name)
                });
            }


     };

    return {
      ...toRefs(state),
      props,
      tabSwitch



    }
  }
}
</script>

<style lang="scss">

.container {

 // 加入该属性
 // 兼容 ios 11.2 以下版本
 padding-bottom: constant(safe-area-inset-bottom);
 // 兼容 ios 11.2 以上版本
 padding-bottom: env(safe-area-inset-bottom);

}




</style>
