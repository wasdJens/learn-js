<template>
  <b-row>
    <b-col cols="2">
      <b-list-group>
        <router-link v-bind:to="{ name: 'playground' }">
          <b-list-group-item>Playground</b-list-group-item>
        </router-link>
        <router-link v-bind:to="{ name: 'calculator' }">
          <b-list-group-item>Taschenrechner</b-list-group-item>
        </router-link>
        <router-link v-bind:to="{ name: 'tictactoe' }">
          <b-list-group-item>TicTacToe</b-list-group-item>
        </router-link>
      </b-list-group>
    </b-col>
    <b-col>
      <router-view></router-view>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Main"
};
</script>
