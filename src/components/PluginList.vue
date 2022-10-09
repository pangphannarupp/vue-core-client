<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <ul>
      <li><button v-on:click="appInfo">App Info</button></li>
      <li><button v-on:click="biometricAuthentication">Biometric Authentication</button></li>
      <li><button v-on:click="browseQRCode">Browse QR Code</button></li>
      <li><button v-on:click="showDatePicker">Date Picker</button></li>
      <li><button v-on:click="exitApp">Exit App</button></li>
      <li><button v-on:click="externalBrowser">External Browser</button></li>
      <li><button v-on:click="scanQRCode">Scan QR Code</button></li>
      <li><button v-on:click="camera">Show Camera</button></li>
      <li><button v-on:click="speechToText">Speech to text</button></li>
      <li><button v-on:click="showToast">Toast Message</button></li>
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
  mounted: function() {
    this.$core.addEventListener('ready', this.appInfo);
    this.$core.addEventListener('onPause', function() {
      console.log('listener => pause');
    });
    this.$core.addEventListener('onResume', function() {
      console.log('listener => resume');
    });
    this.$core.addEventListener('onDestroy', function() {
      console.log('listener => destroy');
    });
    this.$core.addEventListener('onBackPressed', function() {
      console.log('listener => onBackPressed');
    });
    this.$core.addEventListener('onNetworkChange', this.connection);
  },
  methods: {
    connection(isAvailable: boolean) {
      if(!isAvailable) {
        this.$core.alertDialog("connection is " + isAvailable);
      }
    },
    browseQRCode() {
      var that = this.$core;
      this.$core.browseQRCode({
        callback: function (result: any) {
          that.alertDialog(result);
        }
      });
    },
    scanQRCode() {
      var that = this.$core;
      this.$core.scanQRCode({
        callback: function (result: any) {
          that.alertDialog(result);
        }
      });
    },
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
    externalBrowser() {
      this.$core.externalBrowser({
        url: 'https://www.youtube.com/'
      });
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
  margin: 0;
    padding: 0px;
}

li {
  display: list-item;
  margin: 10px 10px;
}

a {
  color: #42b983;
}

button {
  width: 100%;
    height: 40px;
}
</style>
