<!-- 

<script>
import HelloWorld from './components/HelloWorld';

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
-->
<style src="../../style.css">
</style>

<!-- HOME PAGE -->

<template>
  <v-app id="inspire">
    <div class="white">
             <div class="row" id="help">
  <div class="column-1">
    <div class="title">
        <h1>Routines</h1>
    </div>
  </div>
  <div class="column-2 right-aligned">
        <v-btn
        color="#4DB6AC"
        class="mr-4">
            <router-link id="link" to="/newroutine">Add New Routine</router-link>
      </v-btn>
</div>
</div>

              <h2 class="non-title-h2">Your Routines</h2>
      <v-container id="no-p" grid-list-md fluid>
        <v-row dense>
          <v-col
          v-for="routine in routines"
          :key="routine.title"
          :cols="4"
          >
          <v-card
          max-width="90%"
          outlined
          class="routines"
          :to="'/' + routine.url"
          >
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title id="routine-title" v-text="routine.title"></v-list-item-title>
              <div class="overline mb-4" v-text="routine.description"></div>

              <v-list-item-subtitle></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item> 

            </v-card>
        </v-col>
      </v-row>
    </v-container>


<br/><br/><br/>
    <h2 class="non-title-h2">Saved Routines</h2>
      <v-container id="no-p" grid-list-md fluid>
        <v-row dense>
          <v-col
          v-for="card in savedcards"
          :key="card.title"
          :cols="card.flex"
          >
          <v-card
          max-width="90%"
          outlined
          class="routines"
          :to="'/' + card.url"
          >
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title id="routine-title" v-text="card.title"></v-list-item-title>
              <div class="overline mb-4" v-text="card.subtitle"></div>

              <v-list-item-subtitle></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item> 

            </v-card>
        </v-col>
      </v-row>
    </v-container>

    <br/><br/><br/>




  </div>
</v-app>
</template>

<script>
import {db} from '../../config/db.js'
import _ from 'lodash'

export default {
  data: () => ({
    yourcards: [
    { title: 'Your Usual Routine', subtitle:'5 STEPS · 10 MINUTES',flex: 4, url:'yourusualroutine'},
    { title: 'Love Yourself Routine', subtitle:'10 STEPS · 45 MINUTES',flex: 4, url:'loveyourselfroutine'},
    { title: 'In a Rush Routine', subtitle:'3 STEPS · 5 MINUTES', flex: 4, url:'inarushroutine' },
    ],
    savedcards: [
        { title: 'Simple Dry Skin Routine', subtitle:'5 STEPS · 10 MINUTES',flex: 4, url:'simpledryskinroutine'},
   ]
  }),
  firestore() {
    return {
    routines: db.collection('routines')}
  },
}
</script>
