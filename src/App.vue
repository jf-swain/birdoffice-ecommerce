<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '~normalize.css/normalize.css';
@import '@/styles/_config';

html {
  font-size: 62.5%;
}

#app {
  font-family: font-name('default');
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
