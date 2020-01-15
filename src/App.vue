<template>
  <div id="app">
    <app-header />
    <router-view/>
  </div>
</template>

<script>
  import Header from '@/components/Header';

  export default {
    components: {
      appHeader: Header
    }
  }
</script>

<style lang="scss">
@import '~normalize.css/normalize.css';
@import '@/styles/_config';

html {
  font-size: $root-size/16 * 100%; /// Define root font-size for simply use rem
}

#app {
  font-family: font-name('default');
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
