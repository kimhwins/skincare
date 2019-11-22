<style src="../../style.css">
</style>

<template>
  <v-app id="inspire">
    <div id="white">
      <div class="title">
        <h1>Your Shelf</h1>
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
        <h2 class="non-title-h2" id="hide">Cleansers</h2>
<v-container id="no-p" grid-list-md fluid>
        <v-row dense>
          <v-col
          v-for="card in filteredList"
          :key="card.title"
          :cols="2"
          v-show="card.type == 'Cleanser'" 
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

<h2 class="non-title-h2" id="hide">Toners</h2>
<v-container id="no-p" grid-list-md fluid>
        <v-row dense>
          <v-col
          v-for="card in filteredList"
          :key="card.title"
          :cols="2"
          v-show="card.type == 'Toner'" 
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


    <h2 class="non-title-h2" id="hide">Moisturizers</h2>
<v-container id="no-p" grid-list-md fluid>
        <v-row dense>
          <v-col
          v-for="card in filteredList"
          :key="card.title"
          :cols="2"
          v-show="card.type == 'Moisturizer'" 
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

    <h2 class="non-title-h2" id="hide">Sunscreens</h2>
<v-container id="no-p" grid-list-md fluid>
        <v-row dense>
          <v-col
          v-for="card in filteredList"
          :key="card.title"
          :cols="2"
          v-show="card.type == 'Sunscreen'" 
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
        'Cleanser',
        'Neutrogena',
        'Hydro Boost',
        '$10',
        'https://www.beautybulletin.com/media/reviews/photos/original/7d/7b/b5/16284-neutrogena-hydro-boost-water-gel-cleanser-76-1484726339.jpg',
        'neutrogenahydroboost'
        ),
      new Card(
        'Toner', 
        'Skinfood', 
        'Peach Sake Toner',
        '$15',
        'http://cdn.shopify.com/s/files/1/1247/4607/products/31049_PEACH_SAKE_TONER_1_grande.png?v=1532629586',
        'skinfoodpeachsakeotoner'
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
    oily: [
    { type:'Sunscreen',brand: 'Farmacy', title: 'Green Defense SPF 30', subtitle:'$36',flex: 2, src: 'https://cdn.shopify.com/s/files/1/2474/1834/files/Farmacy_GreenScreen_FA00692_Shadow_500x.jpg?v=1526392302' },
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
