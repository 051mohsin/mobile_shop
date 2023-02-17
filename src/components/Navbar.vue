<template>
  <v-sheet>
    <v-app-bar app fixed dense color="purple" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>M.S</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-alert
        v-model="alert"
        dismissible
        color="purple"
        elevation="4"
        class="mt-10"
        width="500"
      >
        <v-spacer></v-spacer>
        <v-text-field width="400" placeholder="search"></v-text-field>
      </v-alert>

      <div class="text-center">
        <v-btn v-if="!alert" dark icon @click="alert = true">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </div>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" dark fixed temporary color="purple">
      
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Mobile Shop</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <div class="pa-8 ">
          <Accounts />
        </div>
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          router
          :to="item.route"
          active-class="border"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      
               <template v-slot:append>
        
      </template>

    </v-navigation-drawer>
  </v-sheet>
</template>

<script>
import Accounts from './Accounts.vue'
export default {
  components:{
    Accounts
  },
  data() {
    return {
      drawer: false,
      alert: false,
      items: [
        { title: "Home", icon: "mdi-home-city", route: "/" },

        { 
          title: "Barnds",
           icon:"mdi mdi-baby-carriage",
            route: "/brand"
           },
        // {
        //   title: "Accounts",
        //   icon: "mdi-account-group-outline",
        //   route: "/account "
        // },
        { 
        title: "Contact",
         icon: "mdi mdi-file-phone",
        route: "/contact"
         }
      ],
      mini: true
    };
  }
};
</script>
<style>
.border {
  border-left: 4px solid #fff;
}
.toolbar {
  position: fixed;
}
</style>
