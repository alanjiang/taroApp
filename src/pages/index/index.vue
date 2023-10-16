<template>

<!---
     <view class="index">
    <view>
      <img src="" alt="">
    </view>
    {{ msg }} <Dongdong />
    <view class="btn">
      <nut-button type="primary" @click="handleClick('text', msg2, true)">点我</nut-button>
      <nut-button type="primary" @click="jump">跳转</nut-button>
    </view>
    <nut-toast :msg="msg2" v-model:visible="show" :type="type" :cover="cover"/>

      <nut-row>
        <nut-col :span="12">
          <div class="flex-content">span:12</div>
        </nut-col>
        <nut-col :span="12">
          <div class="flex-content flex-content-light">span:12</div>
        </nut-col>
      </nut-row>
     </view>
     -->


    <view class="container">


     <!-- start  tabbar -->
    <view class="footer">
     <nut-tabbar @tab-switch="tabSwitch">
         <nut-tabbar-item tab-title="标签">
           <template #icon>
             <Home></Home>
           </template>
         </nut-tabbar-item>
         <nut-tabbar-item tab-title="标签">
           <template #icon>
             <Category></Category>
           </template>
         </nut-tabbar-item>
         <nut-tabbar-item tab-title="标签">
           <template #icon>
             <Find></Find>
           </template>
         </nut-tabbar-item>
         <nut-tabbar-item tab-title="标签">
           <template #icon>
             <Cart></Cart>
           </template>
         </nut-tabbar-item>
         <nut-tabbar-item tab-title="标签">
           <template #icon>
             <My></My>
           </template>
         </nut-tabbar-item>
       </nut-tabbar>
       </view>
     <!-- end of tabbar -->

  </view>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { Dongdong } from '@nutui/icons-vue-taro';
import { Tabbar, TabbarItem } from '@nutui/nutui-taro';
import Taro,{useRouter,getCurrentInstance} from '@tarojs/taro';
import { Home, Category, Find, Cart, My } from '@nutui/icons-vue-taro';

export default {
  name: 'Index',
  components: {
    Dongdong,
    Home,
    Category,
    Find,
    Cart,
    My
  },
  setup() {
    const state = reactive({
      msg: '欢迎使用 NutUI4.0 开发小程序',
      msg2: '你成功了～',
      type: 'text',
      show: false,
      cover: false
    });

    const jump = () => {

          Taro.navigateTo({
              url: '/pages/table/table',
            });

    };

    const handleClick = (type, msg, cover = false) => {
      state.show = true;
      state.msg2 = msg;
      state.type = type;
      state.cover = cover;

    };

    const tabSwitch = (item, index) => {
      console.log(item, index);
    };

    return {
      ...toRefs(state),
      handleClick,
      jump,
      tabSwitch
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


.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.nut-row {
  overflow: hidden;
  margin-bottom: 15px;
}
.nut-row:not(:last-child) .nut-col {
  margin-bottom: 15px;
}
.flex-content {
  line-height: 40px;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  background: #ff8881;
}
.flex-content-light {
  background: #ffc7c4;
}
.flex-content-height {
  height: 50px;
}


</style>
