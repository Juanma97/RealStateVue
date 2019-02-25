<template>
  <div class="container-upload">
    <ToolbarComponent title="Subir vivienda"/>
    <v-form class="form">
      <div class="first-column"></div>
      <div class="second-column">
        <h2>Titulo de vivienda</h2>
        <v-text-field
        v-model="titulo"
        outline
        ></v-text-field>
        <h2>Localizacion</h2>
        <v-text-field
        v-model="localizacion"
        outline
        ></v-text-field>
        <h2>Planta</h2>
        <v-text-field
        v-model="planta"
        outline
        ></v-text-field>
        <h2>Descripcion</h2>
        <v-textarea
        v-model="descripcion"
        outline
        ></v-textarea>
        <h2>Baños</h2>
        <v-text-field
        v-model="banos"
        outline
        ></v-text-field>
        <h2>Habitaciones</h2>
        <v-text-field
        v-model="habitaciones"
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
        v-model="precio"
        outline
        ></v-text-field>
        <h2>Tipo</h2>
        <v-text-field
        v-model="tipo"
        outline
        ></v-text-field>
        <h2>Metros cuadrados</h2>
        <v-text-field
        v-model="metros"
        outline
        ></v-text-field>
        <h2>Metros cuadrados utiles</h2>
        <v-text-field
        v-model="metrosUtiles"
        outline
        ></v-text-field>
        <UploadImages number="Primera" @downloadURL="saveFirstImage"/>
        <UploadImages number="Segunda" @downloadURL="saveSecondImage"/>
        <UploadImages number="Tercera" @downloadURL="saveThirdImage"/>
        <UploadImages number="Cuarta" @downloadURL="saveFourthImage"/>
        <UploadImages number="Quinta" @downloadURL="saveFifthImage"/>
        <UploadImages number="Sexta" @downloadURL="saveSixthImage"/>
        <UploadImages number="Septima" @downloadURL="saveSeventhImage"/>
        <v-btn color="blue" class="button" @click="upload()">Subir vivienda</v-btn>
      </div>
      <div class="third-column"></div>
    </v-form>
  </div>
</template>


<script>
import ToolbarComponent from '@/components/ToolbarComponent.vue';
import UploadImages from '@/components/UploadImages.vue';
import firebase from 'firebase';

export default {
  name: 'Upload',
  data() {
    return {
      titulo: '',
      localizacion: '',
      descripcion: '',
      banos: '',
      habitaciones: '',
      ascensor: false,
      jardin: false,
      garaje: false,
      libreVPO: false,
      piscina: false,
      solana: false,
      precio: '',
      tipo: '',
      metros: '',
      metrosUtiles: '',
      planta: '',
      imagen1: '',
      imagen2: '',
      imagen3: '',
      imagen4: '',
      imagen5: '',
      imagen6: '',
      imagen7: '',
    }
  },
  components: {
    ToolbarComponent,
    UploadImages,
  },
  methods: {
    upload(){
      var db = firebase.database();
      var ref = db.ref('/viviendas/').push({
        titulo: this.titulo,
        localizacion: this.localizacion,
        descripcion: this.descripcion,
        imagen1: this.imagen1,
        imagen2: this.imagen2,
        imagen3: this.imagen3,
        imagen4: this.imagen4,
        imagen5: this.imagen5,
        imagen6: this.imagen6,
        imagen7: this.imagen7,
        banos: this.banos,
        habitaciones: this.habitaciones,
        ascensor: this.ascensor,
        jardin: this.jardin,
        garaje: this.garaje,
        libreVPO: this.libreVPO,
        piscina: this.piscina,
        solana: this.solana,
        metros: this.metros,
        tipo: this.tipo,
        precio: this.precio,
        metrosUtiles: this.metrosUtiles,
        planta: this.planta,
      })
    },
    saveFirstImage(value){
      this.imagen1 = value;
    },
    saveSecondImage(value){
      this.imagen2 = value;
    },
    saveThirdImage(value){
      this.imagen3 = value;
    },
    saveFourthImage(value){
      this.imagen4 = value;
    },
    saveFifthImage(value){
      this.imagen5 = value;
    },
    saveSixthImage(value){
      this.imagen6 = value;
    },
    saveSeventhImage(value){
      this.imagen7 = value;
    }
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
.button{
  width: 100%;
}
</style>
