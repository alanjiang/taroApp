<template>

  <view>

   <nut-table :columns="columns" :data="data"></nut-table>

  </view>
</template>

<script lang="ts">
  import { reactive, toRefs, h } from 'vue';
  export default {
    props: {},
    setup() {
      const state = reactive({
        columns: [
          {
            title: '姓名',
            key: 'name',
            stylehead: 'font-size:20px;color:red;font-weight:bolder;',
            stylecolumn: 'font-size:10px;color:blue;'
          },
          {
            title: '性别',
            key: 'sex',
            render: (record) => {
              return h(
                'span',
                {
                  style: {
                    color: record.sex === '女' ? 'blue' : 'green'
                  }
                },
                record.sex
              );
            }
          },
          {
            title: '学历',
            key: 'record'
          }
        ],
        data: [
          {
            name: 'Tom',
            sex: '男',
            record: '小学'
          },
          {
            name: 'Lucy',
            sex: '女',
            record: '本科'
          },
          {
            name: 'Jack',
            sex: '男',
            record: '高中'
          }
        ]
      });
      return {
        ...toRefs(state)
      };
    }
  };
</script>

<style lang="scss">



</style>
