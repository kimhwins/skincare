<style src="./style.css">
</style>

<script src="https://www.gstatic.com/firebasejs/7.2.3/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.2.3/firebase-analytics.js"></script>

<template>
  <v-app>
    <v-app-bar
      light
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Skincare App</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text>
          <a id="nav-link" href="/">Nav</a>
        </v-btn>
        <v-btn text>
            <router-link id="nav-link" to="/home">Home</router-link>
        </v-btn>
        <v-btn text>
          <router-link id="nav-link" to="/routines">Routines</router-link>
        </v-btn>
        <v-btn text>
          <router-link id="nav-link" to="/shelf">Shelf</router-link>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <router-view/>
<!--     <v-content>
      <HelloWorld/>
    </v-content> -->
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
