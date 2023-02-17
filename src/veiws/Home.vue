<template>
  <v-app>
    <v-card color="#E1BEE7" tile>
      <v-container class="container">
        <v-row color="purple">
          <v-col sm="4" offset-md="2" md="8">
            <v-img :src="image" height="280px"></v-img>
            <v-row no-gutters>
              <v-col cols="8" sm="6">
                <v-img :src="image1" height="280px"></v-img>
              </v-col>
              <v-col cols="4" sm="6">
                <v-img :src="image2" height="280px"></v-img>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <!-- <v-img  :src="image"  :style="{background: $vuetify.theme.themes[theme].background}"></v-img> -->
    <Shop></Shop>
  </v-app>
</template>
<script>
import Shop from "@/components/Shop";

export default {
  name: "Home",
  components: {
    Shop
  },

  data() {
    return {
      image: require("../assets/pexels.jpg"),
      image1: require("../assets/pexels1.jpg"),
      image2: require("../assets/pexels2.jpg")
    };
  }
};
</script>
<style>
/* @media screen and (min-width: 380px) {
  .container{
    float: center;
  }
} */
</style>
