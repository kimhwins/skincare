<style src="../../style.css">
</style>

<template>
  <v-app id="inspire">
    <div class="white">
     <div class="row" id="help">
      <div class="column-1">
        <div class="title">
          <h1>Your Shelf</h1>
        </div>
      </div>
      <div class="column-2 right-aligned">
    <v-menu offset-y
          content-class="dropdown-menu"
      transition="slide-y-transition">
      <template v-slot:activator="{ on }">
        <v-btn
          color="black"
          v-on="on"
        >
        <v-icon left color="white">mdi-plus</v-icon>
          <span style="color: white;">ADD PRODUCT</span>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click=""
          :to="'/' + item.url"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
</div>
</div>

<v-text-field
v-model="search"
color="black"
label = "Search"
placeholder = "Try searching for any brand, product type, or key ingredient!"
outlined = "outlined"
rounded="rounded"
flat="flat"
id="search"
></v-text-field>
<!--         @keypress="hidediv()" -->
<br/>
<h2 class="non-title-h2" id="hide">Cleansers</h2>
<v-container id="no-p" grid-list-md fluid>
  <v-row dense>
    <v-col
    v-for="card in filteredList"
    :key="card.name"
    :cols="3"
    v-show="card.type == 'Cleanser'" 
    >
    <v-card
    max-width="90%"
    outlined
    class="products"
    :to="'/' + card.url"
    >

    <v-img
    :src="card.image"
    class="align-end"
    height="200px"
    >
  </v-img>
  <v-list-item two-line>
    <v-list-item-content>
      <div class="overline" v-text="card.type"></div>
      <v-card-title style="word-break: break-word" id="brand-title" v-text="card.brand"></v-card-title>

      <v-card-title style="word-break: break-word" id="product-title" v-text="card.name"></v-card-title>

      <v-list-item-subtitle v-text="card.subtitle"></v-list-item-subtitle>
      <v-rating 
      readonly 
      small 
      dense 
      color="yellow darken-3"
      background-color="grey darken-1"
      empty-icon="$ratingFull"
      v-model="card.rating" 
      half-increments></v-rating>
    </v-list-item-content>
  </v-list-item>

</v-card>
</v-col>
</v-row>
</v-container>

<br/><br/>

<h2 class="non-title-h2" id="hide">Toners</h2>
<v-container id="no-p" grid-list-md fluid>
  <v-row dense>
    <v-col
    v-for="card in filteredList"
    :key="card.name"
    :cols="3"
    v-show="card.type == 'Toner'" 
    >
    <v-card
    max-width="90%"
    outlined
    class="products"
    :to="'/' + card.url"
    >

    <v-img
    :src="card.image"
    class="align-end"
    height="200px"
    >
  </v-img>
  <v-list-item two-line>
    <v-list-item-content>
      <div class="overline" v-text="card.type"></div>
      <v-card-title style="word-break: break-word" id="brand-title" v-text="card.brand"></v-card-title>

      <v-card-title style="word-break: break-word" id="product-title" v-text="card.name"></v-card-title>

      <v-list-item-subtitle v-text="card.subtitle"></v-list-item-subtitle>
            <v-rating 
      readonly 
      small 
      dense 
      color="yellow darken-3"
      background-color="grey darken-1"
      empty-icon="$ratingFull"
      v-model="card.rating" 
      half-increments></v-rating>
    </v-list-item-content>
  </v-list-item>

</v-card>
</v-col>
</v-row>
</v-container>

<br/><br/>


<h2 class="non-title-h2" id="hide">Moisturizers</h2>
<v-container id="no-p" grid-list-md fluid>
  <v-row dense>
    <v-col
    v-for="card in filteredList"
    :key="card.name"
    :cols="3"
    v-show="card.type == 'Moisturizer'" 
    >
    <v-card
    max-width="90%"
    outlined
    class="products"
    :to="'/' + card.url"
    >

    <v-img
    :src="card.image"
    class="align-end"
    height="200px"
    >
  </v-img>
  <v-list-item two-line>
    <v-list-item-content>
      <div class="overline" v-text="card.type"></div>
      <v-card-title style="word-break: break-word" id="brand-title" v-text="card.brand"></v-card-title>

      <v-card-title style="word-break: break-word" id="product-title" v-text="card.name"></v-card-title>

      <v-list-item-subtitle v-text="card.subtitle"></v-list-item-subtitle>
            <v-rating 
      readonly 
      small 
      dense 
      color="yellow darken-3"
      background-color="grey darken-1"
      empty-icon="$ratingFull"
      v-model="card.rating" 
      half-increments></v-rating>
    </v-list-item-content>
  </v-list-item>

