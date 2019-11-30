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
      color="#4DB6AC"
      	label = "Search"
      	placeholder = "Try 'products for dry skin,' 'organic', 'cleansers'..."
      	outlined = "outlined"
      	rounded="rounded"
      	flat="flat"
      	id="search"
      	onkeypress="hidediv()"></v-text-field>

      	<br/>
        <h2 class="non-title-h2" id="hide">Recommended for You</h2>
            <p id="no-pm" class="non-title-p">Similar to Glow Recipe Blueberry Bounce Cleanser</p>
<v-container id="no-p" grid-list-md fluid>
        <v-row dense>
          <v-col
          v-for="card in filteredList"
          :key="card.title"
          :cols="2"
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
  data: () => ({
  	model: "im a text field",
  	awesome: true,
  	search: '',
  	cardList : [
      new Card(
        'Cleanser', 
        'Glossier', 
        'Jelly Cleanser',
        '$25', 
        'https://2.bp.blogspot.com/-NSpChAg5XZg/V8yorZgK75I/AAAAAAAAFl4/ozd4OgEJkkgGRNQAUOl8vFnd5_AddVlzgCLcB/s1600/GlossierMilkyJelly.JPG',
        'glossierjellycleanser'
      ),
      new Card(
        'Toner', 
        'Skinfood', 
        'Peach Sake Toner',
        '$15',
        'http://cdn.shopify.com/s/files/1/1247/4607/products/31049_PEACH_SAKE_TONER_1_grande.png?v=1532629586',
        'skinfoodpeachsaketoner'
      ),
      new Card(
        'Moisturizer', 
        'Belif', 
        'Aqua Bomb',
        '$35', 
        'https://2.bp.blogspot.com/-13ObY2kU75o/XATqkGanCnI/AAAAAAABI8c/Ner--cqmVpwyg5PtZ10H6fCylDm0J2uGgCEwYBhgL/s1600/2018-12-03%2B02.58.21%2B1.jpg',
        'belifaquabomb'
      ),
      new Card(
        'Sunscreen', 
        'Farmacy', 
        'Green Defense SPF 30',
        '$36',
        'https://cdn.shopify.com/s/files/1/2474/1834/files/Farmacy_GreenScreen_FA00692_Shadow_500x.jpg?v=1526392302',
        'farmacygreendefense'
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
