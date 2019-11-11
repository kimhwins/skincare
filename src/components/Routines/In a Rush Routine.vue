<!-- 

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data: () => ({
    //
  }),
};
</script>
-->
<style src="../style.css">
</style>

<!-- HOME PAGE -->

<template>
  <v-app id="inspire">
    <div id="white">
      <div class="title">
        <h2>In a Rush Routine</h2>
        <h3>5 STEPS · 5 MINUTES</h3>
      </div>
      <v-timeline
      dense="dense"
      align-top="alignTop"
      v-for="card in cards"
      :key="card.type"
      >
      <v-timeline-item
      small = "small"
      fill-dot="fillDot"
      color="#4DB6AC">
      <h3>{{card.type}}</h3>
      <h2>{{card.brand}}</h2>
      <h2 id="subtitle">{{card.name}}</h2>
    </v-timeline-item>
  </v-timeline>

  <br/><br/>
  <v-btn
  color="#4DB6AC"
  class="mr-4">
  <router-link id="link" to="/newstep">Add New Step</router-link>
</v-btn>
</div>
</v-app>
</template>

<script>
export default {
  data: () => ({
    cards: [
    { type: 'Cleanser', brand:'Garnier', name:'Micellar Water',flex: 4 },
    { type: 'Toner', brand:'Etude House',name:'Soon Jung 5.5 Toner' },
    { type: 'Essence', brand:'Missha', name:'First Treatment Essence',flex: 4 },
    { type: 'Moisturizer', brand:'Fresh', name:'Lotus Youth Preserve Cream',flex: 4 },
    { type: 'Sunscreen', brand:'Too Cool for School', name:'Mild Cica Sun Lotion',flex: 4 },
    ],
  }),
}
</script>
