<template>
  <v-app id="example-8" dark toolbar>

    <app-header></app-header>

    <main>
      <v-container fluid>
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
      </v-container>
    </main>

  </v-app>
</template>

<script>

import Header from './components/Header.vue'
export default {

  components: {
    'app-header': Header
  },

  data() {
    return {

    }
  }
}
</script>

<style lang="stylus">
  @import './stylus/main'
</style>

<style lang="scss">

.slide-enter-active {
  animation: slide-in 200ms  ease-out forwards;
}

.slide-leave-active {
  animation: slide-out 200ms  ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  form {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }

}
</style>

