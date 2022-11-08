
const importado = require('./Modulos/index')

console.log(importado)

console.log('culo' +importado.culo)
console.log('series' + importado.series.saludar())



// function Person(first, last, age, eyecolor) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eyecolor;
//   }
  
//   Person.prototype.mostrarName = function() {
//     return this.firstName + "soy un  " + this.lastName;
//   };

//   let nuevaPersona = new Person('pepe','choto',50,'black'); 
//   console.log(nuevaPersona);
//   console.log(nuevaPersona.mostrarName());