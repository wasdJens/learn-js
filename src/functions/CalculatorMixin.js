const calculatorMixin = {
  data: function() {
    return {
      result: 0,
      operations: [
        { value: "add", text: "Addition" },
        { value: "sub", text: "Subtrahieren" },
        { value: "mul", text: "Multiplikation" },
        { value: "div", text: "Division" }
      ]
    };
  },
  methods: {
    addition: function(firstNumber, secondNumber) {
      let result = 0;
      this.result = result;
    },
    subtraction: function(firstNumber, secondNumber) {
      let result = 0;
      this.result = result;
    },
    multiplication: function(firstNumber, secondNumber) {
      let result = 0;
      this.result = result;
    },
    division: function(firstNumber, secondNumber) {
      let result = 0;
      this.result = result;
    }
  }
};

export const CALC_MIXIN = {
  calculatorMixin
};
