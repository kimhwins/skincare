<style src="../../style.css">
</style>

<!-- HOME PAGE -->

<template>
  <v-app id="inspire">
    <div class="white-full">
      <div class="title">

        <div class="row">
          <div class="column-1">
            <div class="img-container">
              <v-img
              v-model = "image"
              src="https://images.pexels.com/photos/906002/pexels-photo-906002.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              width = "300px"
              height = "300px"
              ></v-img>
            </div>
          </div>
          <div class="column-2">
            <h1>Kat Johnson</h1>
            <h2>Hi! This is a short bio about me.</h2>
            <br/>
            <h3 id="smaller">My skin type is...</h3>

            <div style="padding-top: 0.5%;">

              <v-chip
              color="#a4dcff"
              text-color="black"
              >
              Oily
            </v-chip>
            <v-chip
        class="ma-2"
      color="#f0d2ff"
              >
              Sensitive
            </v-chip>
          </div><br/>


            <h3 id="smaller">I avoid...</h3>

            <div style="padding-top: 0.5%;">

              <v-chip
              color="gray"
              text-color="black"
              >
              Octinoxate
            </v-chip>
            <v-chip
        class="ma-2"
      color="gray"
              >
              Alcohol Denat
            </v-chip>
          </div>
        </div>
      </div>


    </div>

    <br/>
    <v-tabs
    v-model="tab"
    background-color="transparent"
    color="black"
    grow
    >
    <v-tab
    v-for="item in items"
    :key="item"
    >
    {{ item.name }}
  </v-tab>
</v-tabs>

<v-tabs-items v-model="tab">
  <v-tab-item
  v-for="item in items"
  :key="item"
  >
  <div v-show="item.name == 'Products I love'" style="padding: 3.5%;">
<v-container id="no-p" grid-list-md fluid>
        <v-row dense>
          <v-col
          v-for="card in oily"
          :key="card.title"
          :cols="3"
          >
          <v-card
          max-width="90%"
          outlined
          class="products"
          :to="'/' + card.url"
          >

      <v-img
        :src="card.src"
        class="align-end"
        height="200px"
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
  </div>

    <div v-show="item.name == 'Routines I love' " class="tab">

  </div>

  <div v-show="item.name == 'Reviews' " >
    <div class="tab">
      <v-col
      v-for="review in reviews.slice(0,1)"
      :key="review.title"
      :cols="12"
      style = "padding: 0;"
      >
            <h3>Product: Glossier Milky Jelly Cleanser</h3><br/>
      <v-rating
      v-model="review.rating"
      medium
      dense
      readonly
      color="yellow darken-3"
      background-color="grey darken-1"
      empty-icon="$ratingFull"
      half-increments
      hover
      ></v-rating>

      <h2 class="ingredient-title">{{review.title}}</h2>
      <h2 v-text="review.details"></h2>
    </v-col>
</div>

</div>

</v-tab-item>
</v-tabs-items>



<br/><br/>

</div>
</v-app>
</template>

<script>
import {db} from '../../config/db.js'
import _ from 'lodash'

export default {
  firestore() {
    return {
      reviews: db.collection('reviews').orderBy("timestamp","desc")}
    },
    data: () => ({
      tab: null,
      rating: {
        one: 4.5,
        two: 5,
        three: 4},
        newReview: {
          rating: 0,
          details: '',
        },
            oily: [
    { type: 'Cleanser',brand: 'Glossier',title: 'Jelly Cleanser', subtitle:'$25',flex: 2, src:"https://2.bp.blogspot.com/-NSpChAg5XZg/V8yorZgK75I/AAAAAAAAFl4/ozd4OgEJkkgGRNQAUOl8vFnd5_AddVlzgCLcB/s1600/GlossierMilkyJelly.JPG", url: 'glossierjellycleanser' },
    { type:'Toner',brand: 'Skinfood', title: 'Peach Sake Toner', subtitle:'$15',flex: 2, src: 'http://cdn.shopify.com/s/files/1/1247/4607/products/31049_PEACH_SAKE_TONER_1_grande.png?v=1532629586', url: 'skinfoodpeachsaketoner' },
    { type:'Moisturizer',brand:'Belif',title: 'Aqua Bomb', subtitle:'$35', flex: 2, src:'https://2.bp.blogspot.com/-13ObY2kU75o/XATqkGanCnI/AAAAAAABI8c/Ner--cqmVpwyg5PtZ10H6fCylDm0J2uGgCEwYBhgL/s1600/2018-12-03%2B02.58.21%2B1.jpg' },
    { type:'Sunscreen',brand: 'Farmacy', title: 'Green Defense SPF 30', subtitle:'$36',flex: 2, src: 'https://cdn.shopify.com/s/files/1/2474/1834/files/Farmacy_GreenScreen_FA00692_Shadow_500x.jpg?v=1526392302' },
    ],
        items: [
        {name: 'Products I love', cat1:'Description', cat1text:'This is the ultimate daily face wash. The pH-balanced, creamy gel formula is made with a blend of five skin conditioners so your face is left feeling healthy and soft, never tight.'},
        {name: 'Routines I love'},
        {name: 'Reviews', cat1: 'Overall Rating'}
        ],
        cards: [
        { type: 'Cleanser', brand:'Garnier', name:'Micellar Water',flex: 4 },
        { type: 'Toner', brand:'Etude House',name:'Soon Jung 5.5 Toner' },
        { type: 'Essence', brand:'Missha', name:'First Treatment Essence',flex: 4 },
        { type: 'Moisturizer', brand:'Fresh', name:'Lotus Youth Preserve Cream',flex: 4 },
        { type: 'Sunscreen', brand:'Too Cool for School', name:'Mild Cica Sun Lotion',flex: 4 },
        ],
        button: {
          text: 'Add Review'
        },
        added: true,
      }),
    methods: {
      addReview: function () {
        this.$firestore.reviews.add({
          rating: this.newReview.rating,
          details: this.newReview.details,
          timestamp: new Date(),
        });
        app.added = !app.added;
        app.button.text = app.added ? 'Add Review' : 'Edit Review';
      },
    },
  }
  </script>
