<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <ul>
      <li><button v-on:click="showToast">Toast Message</button></li>
      <li><button v-on:click="camera">Show Camera</button></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  methods: {
    showToast() {
      this.$core.showToast({
        message: 'Hello Vue',
        duration: 'SHORT'
      });
    },
    camera() {
      this.$core.showCamera();
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
