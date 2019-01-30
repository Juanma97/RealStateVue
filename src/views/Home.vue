<template>
  <div class="container-home">
    <ToolbarComponent title="Inicio"/>
    <div class="container-pisos">
      <router-link tag="upload" to="/piso">
        <div class="pisos" v-for="(piso,i) in pisos" :key="i">
          <img class="img-piso" v-bind:src="piso.imagen1"/>
          <h4>{{piso.titulo}}</h4>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import ToolbarComponent from '@/components/ToolbarComponent.vue';
import firebase from 'firebase';

  export default {
    components: {
      ToolbarComponent,
    },
    data (){
      return {
        pisos: [],
      }
    },
    created: function () {
    var db = firebase.database();
    const eventsRef = db.ref('/viviendas/');
    eventsRef.on('value', (snapshot) => {
      console.log(snapshot.val())
      this.pisos = snapshot.val()
    })
  }
  }
</script>


<style scoped>
  .container-pisos{
    padding: 32px;
    margin-top: 56px;
    display: grid;
    grid-gap: 32px;
    justify-content: center;
    grid-template-columns: 299px 299px 299px 299px;
  }
  .img-piso{
    width: 299px;
    height: 188px;
  }
  .pisos{
    width: 299px;
    height: 289px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    overflow: hidden;
  }
  .pisos:hover{
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    cursor: pointer;
  }

  .pisos h4{
    margin: 8px;
  }
  .pisos p{
    margin: 8px;
  }
</style>
