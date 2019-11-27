<style src="../../style.css">
</style>

<!-- HOME PAGE -->

<template>
  <v-app id="inspire">
    <div id="white">
      <div class="title">

        <div class="row">
          <div class="column-1">
            <div class="img-container">
              <v-img
              v-model = "image"
              src="https://2.bp.blogspot.com/-NSpChAg5XZg/V8yorZgK75I/AAAAAAAAFl4/ozd4OgEJkkgGRNQAUOl8vFnd5_AddVlzgCLcB/s1600/GlossierMilkyJelly.JPG"
              width = "300px"
              ></v-img>
            </div>
          </div>
          <div class="column-2">
            <h3 v-model="name">Cleanser</h3>
            <h2>Glossier <br/>Milky Jelly Cleanser</h2>
            <span><img height="25px" src="../../assets/star.svg"></span>
            <span><img height="25px" src="../../assets/star.svg"></span>
            <span><img height="25px" src="../../assets/star.svg"></span>
            <span><img height="25px" src="../../assets/star.svg"></span>
            <span><img height="25px" src="../../assets/star.svg"></span>

            <br/><br/>
            <v-btn depressed
            style="margin-right: 25px;"
            @keypress="sendtodb()"
            >Add to Shelf</v-btn>
          </div>
        </div>


      </div>

      <br/>
      <v-tabs
      v-model="tab"
      background-color="transparent"
      color="#4DB6AC"
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
    <div v-show="item.name == 'Overview' " class="tab">
      <h3>{{item.cat1}}</h3>
      <h2>{{item.cat1text}}</h2>
    </div>

    <div v-show="item.name == 'Ingredients' " >
      <div class="tab">
        <h3>{{item.cat1}}</h3>
        <h2 class="ingredient-title">{{item.cat1text}}</h2>
        <h2>{{item.cat1text2}}</h2>
        <br/>
        <h2 class="ingredient-title">{{item.cat2text}}</h2>
        <h2>{{item.cat2text2}}</h2>
      </div>

      <div class="tab">
        <h3>Full Ingredients</h3>
        <h2>Water/Aqua/Eau, Rosa Damascena Flower Water, PEG-7 Glyceryl Cocoate, Propanediol, Isohexadecane, Poloxamer 184, Acrylamide/Sodium Acryloyldimethyltaurate Copolymer, Xylitylglucoside, Betaine, Allantoin, Glycerin, Panthenol, Symphytum Officinale Root Extract, Sodium Hyaluronate, Anhydroxylitol, Polysorbate 80, Xylitol, Ammonium Polyacryloyldimethyl Taurate, Isopropyl Myristate, Benzoic Acid, Ethylhexylglycerin, Sodium Hydroxide</h2>
      </div>

    </div>

    <div v-show="item.name == 'Reviews' " >
      <div class="tab">
        <h3>Your Rating</h3>
        <span><img height="20px" src="../../assets/star.svg"></span>
        <span><img height="20px" src="../../assets/star.svg"></span>
        <span><img height="20px" src="../../assets/star.svg"></span>
        <span><img height="20px" src="../../assets/star.svg"></span>
        <span><img height="20px" src="../../assets/star.svg"></span>
        <br/>
      </div>

      <div class="tab">
        <h3>Reviews</h3>
        <br/>


        <span><img height="20px" src="../../assets/star.svg"></span>
        <span><img height="20px" src="../../assets/star.svg"></span>
        <span><img height="20px" src="../../assets/star.svg"></span>
        <span><img height="20px" src="../../assets/star.svg"></span>
        <span><img height="20px" src="../../assets/star.svg"></span>
        <h2 class="ingredient-title">Feels amazing!</h2>
        <h2>This cleanser feels amazing on the skin. When use it at night and it feels
          amazing and feels like the dirt is just melting away, and in the morning it's so
        rejuvenating. Favourite part of my routine! Also very good for sensitive skin!</h2>


        <br/><br/>

        <span><img height="20px" src="../../assets/star.svg"></span>
        <span><img height="20px" src="../../assets/star.svg"></span>
        <span><img height="20px" src="../../assets/star.svg"></span>
        <span><img height="20px" src="../../assets/star.svg"></span>
        <span><img height="20px" src="../../assets/star (1).svg"></span>
        <h2 class="ingredient-title">Better than expected</h2>
        <h2>I have sensitive/acne-prone skin and I was hesitant to buy it at first (since it's described as a nourishing face wash) but it actually really soothed the redness in my face. My acne has gone down (with the use of a toner) and my face feels smoother than before.</h2>

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
    products: db.collection('products')}
  },
  data: () => ({
    tab: null,
    items: [
    {name: 'Overview', cat1:'Description', cat1text:'This is the ultimate daily face wash. The pH-balanced, creamy gel formula is made with a blend of five skin conditioners so your face is left feeling healthy and soft, never tight.'},
    {name:'Ingredients', cat1: 'key ingredients', cat1text: 'Poloxamer', cat1text2: 'A strong yet mild cleansing agent used in contact lens solution.', cat2text: 'Rose Water', cat2text2: 'We replaced 1/4 of the H2O content with soothing rose water (bonus: smells great!).'}, 
    {name: 'Reviews', cat1: 'Overall Rating'}
    ],
    cards: [
    { type: 'Cleanser', brand:'Garnier', name:'Micellar Water',flex: 4 },
    { type: 'Toner', brand:'Etude House',name:'Soon Jung 5.5 Toner' },
    { type: 'Essence', brand:'Missha', name:'First Treatment Essence',flex: 4 },
    { type: 'Moisturizer', brand:'Fresh', name:'Lotus Youth Preserve Cream',flex: 4 },
    { type: 'Sunscreen', brand:'Too Cool for School', name:'Mild Cica Sun Lotion',flex: 4 },
    ],
  }),
  methods: {
    sendtodb(){

    }
  },
}
</script>
