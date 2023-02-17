<template>
  <v-app>
    <v-card color="#E1BEE7">
      <v-container>
        <v-row>
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
    <v-card color="#E1BEE7">
      <h1 class="purple">Brands</h1>

      <v-slide-group>
        <v-slide-item v-for="item in items" :key="item.title" class="ma-5">
          <v-card color="#eeeeee" max-width="200px">
            <!-- <v-card-title class="justify-center" style=" color: purple;"> -->
            <!-- {{ item.model }}</v-card-title> -->
            <v-img :src="item.image" height="200px"></v-img>
            <v-card-title class="justify-center" style=" color: purple;">
              {{ item.title }}</v-card-title
            >
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-card>
  </v-app>
</template>
<script>
export default {
  name: "Brands",
  data() {
    return {
      image: require("../assets/pexels.jpg"),
      image1: require("../assets/pexels1.jpg"),
      image2: require("../assets/pexels4.jpg"),

      items: [
        {
          title: "Mobile",
          image: require("../assets/pexels2.jpg"),
          model: "NOKIA"
        },
        {
          title: "Mobile",
          image: require("../assets/pexels2.jpg"),
          model: "NOKIA"
        },
        {
          title: "Mobile",
          image: require("../assets/pexels2.jpg"),
          model: "NOKIA"
        },
        {
          title: "Mobile",
          image: require("../assets/pexels2.jpg"),
          model: "NOKIA"
        },
        {
          title: "Mobile",
          image: require("../assets/pexels2.jpg"),
          model: "NOKIA"
        },
        {
          title: "Mobile",
          image: require("../assets/pexels2.jpg"),
          model: "NOKIA"
        },

        {
          title: "Mobile",
          image: require("../assets/pexels1.jpg")
        },
        {
          title: "Mobile",
          image: require("../assets/pexels2.jpg"),
          model: "NOKIA"
        },
        {
          title: "Mobile",
          image: require("../assets/pexels3.jpg"),
          model: "NOKIA"
        },
        {
          title: "Mobile",
          image: require("../assets/pexels4.jpg"),
          model: "NOKIA"
        },
        {
          title: "Mobile",
          image: require("../assets/pexels5.jpg"),
          model: "NOKIA"
        }
      ]
    };
  }
};
</script>
<style>
h1 {
  text-align: center;
  color: #fff;
  margin: 25px 0px 25px 0px;
}
</style>
