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
<style src="./style.css">
</style>

<!-- HOME PAGE -->

<template>
  <v-app id="inspire">
    <div id="white">
      <div class="title">
        <h1>Hey Kat!</h1>
        <h2>Rise & shine</h2>
      </div>

      <h2 id="no-pm">Get started</h2>
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
    <h2>Products for Oily Skin</h2>
    <p id="no-pm">Based on your skin type</p>

<v-container id="no-p" grid-list-md fluid>
        <v-row dense>
          <v-col
          v-for="card in oily"
          :key="card.title"
          :cols="card.flex"
          >
          <v-card
          max-width="90%"
          outlined
          class="products"
          >

      <v-img
        :src="card.src"
        class="align-end"
        height="150px"
      >
      </v-img>
                <v-list-item two-line>
            <v-list-item-content>
              <div class="overline" v-text="card.type"></div>
              <v-card-title style="word-break: break-word" id="brand-title" v-text="card.brand"></v-card-title>

              <v-card-title style="word-break: break-word" id="product-title" v-text="card.title"></v-card-title>

              <v-list-item-subtitle v-text="card.subtitle"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          </v-card>
        </v-col>
      </v-row>
    </v-container>
<br/><br/>

  </div>
</v-app>
</template>

<script>
import {db} from '../config/db.js'
import _ from 'lodash'

export default {
  data: () => ({
    cards: [
    { title: 'Your Usual Routine', subtitle:'5 STEPS · 10 MINUTES',flex: 4 },
    { title: 'Love Yourself Routine', subtitle:'10 STEPS · 45 MINUTES',flex: 4 },
    { title: 'In a Rush Routine', subtitle:'3 STEPS · 5 MINUTES', flex: 4 },
    ],
    oily: [
    { type: 'Cleanser',brand: 'Glossier',title: 'Jelly Cleanser', subtitle:'$25',flex: 2, src:"https://2.bp.blogspot.com/-NSpChAg5XZg/V8yorZgK75I/AAAAAAAAFl4/ozd4OgEJkkgGRNQAUOl8vFnd5_AddVlzgCLcB/s1600/GlossierMilkyJelly.JPG" },
    { type:'Toner',brand: 'Skinfood', title: 'Peach Sake Toner', subtitle:'$15',flex: 2, src: 'http://cdn.shopify.com/s/files/1/1247/4607/products/31049_PEACH_SAKE_TONER_1_grande.png?v=1532629586' },
    { type:'Moisturizer',brand:'Belif',title: 'Aqua Bomb', subtitle:'$35', flex: 2, src:'https://2.bp.blogspot.com/-13ObY2kU75o/XATqkGanCnI/AAAAAAABI8c/Ner--cqmVpwyg5PtZ10H6fCylDm0J2uGgCEwYBhgL/s1600/2018-12-03%2B02.58.21%2B1.jpg' },
    { type:'Sunscreen',brand: 'Farmacy', title: 'Green Defense SPF 30', subtitle:'$36',flex: 2, src: 'https://cdn.shopify.com/s/files/1/2474/1834/files/Farmacy_GreenScreen_FA00692_Shadow_500x.jpg?v=1526392302' },
    ],
    routines: [],
  }),
  firestore() {
    return {
    routines: db.collection('routines')}
  },
}
</script>
