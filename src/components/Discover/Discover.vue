<style src="../../style.css">
</style>

<template>
  <v-app id="inspire">
    <div class="white">
      <div class="title">
        <h1>Discover</h1>
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
      	onkeypress="hidediv()"></v-text-field>

      	<br/>
                <h2 class="non-title-h2" id="hide">Moisturizers for the winter</h2>
            <p id="no-pm" class="non-title-p">The top rich and creamy moisturizers</p>
<v-container id="no-p" grid-list-md fluid>
        <v-row dense>
          <v-col
          v-for="card in filteredList"
          :key="card.title"
          :cols="2"
                  v-show="card.section == '1'"
          >
          <v-card
          max-width="90%"
          outlined
          class="products"
          :to="'/' + card.url"
          >

      <v-img
        :src="card.src"
        class="align-end"
        height="150px"
      >
      </v-img>
                <v-list-item two-line>
            <v-list-item-content>
              <div class="overline" v-text="card.type"></div>
              <v-card-title style="word-break: break-word" id="brand-title" v-text="card.brand"></v-card-title>

              <v-card-title style="word-break: break-word" id="product-title" v-text="card.title"></v-card-title>

              <v-list-item-subtitle v-text="card.subtitle"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <br/><br/>
        <h2 class="non-title-h2" id="hide">Recommended for You</h2>
            <p id="no-pm" class="non-title-p">Similar to Glow Recipe Blueberry Bounce Cleanser</p>
<v-container id="no-p" grid-list-md fluid>
        <v-row dense>
          <v-col
          v-for="card in filteredList"
          :key="card.title"
          :cols="2"   
          v-show="card.section == '2'" 
          >
          <v-card
          max-width="90%"
          outlined
          class="products"
          :to="'/' + card.url"
          >

      <v-img
        :src="card.src"
        class="align-end"
        height="150px"
      >
      </v-img>
                <v-list-item two-line>
            <v-list-item-content>
              <div class="overline" v-text="card.type"></div>
              <v-card-title style="word-break: break-word" id="brand-title" v-text="card.brand"></v-card-title>

              <v-card-title style="word-break: break-word" id="product-title" v-text="card.title"></v-card-title>

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
class Card {
  constructor(section, type, brand, title, subtitle, src, url) {
    this.section = section;
    this.type = type;
    this.brand = brand;
    this.title = title;
    this.subtitle = subtitle;
    this.src = src;
    this.url = url;
  }
}


export default {
  data: () => ({
  	model: "im a text field",
  	awesome: true,
  	search: '',
  	cardList : [
          new Card(
        '1',
        'Moisturizer', 
        'Holika Holika', 
        'Good Cera',
        '$20', 
        'https://images.beautybay.com/eoaaqxyywn6o/HOHO0056F_1.jpg_s3.lmb_kjphdx/5ce45ae889c6a87143c3fd413f41cf74/HOHO0056F_1.jpg'
      ),

                                  new Card(
        '1',
        'Moisturizer', 
        'Etude House', 
        'Moistful Collagen',
        '$20', 
        'https://cdn.shopify.com/s/files/1/0249/1218/products/DSC01505_grande.jpg?v=1571438555'
      ),
      new Card(
        '1',
        'Moisturizer', 
        'Drunk Elephant', 
        'Lala Retro',
        '$60', 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSeQR-Gwuhbm99rmI2HF12Ks5sK4f88O7T0elJrqGYQTgZTuqQ&s'
      ),
            new Card(
        '1',
        'Moisturizer', 
        'Innisfree', 
        'Green Tea Balancing',
        '$20', 
        'https://image.dhgate.com/0x0s/f2-albu-g9-M00-39-E0-rBVaVVw9uLqAFR4tAAS6gcxMEtI067.jpg/2019-korean-brand-innisfree-green-tea-balancing.jpg'
      ),

      new Card(
        '2',
        'Cleanser', 
        'Glossier', 
        'Jelly Cleanser',
        '$25', 
        'https://2.bp.blogspot.com/-NSpChAg5XZg/V8yorZgK75I/AAAAAAAAFl4/ozd4OgEJkkgGRNQAUOl8vFnd5_AddVlzgCLcB/s1600/GlossierMilkyJelly.JPG',
        'glossierjellycleanser'
      ),
      new Card(
        '2',
        'Cleanser', 
        'Cosrx', 
        'Good Morning Cleanser',
        '$15',
        'http://cdn.shopify.com/s/files/1/0022/1678/8014/products/cosrx-low-ph-good-morning-gel-cleanser-skincare-korean-skincare-3_1024x1024.jpeg?v=1565562800'
      ),
      new Card(
                '2',
        'Cleanser', 
        'Innisfree', 
        'Bija Cleansing Gel',
        '$20', 
        'https://i2.wp.com/beautyinkshop.com/wp-content/uploads/2019/02/Inni-BIjaCleansingGel.jpg?fit=800%2C800&ssl=1'
      ),
],
  }),
  computed: {
    filteredList() {
      return this.cardList.filter(card => {
        return card.title.toLowerCase().includes(this.search.toLowerCase()) || card.type.toLowerCase().includes(this.search.toLowerCase()) || card.brand.toLowerCase().includes(this.search.toLowerCase())
      })
    },
    hidediv() {
  		document.getElementById("hide").style.display = "none";
},
  }
}
</script>
