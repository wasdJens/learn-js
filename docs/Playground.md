# Playground

In der Datei `Playground.vue` könnt ihr selbst mit Vue / HTML etc rumspielen und ausprobieren.

## HTML bauen mit Vue

Mit vue könnt ihr ganz einfach html schreiben und zwar müsst ihr eure html tags innerhalb der `<template>` tags schreiben (In der Datei `Playground.vue` könnt ihr eure eigenen HTML tags zwischen den tags `<b-col> </b-col>` schreiben (Siehe Code Kommentar))

## Variablen ausgeben mit Vue

Wenn ihr nicht nur statischen Inhalt ausgeben möchtet könnt ihr mit Vue auch dynamischen Inhalt in Form von Variablen ausgeben. 

Hierfür deklariert eine Variable innerhalb vom `return {}` block z.B. `myVariable: "Hallo Welt"`. Um diese nun im template auszugeben müsst ihr innerhalb von euren html tags folgende syntax verwenden `{{myVariable}}` also z.B. `<h1> {{myVariable}}</h1>`

```js
data: function() {
  return {
    
  };
}
```

## Vue und Bootstrap komponenten ausprobieren

Ihr habt vlt schon bemerkt in den vorhanden Vue Dateien befinden sich im `<template>` immer mal wieder merkwürdige "html komponenten" z.B. `<b-col> </b-col>` -  wir verwenden für unsere anwendung [VueBootstrap](https://bootstrap-vue.js.org/) [Komponenten](https://bootstrap-vue.js.org/docs/components) zusätzlich ihr könnt auch gerne mal mit diesen rumspielen 