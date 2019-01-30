<template>
  <div class="container-upload-images">
    <v-btn @click.native="selectFile" v-if="!uploadEnd && !uploading">Subir {{ this.number }} imagen!
      <v-icon right aria-hidden="true">add_photo</v-icon>
    </v-btn>
      <input 
      id="files"
      type="file"
      name="file"
      ref="uploadInput"
      accept="image/*"
      :multiple="false"
      @change="detectFiles($event)" />
        <v-progress-circular
          v-if="uploading && !uploadEnd"
          :size="100"
          :width="15"
          :rotate="360"
          :value="progressUpload"
          color="primary">
        %
        </v-progress-circular>
        <img 
        v-if="uploadEnd"
        :src="downloadURL"
        width="250px"
        height="250px" />
        <div v-if="uploadEnd">
          <v-btn 
            class="ma-0"
            dark
            small
            color="error"
            @click="deleteImage()">Borrar
          </v-btn>
        </div>
  </div>
</template>


<script>
import firebase from 'firebase';

export default {
  name: 'UploadImages',
  data() {
    return {
      progressUpload: 0,
      fileName: '',
      uploadTask: '',
      uploading: false,
      uploadEnd: false,
      downloadURL: '',
      hash: '',
    }
  },
  props: {
    number: '',
  },
  methods: {
    selectFile() {
      this.$refs.uploadInput.click();
    },
    detectFiles (e) {
      let fileList = e.target.files || e.dataTransfer.files
      Array.from (Array(fileList.length).keys()).map(x => {
        this.upload(fileList[x])
      })
    },
    upload (file) {
      this.hash = Math.random().toString(36).substring(7);
      this.fileName = file.name;
      this.uploading = true;
      this.uploadTask = firebase.storage().ref('images/' + file.name + this.hash).put(file)
    },
    deleteImage() {
      firebase.storage()
      .ref('images/' + this.fileName + this.hash)
      .delete()
      .then(() => {
        this.uploading = false;
        this.uploadEnd = false;
        this.downloadURL = '';
      })
      .catch((error) => {
        console.error('file delete error ocurred: ${error}')
      })
    },
  },
  watch: {
      uploadTask : function () {
        this.uploadTask.on('state_changed', sp => {
          this.progressUpload = Math.floor(sp.bytesTransferred / sp.totalBytes * 100)
        },
        null,
        () => {
          this.uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
            this.uploadEnd = true;
            this.downloadURL = downloadURL;
            this.$emit('downloadURL', downloadURL);
          })
        })
      }
    }
}
</script>


<style scoped>
.progress-bar {
  margin: 10px 0;
}

input[type="file"] {
  position: absolute;
  clip: rect(0,0,0,0);
}
.container-upload-images{
  display: flex;
}
</style>