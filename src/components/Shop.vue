<template>
  <v-app>
    <v-card color="#E1BEE7" tile>
      <h1 class="purple">New Mobile</h1>
      <v-row>
        <v-col
          v-for="item in items"
          :key="item.title"
          class="d-flex justify-center"
        >
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card
              max-width="300"
              :elevation="hover ? 20 : 4"
              :class="{ 'on-hover': hover }"
            >
              <v-img class="white--text align-end" :src="item.image"></v-img>
              <v-card-title class="justify-center" style=" color: purple;">
                {{ item.title }}</v-card-title
              >

              <v-card-text class="text-h5 font-weight-bold justify-center">
                "Turns out semicolon-less style is easier and safer in TS
                because most gotcha edge cases are type invalid as well."
              </v-card-text>
              <v-card-actions>
                <v-btn color="purple" text>
                  Buy Now
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-card>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    show: false,
    items: [
      {
        title: "Home1",
        discrition: "well come new mobile",
        image: require("../assets/pexels.jpg")
      },
      {
        title: "Products2",
        discrition: "well come new mobile",
        image: require("../assets/pexels.jpg")
      },
      {
        title: "Barnds3",
        discrition: "well come new mobile",
        image: require("../assets/pexels.jpg")
      },
      {
        title: "Barnds4",
        discrition: "well come new mobile",
        image: require("../assets/pexels.jpg")
      },
      {
        title: "Barnds5",
        discrition: "well come new mobile",
        image: require("../assets/pexels.jpg")
      },
      {
        title: "Barnds6",
        discrition: "well come new mobile",
        image: require("../assets/pexels.jpg")
      },
      {
        title: "Barnds7",
        discrition: "well come new mobile",
        image: require("../assets/pexels.jpg")
      },
      {
        title: "Barnds8",
        discrition: "well come new mobile",
        image: require("../assets/pexels.jpg")
      }
    ]
  }),
  methods: {}
};
</script>
<style>
.v-card.on-hover.theme--dark {
  background-color: rgba(#e47d7d, 2);
}

h1 {
  text-align: center;
  color: #fff;
  margin: 25px 0px 25px 0px;
}
card-title {
  color: purple;
}
</style>
