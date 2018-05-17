<template>
  <div id="home">
    <titles></titles>
    <div class="weui-cells">
      <a v-for="(item, index) in items" class="weui-cell weui-cell_access" :key='index' :href="route + item.goods_id">
        <div class="weui-cell__hd"><img :src="imgUrl + 'statics/images/img2.jpg'" style="width:20px;margin-right:5px;display:block"></div>
        <div class="weui-cell__bd">
          <p>{{ item.name }}11111</p>
        </div>
        <div class="weui-cell__ft">{{ item.selling_price }}</div>
      </a>
    </div>
    <div>数据：{{this.$store.state.user.count}}</div>
    <div @click="getData()">点击</div>
    <div v-for="(item, index ) in a" :key='index'>{{item}}</div>
  </div>
</template>

<script>
  import * as Types from 'store/mutation-types'
  import {mapState, mapMutations} from 'vuex'
  import {imgUrl} from 'config/index'
  import {getUserInfo} from 'api/user'
  import titles from '../../components/common/titles.vue'
  export default {
    name: 'home',
    data() {
      return {
        imgUrl: imgUrl,
        size: '_50x50_100',
        route: '#/detail/',
        items: [1,2],
        a: this.$store.state.arr,
        b: 1
      }
    },
    computed: mapState([
        'user',
        'connt'
      ]),
    methods: {
      ...mapMutations([
        Types.GET_USER_INFO,
        Types.ADD_ARR_INFO
      ]),
      getData: function () {
        this.$store.commit('increment');
      },
      add(t) {
        this.ADD_ARR_INFO({id: t});
      }
    },
    created() {
      this.getData();
      this.GET_USER_INFO;
      this.ADD_ARR_INFO({id: 1});//类似触发action
    },
    components: {
      titles
    }
  }
</script>
