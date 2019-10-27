# Aufgabe 2.1

* board array:

```js
board: [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]
```

* rendern von den 9 feldern

```html
  <div v-for="(row, row_index) in board">
    <div v-for="(column, column_index) in row">
      <cell :value="board[row_index][column_index]"></cell>
    </div>
  </div>
```
## Aufgabe 2.2

* Click Handler

```html
<div @click="$emit('tap')" class="cell">
  <span v-if="value !== ''">{{ value }}</span>
</div>
```

und in `TicTacToe.vue`

```html
<cell @tap="handleClick(row_index,column_index)" :value="board[row_index][column_index]"></cell>
```

* handleClick einfach

```js
board[row_index][column_index] = this.next;
this.nextPlayer();
```

* nextPlayer
```js
nextPlayer: function() {
  // Hier implementierung einfügen
  this.next === "X" ? this.next = "O" : this.next = "X";
},
```

## Aufgabe 2.3 

```js
handleReset: function() {
  let board = [["", "", ""], ["", "", ""], ["", "", ""]];
  this.board = board.splice(0);
}
```

## Aufgabe 2.4, 2.5 und 2,6

```js
    handleClick: function(row_index,column_index) {
      // ...

      if (this.checkWinner()) {
        this.finished = true;
      } else if (this.checkStalemate()) {
        this.stale = true;
        this.finished = true;
      } else {
        this.nextPlayer();
      }
    },
    checkWinner: function() {
      return (
        this.checkValues(this.rows[0]) ||
        this.checkValues(this.rows[1]) ||
        this.checkValues(this.rows[2]) ||
        this.checkValues([this.rows[0][0], this.rows[1][0], this.rows[2][0]]) ||
        this.checkValues([this.rows[0][1], this.rows[1][1], this.rows[2][1]]) ||
        this.checkValues([this.rows[0][2], this.rows[1][2], this.rows[2][2]]) ||
        this.checkValues([this.rows[0][0], this.rows[1][1], this.rows[2][2]]) ||
        this.checkValues([this.rows[0][2], this.rows[1][1], this.rows[2][0]]));
    },
    checkValues: function(values) {
      return this.checkValuesPresent(values) && this.checkValuesMatch(values);
    },
    checkValuesPresent: function(values) {
      return (values[0] != '' && values[1] != '' && values[2] != '');
    },
    checkValuesMatch: function(values) {
      return (values[0] === values[1]) && (values[1] === values[2]);
    },
    checkStalemate: function() {
      return !this.finished &&
        (this.checkValuesPresent(this.rows[0]) &&
        this.checkValuesPresent(this.rows[1]) &&
        this.checkValuesPresent(this.rows[2]));
    },
```
