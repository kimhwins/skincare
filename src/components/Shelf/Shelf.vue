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
        <v-btn
        color="#4DB6AC"
        class="mr-4">
            <router-link id="link" to="/newproduct">Add New Product</router-link>
      </v-btn>
</div>
</div>

      <v-text-field
      v-model="search"
      color="#4DB6AC"
        label = "Search"
        placeholder = "Try 'products for dry skin,' 'organic', 'cleansers'..."
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
          :cols="2"
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
        height="150px"
      >
      </v-img>
                <v-list-item two-line>
            <v-list-item-content>
              <div class="overline" v-text="card.type"></div>
              <v-card-title style="word-break: break-word" id="brand-title" v-text="card.brand"></v-card-title>

              <v-card-title style="word-break: break-word" id="product-title" v-text="card.name"></v-card-title>

              <v-list-item-subtitle v-text="card.subtitle"></v-list-item-subtitle>
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
          :cols="2"
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
        height="150px"
      >
      </v-img>
                <v-list-item two-line>
            <v-list-item-content>
              <div class="overline" v-text="card.type"></div>
              <v-card-title style="word-break: break-word" id="brand-title" v-text="card.brand"></v-card-title>

              <v-card-title style="word-break: break-word" id="product-title" v-text="card.name"></v-card-title>

              <v-list-item-subtitle v-text="card.subtitle"></v-list-item-subtitle>
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
          :cols="2"
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
        height="150px"
      >
      </v-img>
                <v-list-item two-line>
            <v-list-item-content>
              <div class="overline" v-text="card.type"></div>
              <v-card-title style="word-break: break-word" id="brand-title" v-text="card.brand"></v-card-title>

              <v-card-title style="word-break: break-word" id="product-title" v-text="card.name"></v-card-title>

              <v-list-item-subtitle v-text="card.subtitle"></v-list-item-subtitle>
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
          :cols="2"
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
        height="150px"
      >
      </v-img>
                <v-list-item two-line>
            <v-list-item-content>
              <div class="overline" v-text="card.type"></div>
              <v-card-title style="word-break: break-word" id="brand-title" v-text="card.brand"></v-card-title>

              <v-card-title style="word-break: break-word" id="product-title" v-text="card.name"></v-card-title>

              <v-list-item-subtitle v-text="card.subtitle"></v-list-item-subtitle>
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
          :cols="2"
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
        height="150px"
      >
      </v-img>
                <v-list-item two-line>
            <v-list-item-content>
              <div class="overline" v-text="card.type"></div>
              <v-card-title style="word-break: break-word" id="brand-title" v-text="card.brand"></v-card-title>

              <v-card-title style="word-break: break-word" id="product-title" v-text="card.name"></v-card-title>

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
  }
}


export default {
  firestore() {
    return {
    products: db.collection('products')}
  },
  data: () => ({
    model: "im a text field",
    search: '',
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
