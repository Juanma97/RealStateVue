<template>
  <div class="container-upload">
    <ToolbarComponent title="Subir vivienda"/>
    <v-form class="form">
      <div class="first-column"></div>
      <div class="second-column">
        <h2>Titulo de vivienda</h2>
        <v-text-field
        outline
        counter="50"
        ></v-text-field>
        <h2>Descripcion</h2>
        <v-textarea
        outline
        counter="500"
        ></v-textarea>
        <h2>Baños</h2>
        <v-text-field
        outline
        ></v-text-field>
        <h2>Habitaciones</h2>
        <v-text-field
        outline
        ></v-text-field>
        <div class="things">
          <div>
            <h2>Ascensor</h2>
            <v-checkbox
            v-model="ascensor"
            ></v-checkbox>
          </div>
          <div>
            <h2>Jardin</h2>
            <v-checkbox
            v-model="jardin"
            ></v-checkbox>
          </div>
          <div>
            <h2>Garaje</h2>
            <v-checkbox
            v-model="garaje"
            ></v-checkbox>
          </div>
          <div>
            <h2>Libre VPO</h2>
            <v-checkbox
            v-model="libreVPO"
            ></v-checkbox>
          </div>
          <div>
            <h2>Piscina</h2>
            <v-checkbox
            v-model="piscina"
            ></v-checkbox>
          </div>
          <div>
            <h2>Solana</h2>
            <v-checkbox
            v-model="solana"
            ></v-checkbox>
          </div>
        </div>
        <h2>Precio</h2>
        <v-text-field
        outline
        ></v-text-field>
        <h2>Tipo</h2>
        <v-text-field
        outline
        ></v-text-field>
      </div>
      <div class="third-column"></div>
    </v-form>
  </div>
</template>


<script>
import ToolbarComponent from '@/components/ToolbarComponent.vue';

export default {
  name: 'Upload',
  data() {
    return {
      ascensor: false,
      jardin: false,
      garaje: false,
      libreVPO: false,
      piscina: false,
      solana: false,
    }
  },
  components: {
    ToolbarComponent,
  }
}
</script>


<style scoped>
.form{
  display: grid;
  grid-template-columns: auto auto auto;
  margin-top: 7%;
}

.things{
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto;
}
</style>
