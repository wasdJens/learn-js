# Aufgabe 2

In der zweiten Aufgabe möchten wir ein wenig mit Vue und Javascript arbeiten um das Spiel TicTacToe zu implementieren. 

## Aufgabe 2.1: Das Spielfeld erstellen

Das Spielfeld besteht aus insgesamt 9 Feldern welche wir in einem [Array](https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/Grammatik_und_Typen#Array_Literale) abbilden.

* Öffnet die Datei `TicTacToe.vue` und erstellt in der `data()` funktion im `return` statement ein neues zweidimensionales Array `board` und initalisiert dieses mit drei arrays welche jeweils leere strings beinhalten
  * Das Array `Board` wird später die folgenden Werte beinhalten `"", "X", "O"`
  * Das Array `Board` repräsentiert das Spielfeld innerhalb der Implementierung

Jetzt benötigen wir noch eine Möglichkeit das Board auch auf dem Bildschirm auszugeben. (Aktuell ist unser Board nur eine weitere Variable).

Für die Ausgabe auf dem Bildschirm möchten wir [Vuejs](https://vuejs.org/) verwenden. 

**Hinweis: Wie Vue funktioniert etc müsst ihr noch nicht verstehen / wissen**

Damit vue etwas auf dem Bildschirm ausgibt arbeiten wir mit [HTML](https://developer.mozilla.org/de/docs/Web/HTML) und zwar können wir innerhalb von dem `<template>` code html einfügen um etwas auf dem Bildschirm anzuzeigen. 

**Um ein wenig mit HTML/Vue rumzuspielen könnt ihr zum Reiter `Playground` wechseln welcher euch ein wenig die Funktionalität von Vue vorstellt und wo ihr selbst ausprobieren könnt**

Es gibt nun zwei Möglichkeiten wir wir unsere 9 Felder darstellen, wir können 9 Mal die Komponente `Cell.vue` verwenden und jeweils von Hand eintragen welche Position aus dem `board` array wir übergeben möchten. 

Aber vue gibt uns die Möglichkeit mit Hilfe von zwei Schleifen durch das Array zu "loopen" um die passende Werte zu übergeben.

Um in Vue im Template schleifen auszuführen können wir innerhalb von einem html tag (Hier `div`) das `v-for` statement verwenden. Betrachtet z.b. den folgenden Code im `Playground.vue` dieser wird die Zahlen 1-5 ausgeben 

```html
<div v-for="n in 5">
{{n}}
</div>
```

Für unser Spielfeld müssen wir nun also über unser `board` Array loopen mit der hilfe von zwei schleifen. 

* Überlegt euch wie die Impelemtierung ausschauen muss
* Denkt daran wir haben ein zwei dimensionales Array
* Wie oft müssen die Schleifen durchlaufen werden

Innerhalb der zweiten schleife die folgende Code Zeile kan eingefügt werden um die `Cell.vue` Komponente aufruzufen. 

`<cell :value="board[row][column]"></cell>`

Wenn ihr alles richtig gemacht habt solltet ihr ein 3x3 Spielfeld im Browser sehen, wenn ihr im `board` array jetzt einen leeren string gegen ein `"X"` austauscht sollte euch ein X an dieser Stelle angezeigt werden.

## Aufgabe 2.2 Spieler Input erlauben

Aktuell wird nur das Spielfeld angezeigt im nächsten Schritt möchten wir es dem Spieler ermöglichen ein entsprechendes Feld zu klicken um entweder ein "X" oder ein "O" zu setzen.

Hierfür öffnen wir die Datei `Cell.vue` und fügen einen Click Handler zu dem html div element hinzu: 

`@click="$emit('click')"`

```html
<div @click="$emit('tap')" class="cell">
  <span v-if="value !== ''">{{ value }}</span>
</div>
```

Kurz erklärt: Wenn wir jetzt auf ein Feld klicken teilt die Komponente mit, dass diese geklickt wurde.

Jetzt müssten wir noch in der `TicTacToe.vue` Datei auf unser "klicken hören". Hierzu ersetzt ihr `cell` mit dem folgenden:

```html
<cell @tap="handleClick(row_index,column_index)" :value="board[row_index][column_index]"></cell>
```

Nun haben wir die folgende Situation: Wir können unser Spielfeld erstellen und auf Benutzer eingaben hören - aber aktuell werden die Benutzereingaben noch nicht angezeigt, bzw unsere board variable wird nicht geändert. 

In den Methoden befindet sich die Funktion `handleClick()` diese bekommt als Parameter die Position des geklickten Felds im `board` array übergeben. 

* Implementiert nun die folgende Funktionalität: Im `board` array sollte das geklickte Feld überschrieben werden entweder mit einem `X` oder mit einem `O` (Jeweils abwechselnd)
* Unser TicTacToe feld beginnt immer mit `"X"` - diesen wert könnt ihr in der Funktion mittels `this.next` abrufen. 
* Nach einem zug sollte die Variable `this.next` ersetzt werden entweder mit einem `"O"` nach einem `"X"` zug oder vice versa. **Implementiert hierfür die Funktion `nextPlayer` und ruft diese in `handleClick` auf.**
* Auf das board array habt ihr innerhalb der funktion mit hilfe der variable `board` zugriff (Ohne `this`);

## Aufgabe 2.3 Spielfeld zurücksetzen

Mit Hilfe der aktuellen Implementierung versucht einen neuen Button zu implementieren, welcher es erlaubt das Spielfeld wieder zurückzusetzen. 

**Tipps**
* Ihr könnt einen Bootstrap Button verwenden
* Die Funktion `handleReset` ist bereits als grundgerüst vorhanden
* Schaut euch die anderen Implementierungen an und versucht aus diesen abzuleiten wie ihr einen neuen Button hinzufügen könnt.

## Aufgabe 2.4 Einen Gewinner ermitteln

Im moment kann man unendlich lang spielen aber es wird nie ein möglicher Gewinner ausgewertet. Dieses wollen wir nun implementieren

* Überlegt euch einen Algorithmus, welcher überprüft ob ein möglicher Gewinner vorhanden ist. Implementiert diesen in der Funktion `checkWinner()`.

**Tipps**
* Ignoriert am Anfang irgendwelche Ausgaben im Browser und arbeitet mit dem `board` array. 
* Schaut euch an wie ihr mit Javascript Werte vergleichen könnt (Keycode: `If`)

## Aufgabe 2.5 Unentschieden ermitteln

Es kann auch passieren, dass es keinen Gewinner gibt - Erweitert also eure `checkWinner` Funktionalität um auch auf ein mögliches Unentschieden zu prüfen.

## Aufgabe 2.6 Gewinner / Verlierer / Unentschieden ausgeben

Aktuell wird zwar ein gewinner, verlierer, unentschieden ermittelt aber noch nicht im browser ausgegeben

* Überlegt euch wie ihr eine Ausgabe umsetzen könnt
* Erweitert das template um eine Gewinner / Verlierer / Unentschieden Ausgabe
* Implementiert die Ausgabe


**Tipps**
* Verwendet eine variable welche ihr mittels vue ausgebt. 