<template>
  <div id="app">
     <div v-if="$route.meta.keepAlive">
       <header-nav></header-nav>
         <router-view />
        <app-footer></app-footer>
     </div>


  </div>
</template>

<script>
import headerNav from './components/Header'
import AppFooter from './components/Footer'
export default {
  name: "App",
  components: {
   headerNav,
   AppFooter
  },
  data() {
    return {
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
