import Vue from 'vue';
import './plugins/vuetify';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

const config = {
  apiKey: 'AIzaSyChPcwO2LFhfy_yMU54jXiVKpzuOgL6rnE',
  authDomain: 'realstate-f6de0.firebaseapp.com',
  databaseURL: 'https://realstate-f6de0.firebaseio.com',
  projectId: 'realstate-f6de0',
  storageBucket: 'realstate-f6de0.appspot.com',
  messagingSenderId: '478126296022',
};
firebase.initializeApp(config);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
