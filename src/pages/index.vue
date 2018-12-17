<template>
  <vs-row class="wrap" vs-type="flex" vs-justify="center">
    <vs-col class="colx" :key="index" type="flex" vs-justify="space-around" vs-align="center" vs-lg="3" vs-sm="5" vs-xs="12" v-for="(card, index) in 7" >
      <vs-card class="cardx">
        <div slot="header">
          <h3>アイスタイルへようこそ !</h3>
        </div>
        <div slot="media">
          <img src="http://recruit.istyle.co.jp/fresh/wordpress/wp-content/uploads/2017/09/bnr01-744_370_v03.jpg">
        </div>
        <div>
          <span>アイスタイルは、1999年の創業以来ずっと「生活者中心の市場創造」をビジョンに掲げています。関連会社やパートナー企業と広く連携し、ビジネスの幅を縦横斜めへと拡張させながら、ワクワクに満ちた生活者中心の市場をつくっていきます。ぜひ一緒に働きませんか？</span>
        </div>
        <div slot="footer">
          <vs-row vs-justify="flex-end">
            <vs-button type="gradient" color="danger" icon="favorite" @click="fav"></vs-button>
            <vs-button color="primary" icon="turned_in_not" @click="bookmark"></vs-button>
          </vs-row>
        </div>
      </vs-card>
    </vs-col>
  </vs-row>
</template>

<script>
import 'material-icons/iconfont/material-icons.css'

export default {
  methods: {
    fav: function () {
      this.$vs.notify({
        title: 'ふぁぼった！!',
        text: 'もっとふぁぼれ',
        color: 'rgb(231, 60, 89)'
      })
    },
    bookmark: function () {
      this.$vs.notify({
        title: 'マジはてブ',
        text: 'SNSでも拡散しろ',
        color: 'rgb(31, 116, 255)'
      })
    }
  }
}
</script>
<style>
  .wrap {
    height: auto;
    min-height: 100%;
    padding: 0 16px;
  }

  .colx {
    margin: 0 8px;
  }
</style>
