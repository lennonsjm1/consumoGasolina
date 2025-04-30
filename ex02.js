let tempoCarroA = 55;
let tempoCarroB = 50;
if(tempoCarroA < tempoCarroB ){
    console.log("Carro A venceu com tempo de " + tempoCarroA + " contra " + tempoCarroB);
}else if(tempoCarroA > tempoCarroB){
    console.log("Carro B venceu com tempo de " + tempoCarroB + " contra " + tempoCarroA);
}else{
    console.log("Empatou! Ambos fizeram " + tempoCarroA + " Segundos.");
}

function soma (num1, num2){
    console.log(num1 + num2)
}
soma(8, 5);


function calculo (num1, num2, num3){
    console.log(num1 + num2 - num3)
}
calculo(5, 5, 2)


function tt (num1){
    console.log((num1 % 2 === 0 )? " O n° é par" : (" O N° é impar"));
}
tt(1) // Este é um operador ternario (é condicionario numa função "IF, ELSE")


function num2 (num){
if(num % 2 === 0){
     console.log(num + " O número é par");
} else {
    console.log(num + " O número é impar");
}
}
num2(b)

