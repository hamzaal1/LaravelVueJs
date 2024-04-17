<template lang="">
  <div> This Is Home Page <router-link to="/test">Go To Test</router-link> <button
    @click="getValue">get the data </button> <p v-if="response.data">{{ response.data }}</p>
  </div>
</template>
<script setup>
import { ref } from "vue";
import axios from "axios";

axios.defaults.baseURL = "https://laravelvuejs.test/api/"
// data
const response = ref([]);

// logic
const getValue = async () => {
  try {
    // you can add loading stat here
    response.value = await axios.get("test");
    console.log(response.value);
  } catch (error) {
    // Do something with the error
    console.log(error);
  }
};
</script>
<style lang=""></style>
