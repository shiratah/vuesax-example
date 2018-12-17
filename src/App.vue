<template>
  <div id="app">
    <vs-navbar class="nabarx" :color="colorx">

      <vs-navbar-title>
        vuesaxを触ってみる
      </vs-navbar-title>

      <vs-spacer></vs-spacer>

      <vs-navbar-item index="0">
        <router-link to='/'>Top</router-link>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <router-link to='/example'>Example</router-link>
      </vs-navbar-item>
    </vs-navbar>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  data: () => {
    return {
      colorx: '#5bb431'
    }
  }
}
</script>

<style>
  html, body {
    height: 100%;
  }
  #app {
    height: 100%;
    min-height: 100%;
  }
  .nabarx {
    margin-bottom: 1em;
  }
</style>
