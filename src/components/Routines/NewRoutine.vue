<style src="../../style.css">
</style>

<template>
  <v-app id="inspire">
    <div class="white-full">
      <h1>Add New Routine</h1><br/>
      <v-form v-on:submit.prevent="addRoutine" action="/routines">
        <v-text-field
        color="black"
        v-model="newRoutine.title"
        :counter="30"
        maxlength="30"
        label="Title"
        id="routineTitle"
        required
        ></v-text-field>
        <v-text-field
        color="black"
        v-model="newRoutine.description"
        label="Description"
        id="routineDescription"
        required
        :counter="30"
        maxlength="30"
        ></v-text-field>

        <h3>Time of Day</h3>
        <v-btn-toggle
        v-model="newRoutine.time"
        tile
        id="routineTime"
        color="black"
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
      <v-btn depressed
      style="margin-right: 25px;">Add Step</v-btn>
      <v-btn
      color="black"
      class="mr-4"
      type="submit"
      value="Add Routine"
      id="link"
      >
      Add Routine
    </v-btn>
    <!--           <input type="submit" class="btn btn-primary" value="Add Routine"> -->
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
      newRoutine: {
        title: 'New Routine',
        description: '',
        time: '',
        timestamp: '',
        url: '',
      },
      routines: [],
    }
  },

  firestore() {
    return {
    routines: db.collection('routines')}
  },

  methods: {
    addRoutine: function () {
      this.$firestore.routines.add({
        title: this.newRoutine.title,
        description: this.newRoutine.description,
        time: this.newRoutine.time,
        timestamp: new Date(),
        url: this.newRoutine.title.replace(/\s+/g, '').toLowerCase(),
      })
      this.$router.push("/routines");
      this.newRoutine.title = '';
      this.newRoutine.description = '';
      this.newRoutine.time = 'Day';
    },
  },
}
</script>
