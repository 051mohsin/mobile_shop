<template>
  <v-row>
    <v-dialog v-model="dialog" persistent max-width="800px">
      <template v-slot:activator="{ on }">
        <v-btn outlined dark v-on="on">Creta A Account</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">New Project</span>

          <v-spacer></v-spacer>

          <v-btn class="d-flex" text @click="dialog = false">
            <v-icon class="mdi mdi-close"></v-icon>
          </v-btn>
        </v-card-title>
        <v-form v-model="valid">
          <v-container>
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              :counter="10"
              label="First name"
              required
            ></v-text-field>

            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              :counter="10"
              label="Last name"
              required
            ></v-text-field>

            <v-col>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>
            </v-col>
          </v-container>
        </v-form>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: true
    };
  }
};
</script>
