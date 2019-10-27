<template>
  <b-row>
    <b-col cols="6">
      <b-card> </b-card>
    </b-col>

    <b-col cols="5">
      <info v-bind:fileContent="fileContent"></info>
    </b-col>
  </b-row>
</template>

<script>
import aufgabe from "../../docs/Aufgabe2.md";

export default {
  name: "TicTacToe",
  data: function() {
    return {
      fileContent: aufgabe,
    };
  }
};
</script>
