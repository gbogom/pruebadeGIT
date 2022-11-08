let sumar = (num1,num2) => num1+num2;
let restar = (num1,num2) => num1-num2;
let dividir = (num1,num2) => num1/num2;
let multiplicar = (num1,num2) => num1*num2;

function aplicarCallback (num1, num2, functionCallBack){
    return functionCallBack(num1,num2);
}

console.log(aplicarCallback(5,7,sumar));


