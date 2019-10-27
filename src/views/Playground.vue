<template>
  <div>
    <b-row>
      <b-col cols="6">
        <!-- Hier könnt ihr selbst mit html / vue spielen -->
        <h1>Hallo Welt!</h1>
        <!-- -->
      </b-col>

      <!-- Ignoriert die folgenden Zeilen -->
      <b-col cols="5">
        <info v-bind:fileContent="fileContent"></info>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Playground from "../../docs/Playground.md";

export default {
  name: "Playground",
  data: function() {
    return {
      // Ignoriert die folgende Variable
      fileContent: Playground
      // Hier könnt ihr eure eigenen Variablen einfügen
    };
  }
};
</script>
