import Vue from 'vue'
import Vuefire from 'vuefire'
import vuetify from './plugins/vuetify';
import router from './router'
import App from './App.vue'
import "circular-std";
import 'firebase/firestore'
import VueFirestore from 'vue-firestore'

Vue.use(VueFirestore)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  Vuefire,
  VueFirestore,
  data() {
  },
  render: h => h(App)
}).$mount('#app')

// var firebase = require("firebase");

//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyC2SYGnIoTyuK4EdQp1VH9ByZgs0IpE-zQ",
//     authDomain: "skincare-aa6c8.firebaseapp.com",
//     databaseURL: "https://skincare-aa6c8.firebaseio.com",
//     projectId: "skincare-aa6c8",
//     storageBucket: "skincare-aa6c8.appspot.com",
//     messagingSenderId: "285880241549",
//     appId: "1:285880241549:web:89dbd463da6eeaa0bc81c4",
//     measurementId: "G-LC7NBSVQV7"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

// var usersRef = firebase.database().ref('users')

// new Vue({
//   router,
//   vuetify,
//   Vuefire,
//   data: {
//     newUser: {
//       	name: '',
//       	email: ''
//     }
//   },
//   firebase: {
//     users: usersRef
//   },
//     computed: {
//     validation: function () {
//       return {
//         name: !!this.newUser.name.trim(),
//         email: emailRE.test(this.newUser.email)
//       }
//     },
//     isValid: function () {
//       var validation = this.validation
//       return Object.keys(validation).every(function (key) {
//         return validation[key]
//       })
//     }
//   },
//   methods: {
//     addUser: function () {
//       if (this.isValid) {
//         usersRef.push(this.newUser)
//         this.newUser.name = ''
//         this.newUser.email = ''
//       }
//     },
//     removeUser: function (user) {
//       usersRef.child(user['.key']).remove()
//     }
//   },
//   render: h => h(App)
// }).$mount('#app')

// Vue.component('new-routine', {
//       template: `
//         <input v-model="name">
//       `,
//       data() {
//         return {
//           name: null
//         }
//       }
// })


