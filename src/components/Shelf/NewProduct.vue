<style src="../../style.css">
</style>

<template>
  <v-app id="inspire">
    <div id="white">
        <h1>Add New Product</h1><br/>
         <v-form v-on:submit.prevent="addProduct">
          <v-text-field
            color="#4DB6AC"
            v-model="newProduct.title"
            :counter="40"
            label="Title"
            id="productTitle"
            required
          ></v-text-field>
          <v-text-field
            color="#4DB6AC"
            v-model="newProduct.description"
            label="Description"
            id="productDescription"
            required
          ></v-text-field>

          <h3>Time of Day</h3>
          <v-btn-toggle
          v-model="newProduct.time"
          tile
          id="productTime"
          color="#4DB6AC"
          group
        >
          <v-btn value="Day">
            Day
          </v-btn>

          <v-btn value="Night">
            Night
          </v-btn>
        </v-btn-toggle>
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


      <br/><br/>
      <h2>Product List</h2>

        <v-simple-table class="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" 
                :key="product.title">
              <td><a v-bind:href="product.url">{{product.title}}</a></td>
              <td>{{product.description}}</td>
            </tr>
          </tbody>
        </v-simple-table>

    </div>
    
</v-app>
</template>

<script>

// import { db } from '../../config/db.js';

// let productsRef = db.ref('products')

// export default {
// data () {
//   return {
//     newProduct: {
//       title: 'New Product',
//       description: '',
//       time: '',
//     },
//     products: [],
//   }
// },
//   firebase: function() {
//     return {
//         products: productsRef
//     }
//   },
//     //   firebase: function () {
//     //     return {
//     //         products: db.ref('products')
//     //     }
//     // },
// methods: {
//       addProduct: function () {
//         productsRef.push(this.newProduct);
//         this.newProduct.title = '';
//         this.newProduct.description = '';
//         this.newProduct.time = 'Day';
//       },
//     },
// }
</script>
