<style src="../../style.css">
</style>

<template>
  <v-app id="inspire">
    <div class="white-full">
      <h1>Edit Review</h1><br/>
      <v-form v-on:submit.prevent="addReview">
        Your Rating
        <v-rating
          v-model="newReview.rating"
          medium
          dense
          color="yellow darken-3"
          background-color="grey darken-1"
          empty-icon="$ratingFull"
          half-increments
          hover
        ></v-rating>
        <br/>
        <v-text-field
        color="black"
        v-model="newReview.title"
        :counter="50"
        maxlength="50"
        label="Title"
        id="productName"
        required
        ></v-text-field>
        <br/>
                <v-textarea
          outlined
          name="input-7-4"
          label="Details"
          color="black"
          v-model="newReview.details"
          placeholder="Write about your experience here!"
        ></v-textarea>
              <v-btn
      color="black"
      class="mr-4"
      type="submit"
      value="Add Product"
      id="link"
      >
      {{button.text}}
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
    newReview: {
        title: '',
        rating: 0,
        details: '',
    },
        button: {
      text: 'Save Review'
    },
      products: [],
      categories: ['Cleanser','Toner','Essence', 'Serum','Emulsion', 'Moisturizer', 'Active', 'Sunscreen','Sleeping Mask'],
    }
  },

  firestore() {
    return {
    reviews: db.collection('reviews')}
  },

  methods: {
    addReview: function () {
      this.$firestore.reviews.add({
        rating: this.newReview.rating,
        title: this.newReview.title,
        details: this.newReview.details,
        timestamp: new Date(),
      });
      this.$router.push("/glossierjellycleanser")
    },
  },
}
</script>
