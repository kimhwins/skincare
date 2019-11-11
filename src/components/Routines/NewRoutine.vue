<style src="../../style.css">
</style>

<template>
  <v-app id="inspire">
    <div id="white">
        <h1>Add New Routine</h1><br/>
         <v-form v-on:submit.prevent="addRoutine">
          <v-text-field
            color="#4DB6AC"
            v-model="newRoutine.title"
            :counter="40"
            label="Title"
            id="routineTitle"
            required
          ></v-text-field>
          <v-text-field
            color="#4DB6AC"
            v-model="newRoutine.description"
            label="Description"
            id="routineDescription"
            required
          ></v-text-field>

          <h3>Time of Day</h3>
          <v-btn-toggle
          v-model="newRoutine.time"
          tile
          id="routineTime"
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
          <v-btn depressed
          style="margin-right: 25px;">Add Step</v-btn>
                <v-btn
        color="#4DB6AC"
        class="mr-4"
        type="submit"
        value="Add Routine"
        id="link"
      >
        Add Routine
      </v-btn>
<!--           <input type="submit" class="btn btn-primary" value="Add Routine"> -->
        </v-form>


      <br/><br/>
      <h2>Routine List</h2>

        <v-simple-table class="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="routine in routines" 
                :key="routine.title">
              <td> {{ routine.title }}</td>
              <td>{{routine.description}}</td>
            </tr>
          </tbody>
        </v-simple-table>

    </div>
    
</v-app>
</template>

<script>

import { db } from '../../config/db.js';

// import Firebase from 'firebase'

//  let config = {
//   apiKey: "AIzaSyC2SYGnIoTyuK4EdQp1VH9ByZgs0IpE-zQ",
//   authDomain: "skincare-aa6c8.firebaseapp.com",
//   databaseURL: "https://skincare-aa6c8.firebaseio.com",
//   projectId: "skincare-aa6c8",
//   storageBucket: "skincare-aa6c8.appspot.com",
//   messagingSenderId: "285880241549",
//   appId: "1:285880241549:web:89dbd463da6eeaa0bc81c4",
//   measurementId: "G-LC7NBSVQV7"
//   };
// let app = Firebase.initializeApp(config)
// let db = app.database()
let routinesRef = db.ref('routines')

export default {
data: function() {
  return {
    newRoutine: {
      title: 'New Routine',
      description: '',
      time: '',
    },
    routines: [],
  }
},

firebase: {
    routines: {
      source: db.ref('routinesRef'),

    }
  },
  // firebase: function() {
  //   return {
  //       routines: routinesRef
  //   }
  // },
    //   firebase: function () {
    //     return {
    //         routines: db.ref('routines')
    //     }
    // },
methods: {
      addRoutine: function () {
        routinesRef.push(this.newRoutine);
        this.newRoutine.title = '';
        this.newRoutine.description = '';
        this.newRoutine.time = 'Day';
      },
    },
}
</script>
