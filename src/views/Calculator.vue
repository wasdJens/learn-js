<template>
  <b-row>
    <b-col cols="6">
      <b-card>
        <b-form>
          <b-form-group label="Erste Zahl" description="Gib eine Zahl ein">
            <b-form-input
              type="number"
              v-model.number="form.firstNumber"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            label="Zweite Zahl"
            description="Gib eine weitere Zahl ein"
          >
            <b-form-input
              type="number"
              :disabled="selected === 'sqr' || selected === 'fac'"
              v-model.number="form.secondNumber"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            label="Rechenoperation auswählen"
            description="Nur eine Auswahl möglich"
          >
            <b-form-select
              v-model="selected"
              :options="operations"
            ></b-form-select>
          </b-form-group>
          <b-button
            variant="success"
            :disabled="selected === null ? true : false"
            v-on:click="calculate(form.firstNumber, form.secondNumber)"
            >Berechnen</b-button
          >
          <b-form-group label="Ergebnis">
            <b-form-input
              type="text"
              v-model="result"
              :disabled="true"
            ></b-form-input>
          </b-form-group>
        </b-form>
      </b-card>
    </b-col>
    <b-col cols="5">
      <info v-bind:fileContent="fileContent"></info>
    </b-col>
  </b-row>
</template>

<script>
import { CALC_MIXIN } from "@/functions/CalculatorMixin";
import aufgabe from "../../docs/Aufgabe1.md";

export default {
  name: "Calculator",
  mixins: [CALC_MIXIN.calculatorMixin],
  data: function() {
    return {
      selected: null,
      form: {
        firstNumber: 0,
        secondNumber: 0
      },
      fileContent: aufgabe
    };
  },
  methods: {
    calculate: function(firstNumber, secondNumber) {
      switch (this.selected) {
        case "add":
          this.addition(firstNumber, secondNumber);
          break;
        case "sub":
          this.subtraction(firstNumber, secondNumber);
          break;
        case "mul":
          this.multiplication(firstNumber, secondNumber);
          break;
        case "div":
          this.division(firstNumber, secondNumber);
          break;
        case "sqr":
          this.squareRoot(firstNumber);
          break;
        case "exp":
          this.exponentiation(firstNumber, secondNumber);
          break;
        case "fac":
          this.factorial(firstNumber);
          break;
      }
    }
  }
};
</script>