</v-card>
</v-col>
</v-row>
</v-container>

<br/><br/>

<h2 class="non-title-h2" id="hide">Sunscreens</h2>
<v-container id="no-p" grid-list-md fluid>
  <v-row dense>
    <v-col
    v-for="card in filteredList"
    :key="card.name"
    :cols="3"
    v-show="card.type == 'Sunscreen'" 
    >
    <v-card
    max-width="90%"
    outlined
    class="products"
    :to="'/' + card.url"
    >

    <v-img
    :src="card.image"
    class="align-end"
    height="200px"
    >
  </v-img>
  <v-list-item two-line>
    <v-list-item-content>
      <div class="overline" v-text="card.type"></div>
      <v-card-title style="word-break: break-word" id="brand-title" v-text="card.brand"></v-card-title>

      <v-card-title style="word-break: break-word" id="product-title" v-text="card.name"></v-card-title>

      <v-list-item-subtitle v-text="card.subtitle"></v-list-item-subtitle>
            <v-rating 
      readonly 
      small 
      dense 
      color="yellow darken-3"
      background-color="grey darken-1"
      empty-icon="$ratingFull"
      v-model="card.rating" 
      half-increments></v-rating>
    </v-list-item-content>
  </v-list-item>

</v-card>
</v-col>
</v-row>
</v-container>

<br/><br/>

<h2 class="non-title-h2" id="hide">Sleeping Masks</h2>
<v-container id="no-p" grid-list-md fluid>
  <v-row dense>
    <v-col
    v-for="card in filteredList"
    :key="card.name"
    :cols="3"
    v-show="card.type == 'Sleeping Mask'" 
    >
    <v-card
    max-width="90%"
    outlined
    class="products"
    :to="'/' + card.url"
    >

    <v-img
    :src="card.image"
    class="align-end"
    height="200px"
    >
  </v-img>
  <v-list-item two-line>
    <v-list-item-content>
      <div class="overline" v-text="card.type"></div>
      <v-card-title style="word-break: break-word" id="brand-title" v-text="card.brand"></v-card-title>

      <v-card-title style="word-break: break-word" id="product-title" v-text="card.name"></v-card-title>

      <v-list-item-subtitle v-text="card.subtitle"></v-list-item-subtitle>
            <v-rating 
      readonly 
      small 
      dense 
      color="yellow darken-3"
      background-color="grey darken-1"
      empty-icon="$ratingFull"
      v-model="card.rating" 
      half-increments></v-rating>
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

import {db} from '../../config/db.js'
import _ from 'lodash'

class Card {
  constructor(type, brand, title, subtitle, src, url) {
    this.type = type;
    this.brand = brand;
    this.title = title;
    this.subtitle = subtitle;
    this.src = src;
    this.url = url;
    this.rating = rating;
  }
}


export default {
    firestore() {
      return {
        products: db.collection("products").orderBy("rating", "desc")
      }

    },
    data: () => ({
      model: "im a text field",
      search: '',
      items: [
        { title: 'Add to Shelf', url: 'newproduct'},
        { title: 'Add to Wishlist' },
      ],
    }),
    computed: {
      filteredList:function()
      {
        var self=this;
        return this.products.filter(function(product){return product.name.toLowerCase().indexOf(self.search.toLowerCase())>=0 || product.brand.toLowerCase().indexOf(self.search.toLowerCase())>=0 || product.type.toLowerCase().indexOf(self.search.toLowerCase())>=0;});
      },
      hidediv() {
        document.getElementById("hide").style.display = "none";
      },
    }
  }
  </script>
