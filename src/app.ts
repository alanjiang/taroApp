import { createApp } from 'vue'
import './app.scss'
const App = createApp({
  onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

import { Tabbar, TabbarItem } from '@nutui/nutui-taro';
import { Home, Category, Find, Cart, My } from '@nutui/icons-vue-taro';

App.use(Tabbar);
App.use(TabbarItem);
App.use(Home);
App.use(Category);
App.use(Find);
App.use(Cart);
App.use(My);

export default App
