<style src="../../style.css">
</style>

<template>
  <v-app id="inspire">
    <div class="white-full">
      <h1>Add New Product</h1><br/>
      <v-form v-on:submit.prevent="addProduct">
        <v-text-field
        color="black"
        v-model="newProduct.name"
        :counter="50"
        maxlength="50"
        label="Name"
        id="productName"
        required
        ></v-text-field>
        <v-text-field
        color="black"
        v-model="newProduct.brand"
        :counter="30"
        maxlength="30"
        label="Brand"
        id="productBrand"
        required
        ></v-text-field>
        <v-text-field
        color="black"
        v-model="newProduct.image"
        label="Image URL"
        id="productImage"
        required
        ></v-text-field>
        <v-select
          color="black"
          :items="categories"
          label="Product Type"
          id="productType"
          required
          v-model="newProduct.type"
        ></v-select>
          <v-combobox
    v-model="newProduct.tags"
    :items="items"
    label="Tags"
    chips
    clearable
    multiple
    deletable-chips
  >
    <template v-slot:selection="{ attrs, item, select, selected }">
      <v-chip
        v-bind="attrs"
        :input-value="selected"
        close
        @click="select"
        @click:close="remove(item)"
      >
        <strong>{{ item }}</strong>&nbsp;
      </v-chip>
    </template>
  </v-combobox>


        <br/>
        Your Rating
        <v-rating
          v-model="newProduct.rating"
          color="yellow darken-3"
          background-color="grey darken-1"
          empty-icon="$ratingFull"
          half-increments
          hover
        ></v-rating>

      <br/><br/>
      <v-btn
      color="black"
      class="mr-4"
      type="submit"
      value="Add Product"
      id="link"
      >
      Add Product
    </v-btn>
    <!--           <input type="submit" class="btn btn-primary" value="Add Product"> -->
  </v-form>

</div>

</v-app>
</template>

<script>


// import Firebase from 'firebase'

// var firebaseConfig = {
//   apiKey: "AIzaSyC2SYGnIoTyuK4EdQp1VH9ByZgs0IpE-zQ",
//   authDomain: "skincare-aa6c8.firebaseapp.com",
//   databaseURL: "https://skincare-aa6c8.firebaseio.com",
//   projectId: "skincare-aa6c8",
//   storageBucket: "skincare-aa6c8.appspot.com",
//   messagingSenderId: "285880241549",
//   appId: "1:285880241549:web:89dbd463da6eeaa0bc81c4",
//   measurementId: "G-LC7NBSVQV7"
//   };
// let app = Firebase.initializeApp(firebaseConfig)
// let db = Firebase.firestore()
import {db} from '../../config/db.js'
import _ from 'lodash'
export default {
  data: function() {
    return {
           noData: true,
      chips: [],
        items: ['Dry', 'Oily', 'Combination','Sensitive', 'Gentle'],
      newProduct: {
        name: 'New Product',
        brand: '',
        image: '',
        type:'',
        timestamp: '',
        url: '',
        tags: [],
        rating: 0,
      },
      products: [],
      categories: ['Cleanser','Toner','Essence', 'Serum','Emulsion', 'Moisturizer', 'Active', 'Sunscreen','Sleeping Mask'],
    }
  },

  firestore() {
    return {
    products: db.collection('products')}
  },

  methods: {
          remove (item) {
        this.chips.splice(this.chips.indexOf(item), 1)
        this.chips = [...this.chips]
      },
    addProduct: function () {
      this.$firestore.products.add({
        name: this.newProduct.name,
        brand: this.newProduct.brand,
        image: this.newProduct.image,
        type: this.newProduct.type,
        rating: this.newProduct.rating,
        tagd: this.newProduct.tags,
        timestamp: new Date(),
        url: (this.newProduct.brand + this.newProduct.name).replace(/\s+/g, '').toLowerCase(),
      })
            this.$router.push("/shelf");
      this.newProduct.name = '';
      this.newProduct.brand = '';
      this.newProduct.image = '';
      this.newProduct.type = '';
      this.newProduct.rating = 0;
      this.newProduct.tags = [];
      this.picture=null;
    },
  },
}
</script>
