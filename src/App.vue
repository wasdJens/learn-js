<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col>Sidebar</b-col>
        <b-col>
          <calculator></calculator>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Calculator from "@/views/Calculator.vue";

export default {
  name: "App",
  components: { Calculator }
};
</script>
