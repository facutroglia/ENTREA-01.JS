//-------------- EJERCICIO 1 ------------------//

function ParImpar(a) {
    
    if (a % 2 !== 0) {
        console.log(`${a} es impar`);
    } else {
        console.log(`${a} es par`);
    }
}



//-------------- EJERCICIO 2 ------------------//


function NumeroMayor (n1,n2){
if (n1 > n2) {
    console.log( n1 +" "+ "es mayor" )
}
    else if( n1 < n2){
        console.log ( n2 +" " + " es mayor")
    }
    else {
        console.log("son iguales")
    }
}


//-------------- EJERCICIO 3 ------------------//


function Multiplo (num1){
    if (num1 % 5 == 0){
        console.log( (num1) + " " + "es multiplo de 5")
    }
    else{ 
        console.log( (num1) + " " + " no es multiplo de 5")
    }
}



//-------------- EJERCICIO 4 ------------------//


function Imprimir (Numero){
    for(let i = 0 ;i <= Numero;i++ ){
        console.log( i )
    }

}

//-------------- EJERCICIO 5 ------------------//


function Palabra(palabra, cantidad) {
    for (let i = 0; i < cantidad; i++ ) {
        console.log(palabra)
    }
}


//-------------- EJERCICIO 6 ------------------//


let comidas = [
    "Hamburguesa",
    "Pizza",
    "Milanesa",
    "pasta",
    "Empanadas",
    "Lomito",
    "Sanguche",
]
function ImprimiArray(array){
for (let alimentos of array){
    console.log(alimentos)
}
}

//-------------- EJERCICIO 7 ------------------//


let Numeros=[
    1,2,3,4,5,6,7,8,9,10
]
function SinQuinto(array){
    for(let i=0 ; i < array.length ; i++ ){
        if(i !== 4)
        console.log(array[i])}
    }

//--------------- EJERCICIO 8 ------------------//

function Multiplicador ( array , B ){
    for(let i = 0 ; i < array.length ; i++  ){
            console.log(array[i] * B)
    }
}
