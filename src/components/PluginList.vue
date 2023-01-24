<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <ul>
      <!-- <li><button v-on:click="showBannerVungleAds">Show Vungle Banner</button></li>
      <li><button v-on:click="hideBannerVungleAds">Hide Vungle Banner</button></li>
      <li><button v-on:click="showIntertistialVungleAds">Show Vungle Interstitial</button></li>
      <li><button v-on:click="showRewardedVungleAds">Show Vungle RewardedVideo</button></li> -->

      <!-- <li><button v-on:click="showBannerFacebbokAds">Show Facebook Banner</button></li>
      <li><button v-on:click="showIntertistialFacebbokAds">Show Facebook Interstitial</button></li>
      <li><button v-on:click="showRewardedFacebbokAds">Show Facebook RewardedVideo</button></li> -->

      <!-- <li><button v-on:click="showBannerAdmob">Show Admob Banner</button></li>
      <li><button v-on:click="hideBannerAdmob">Hide Admob Banner</button></li>
      <li><button v-on:click="showIntertistialAdmob">Show Admob Interstitial</button></li>
      <li><button v-on:click="showRewardedAdmob">Show Admob Rewarded</button></li> -->

      <!-- <li><button v-on:click="showBannerIronSource">Show Iron Source Banner</button></li>
      <li><button v-on:click="hideBannerIronSource">Hide Iron Source Banner</button></li>
      <li><button v-on:click="showIntertistialIronSource">Show Iron Source Interstitial</button></li>
      <li><button v-on:click="showRewardedVideoIronSource">Show Iron Source RewardedVideo</button></li> -->
      
      <!-- <li><button v-on:click="showBannerUnity">Show Unity Banner</button></li>
      <li><button v-on:click="hideBannerUnity">Hide Unity Banner</button></li>
      <li><button v-on:click="showIntertistialUnity">Show Unity Interstitial</button></li>
      <li><button v-on:click="showRewardedVideoUnity">Show Unity RewardedVideo</button></li> -->
      
      <li><button v-on:click="appInfo">App Info</button></li>
      <!-- <li><button v-on:click="biometricAuthentication">Biometric Authentication</button></li> -->
      <!-- <li><button v-on:click="browseQRCode">Browse QR Code</button></li>
      <li><button v-on:click="showDatePicker">Date Picker</button></li>
      <li><button v-on:click="exitApp">Exit App</button></li>
      <li><button v-on:click="externalBrowser">External Browser</button></li>
      <li><button v-on:click="scanQRCode">Scan QR Code</button></li> -->
      <li><button v-on:click="camera">Show Camera</button></li>
      <li><button v-on:click="speechToText">Speech to text</button></li>
      <li><button v-on:click="showToast">Toast Message</button></li>
      <!-- <li><button v-on:click="showToast">Toast Message</button></li> -->
      <!-- <li><button v-on:click="showToast">Toast Message</button></li> -->
      <!-- <li><button v-on:click="showToast">Toast Message</button></li> -->
      <!-- <li><button v-on:click="showToast">Toast Message</button></li> -->
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
    // this.$core.addEventListener('ready', this.initialize);
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
    initialize() {
      var that = this.$core;
      that.unityads.initialize({
        unityGameID: '4207969',
        testMode: false,
      });
      that.ironsourceads.initialize({});
      that.admob.initialize({});
      that.facebookads.initialize({});
      that.vungleads.initialize({
        callback: function(response: any) {
          alert(JSON.stringify(response));
        }
      });
    },
    showBannerVungleAds() {
      var that = this.$core;
      that.vungleads.showBanner({
        callback: function (result: any) {
          that.alertDialog(result);
        }
      });
    },
    hideBannerVungleAds() {
      var that = this.$core;
      that.vungleads.hideBanner({
        callback: function (result: any) {
          that.alertDialog(result);
        }
      });
    },
    showIntertistialVungleAds() {
      var that = this.$core;
      that.vungleads.showInterstitial({
        callback: function (result: any) {
          that.alertDialog(result);
        }
      });
    },
    showRewardedVungleAds() {
      var that = this.$core;
      that.vungleads.showRewarded({
        callback: function (result: any) {
          that.alertDialog(result);
        }
      });
    },
    showBannerFacebbokAds() {
      var that = this.$core;
      that.facebookads.showBanner({
        callback: function (result: any) {
          that.alertDialog(result);
        }
      });
    },
    showIntertistialFacebbokAds() {
      var that = this.$core;
      that.facebookads.showInterstitial({
        callback: function (result: any) {
          that.alertDialog(result);
        }
      });
    },
    showRewardedFacebbokAds() {
      var that = this.$core;
      that.facebookads.showRewarded({
        callback: function (result: any) {
          that.alertDialog(result);
        }
      });
    },
    showBannerAdmob() {
      var that = this.$core;
      that.admob.showBanner({
        adUnitId: 'ca-app-pub-3940256099942544/6300978111',
        callback: function (result: any) {
          that.alertDialog(result);
        }
      });
    },
    hideBannerAdmob() {
      var that = this.$core;
      that.admob.hideBanner({
        callback: function (result: any) {
          that.alertDialog(result);
        }
      });
    },
    showIntertistialAdmob() {
      var that = this.$core;
      that.admob.showInterstitial({
        adUnitId: 'ca-app-pub-3940256099942544/1033173712',
        callback: function (result: any) {
          that.alertDialog(result);
        }
      });
    },
    showRewardedAdmob() {
      var that = this.$core;
      that.admob.showRewarded({
        adUnitId: 'ca-app-pub-4761500786576152~8215465788',
        callback: function (result: any) {
          that.alertDialog(result);
        }
      });
    },
    showIntertistialIronSource() {
      var that = this.$core;
      that.ironsourceads.showInterstitial({
        callback: function (result: any) {
          that.alertDialog(result);
        }
      });
    },
    showRewardedVideoIronSource() {
      var that = this.$core;
      that.ironsourceads.showRewardedVideo({
        callback: function (result: any) {
          that.alertDialog(result);
        }
      });
    },
    showBannerIronSource() {
      var that = this.$core;
      that.ironsourceads.showBanner({
        adUnitId: 'banner',
        callback: function (result: any) {
          that.alertDialog(result);
        }
      });
    },
    hideBannerIronSource() {
      var that = this.$core;
      that.ironsourceads.hideBanner({
        callback: function (result: any) {
          that.alertDialog(result);
        }
      });
    },
    hideBannerUnity() {
      var that = this.$core;
      that.unityads.hideBanner({
        callback: function (result: any) {
          that.alertDialog(result);
        }
      });
    },
    showBannerUnity() {
      var that = this.$core;
      that.unityads.showBanner({
        adUnitId: 'banner',
        callback: function (result: any) {
          that.alertDialog(result);
        }
      });
    },
    showIntertistialUnity() {
      var that = this.$core;
      that.unityads.showInterstitial({
        adUnitId: 'video',
        callback: function (result: any) {
          that.alertDialog(result);
        }
      });
    },
    showRewardedVideoUnity() {
      var that = this.$core;
      that.unityads.showRewardedVideo({
        adUnitId: 'rewardedVideo',
        callback: function (result: any) {
          that.alertDialog(result);
        }
      });
    },
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