

let signo = function(numero){
console.log(numero)
if (numero > 1) {
    return 1}
else if (numero < 0) {
return -1
}
else if (numero == 0) {
    return 0;
}
return signo;
}

console.log(signo(15))

let fruta = 'manzana';
console.log (fruta == 'manzana' ? 'manzana es':'naranaja es');

console.log(fruta);
let a = 'a'
let b ='b' 
let c = true
let d = 5

console.log(`a es ${a} y 
b = ${b}
y c = ${c}
y d = ${d}`)