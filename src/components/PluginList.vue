<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <ul>
      <li><button v-on:click="appInfo">App Info</button></li>
      <li><button v-on:click="biometricAuthentication">Biometric Authentication</button></li>
      <li><button v-on:click="showDatePicker">Date Picker</button></li>
      <li><button v-on:click="exitApp">Exit App</button></li>
      <li><button v-on:click="showToast">Toast Message</button></li>
      <li><button v-on:click="camera">Show Camera</button></li>
      <li><button v-on:click="speechToText">Speech to text</button></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PluginList',
  props: {
    msg: String,
  },
  methods: {
    appInfo() {
      var that = this.$core;
      this.$core.appInfo({
        callback: function (result: any) {
          that.alertDialog(result);
        }
      });
    },
    showDatePicker() {
      var that = this.$core;
      that.showDatePicker({
        callback: function (result: any) {
          that.alertDialog(result);
        }
      });
    },
    exitApp() {
      this.$core.exitApp();
    },
    biometricAuthentication() {
      var that = this.$core;
      this.$core.biometricAuthentication({
        title: 'Verify it\'s you',
        description: 'Use your biometric to continue',
        cancel_text: 'Cancel',
        confirm_require: true,
        allow_device_credential: true,
        callback: function (result: any) {
          that.alertDialog(result);
        }
      });
    },
    showToast() {
      var that = this.$core;
      this.$core.showToast({
        message: 'Hello JS',
        duration: 'SHORT',
        callback: function (result: any) {
          that.alertDialog(result);
        }
      });
    },
    camera() {
      var that = this.$core;
      this.$core.showCamera({
        callback: function (result: any) {
          that.alertDialog(result);
        }
      });
    },
    speechToText() {
      var that = this.$core;
      this.$core.speechToText({
        language: 'km_KH',
        description: 'កំពុងស្ដាប់...',
        callback: function (result: any) {
          that.alertDialog(result);
        }
      });
    }
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
