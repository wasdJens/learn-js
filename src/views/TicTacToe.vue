<template>
  <b-row>
    <b-col cols="6">
      <b-card title="TicTacToe">
        <div class="tictactoe-board">
          <!-- Fügt hier die Implementierung für das rendern vom Spielfeld ein -->

          <!-- --->
        </div>
      </b-card>
    </b-col>

    <b-col cols="5">
      <info v-bind:fileContent="fileContent"></info>
    </b-col>
  </b-row>
</template>

<script>
import aufgabe from "../../docs/Aufgabe2.md";
import Cell from "./Cell.vue";

export default {
  name: "TicTacToe",
  components: { Cell },
  data: function() {
    return {
      fileContent: aufgabe,
      // Hier board variable deklarieren
      board: undefined,
      // Ende
      next: "X"
    };
  },
  methods: {
    handleClick: function(row_index, column_index) {
      let board = this.board;
      // Hier "click" Logik implementieren

      // Folgende Zeile nicht entfernen
      this.board = board.splice(0);
    },
    nextPlayer: function() {
      // Hier implementierung für nextPlayer einfügen
    },
    checkWinner: function() {
      // Hier Gewinner Implementierung einfügen
    },
    handleReset: function() {
      // Folgende Zeile nicht entfernen
      this.board = board.splice(0);
    }
  }
};
</script>

<style>
.tictactoe-board {
  display: flex;
  flex-wrap: wrap;
  width: 204px;
  height: 204px;
}
</style>
