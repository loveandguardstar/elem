<template>
  <div id="app">
    <v-header v-bind:seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <a v-link="{path:'/goods'}">商品</a>
      </div>
      <div class="tab-item">
        <a v-link="{path:'/rating'}">评论</a>
      </div>
      <div class="tab-item">
        <a v-link="{path:'/seller'}">商家</a>
      </div>
    </div>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import VHeader from 'components/header/header.vue';
const ERROR_OK = 0;

export default {

  data() {
    return {
      seller: {}
    };
  },
  components: {
    VHeader
  },
  created() {
    this.$http.get('/api/seller').then((response) => {
      response = response.body;
      if (response.errno === ERROR_OK) {
        this.seller = response.data;
      }
    });
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl"
  .tab
    display:flex
    width: 100%
    height: 40px
    inline-height: 40px
    border-1px(rgba(7, 17, 27, 1))
    .tab-item
      flex 1
      text-align: center
      & > a
        display: block
        padding-top: 15px
        font-size: 14px
        color: rgb(77, 85, 93)
        &.active
          color: rgb(200, 20, 20)
</style>
