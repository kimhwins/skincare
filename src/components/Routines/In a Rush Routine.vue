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
    <div class="y-yellow">
      <div class="title">
        <h2>In a Rush Routine</h2>
        <h3>5 STEPS · 5 MINUTES</h3>
      </div>
    </div>

    <div class="w-white" id="less-top">

      <v-tabs
      v-model="tab"
      background-color="transparent"
      color="black"
      grow
      >
      <v-tab
      v-for="item in items"
      :key="item"
      >
      <v-icon left>{{item.icon}}</v-icon>{{ item.time }}
    </v-tab>
  </v-tabs>

  <v-tabs-items v-model="tab">
    <v-tab-item
    v-for="item in items"
    :key="item"
    >
        <br/><br/>
        <v-timeline
        dense="dense"
        align-top="alignTop"
        v-for="card in cards"
        :key="card.type"
        >
        <v-timeline-item
        small = "small"

        color="#FFEDC9">
        <h3>{{card.type}}</h3>
        <h2>{{card.brand}}</h2>
        <h2 id="subtitle">{{card.name}}</h2>
        </v-timeline-item>
        </v-timeline>
  </v-tab-item>
</v-tabs-items>



<br/><br/>
<v-btn
color="black"
class="mr-4">
<router-link id="link" to="/newstep">Add New Step</router-link>
</v-btn>
<br/><br/><br/><br/>
</div>
</v-app>
</template>

<script>
export default {
  data: () => ({
    tab: null,
    items: [
    { time: 'Day', icon: 'mdi-weather-sunny',},
    { time: 'Night', icon: 'mdi-weather-night'},
  ],
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
