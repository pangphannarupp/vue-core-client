<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <ul>
      <li><button v-on:click="sample">Sample</button></li>
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
    sample() {
      this.$core.sample({
        callback: function (result: any) {
          console.log(result);
        }
      });
    },
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
