# Aufgabe 1

Die erste Aufgabe soll die Funktionalität für einen einfachen Taschenrechner bereitstellen.
Dazu müssen die vier Grundrechen operationen implementiert werden. Die Grundrechen Operationen sind als Javascript Funktionen in der Datei `CalculatorMixin.js` implementiert und müssen vervollständigt werden (Zeilen `14` bis `29`). 

**Ziel** Kennenlernen von Variablen in Javascript

**Tipps** 
* Die Themen `Deklarationen, Variablen` aus dem [Mozilla Firefox Guide](https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/Grammatik_und_Typen) können von Hilfe sein

* Bei welcher Rechenoperation können probleme auftreten?

## Aufgabe 1.1 

Wir möchten die Funktionalität von unserem Taschenrechner erweitern, hierzu erweitern wir diesen um die folgenden Funktionen:

* Wurzel ziehen
* Potenz berechnen
* [Fakultät](https://de.wikipedia.org/wiki/Fakult%C3%A4t_(Mathematik)) berechnen

Zuerst müssen wir also unsere Liste an Rechenoperationen erweitern. 

* Erweitert die Rechenoperation Auswahl um die folgenden Felder: `sqr`, `exp`, `fac` - schaut euch dafür die bestehende implementierung an und überlegt euch wir ihr diese erweitern könnt. (`CalculatorMixin.js` Zeile `5`)

**Hinweis: Die oben genannten Bezeichnungen sollten beibehalten werden**

* Erweitert den Taschenrechner um drei neue Methoden, d.h. fügt nach der Funktion `Divison` drei neue Funktionen ein `squareRoot`, `exponentiation`, `factorial`.  (`CalculatorMixin.js`)

**Hinweis: Die oben genannten Bezeichnungen sollten beibehalten werden**

* Überlegt euch eine mögliche Implementierung für die jeweilige Rechenoperation

* Um die Fakultät von einer Zahl zu bestimmen könnt ihr entweder mit einer [Schleife](https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/schleifen_und_iterationen) oder mit [Rekursion](https://de.wikipedia.org/wiki/Rekursion) arbeiten. 

**Tipps**
* Für das speichern von einem Ergebnis könnt ihr euch die bereits implementierten funktionen anschauen. 
* Die [Wurzel](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt) kann in Javascript über `Math.sqrt()` berechnet werden.
* Die [Potenz](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/pow) kann in Javascript über `Math.pow()` berechnet werden.
* **Erinnerung** Fakultät: `n! = n * (n-1)!` also `3! = 3*2! = 3*2*1`

