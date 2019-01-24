<template>
<div class="content-toolbar">
    <v-toolbar app flat color="#2f3640">
      <v-toolbar-title class="white--text">{{this.title}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <router-link class="button" tag="contact" to="/contact">
          <v-btn flat color="white">CONTACTO</v-btn>
        </router-link>
        <router-link class="button" tag="upload" to="/upload">
          <v-btn flat color="white">SUBIR VIVIENDA</v-btn>
        </router-link>
          <v-btn flat icon color="white">
            <router-link tag="home" to="/">
            <v-icon>home</v-icon>
            </router-link>
          </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    </div>
</template>


<script>
export default {
  name: 'ToolbarComponent',
  data () {
    return {
      drawer: false,
      clipped: false,
      fixed: false, 
    }
  },
  props: {
    title: '',
  }
}
</script>


<style scoped>
.button {
  height: 100%;
}
</style>
