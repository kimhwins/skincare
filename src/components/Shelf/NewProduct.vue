<style src="../../style.css">
</style>

<template>
  <v-app id="inspire">
    <div id="white">
      <h1>Add New Product</h1><br/>
      <v-form v-on:submit.prevent="addProduct">
        <v-text-field
        color="#4DB6AC"
        v-model="newProduct.name"
        :counter="30"
        maxlength="30"
        label="Name"
        id="productName"
        required
        ></v-text-field>
        <v-text-field
        color="#4DB6AC"
        v-model="newProduct.brand"
        :counter="30"
        maxlength="30"
        label="Brand"
        id="productBrand"
        required
        ></v-text-field>
        <v-text-field
        color="#4DB6AC"
        v-model="newProduct.image"
        label="Image URL"
        id="productImage"
        required
        ></v-text-field>
        <v-select
          color="#4DB6AC"
          :items="categories"
          label="Product Type"
          id="productType"
          required
          v-model="newProduct.type"
        ></v-select>

      <br/><br/>
      <v-btn
      color="#4DB6AC"
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
      newProduct: {
        name: 'New Product',
        brand: '',
        image: '',
        type:'',
        timestamp: '',
        url: '',
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
    addProduct: function () {
      this.$firestore.products.add({
        name: this.newProduct.name,
        brand: this.newProduct.brand,
        image: this.newProduct.image,
        type: this.newProduct.type,
        timestamp: new Date(),
        url: (this.newProduct.brand + this.newProduct.name).replace(/\s+/g, '').toLowerCase(),
      })
      this.newProduct.name = '';
      this.newProduct.brand = '';
      this.newProduct.image = '';
      this.NewProduct.type = '';
    },
  },
}
</script>
