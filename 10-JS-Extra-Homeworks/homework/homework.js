// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  let nuevaMatriz = [];
  let claves=Object.keys(objeto);
  for(let i = 0; i<claves.length;i++){
     nuevaMatriz.push([claves[i], objeto[claves[i]]]);
  }
  return nuevaMatriz;
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  
  var objeto = {}
  for(i = 0 ; i < string.length ; i++) {
      objeto[string.charAt(i)] = 0;
  }
  for(i = 0 ; i < string.length ; i++) {
     objeto[string.charAt(i)] = objeto[string.charAt(i)] + 1 ;
  }
 return objeto
}



function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let May="", Min="";
  for (let i=0; i < s.length; i++){
       let char = s.charAt(i);
       if(char===char.toUpperCase()){
          May+=s.charAt(i);
       } else{
        Min+=s.charAt(i);
       }
  } 
  return May + Min
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  var varmirr=' ', resultado='';

  for(var i=0;i<str.length;i++){
    if (str[i] !== ' '){
       varmirr=str[i] + varmirr;
    }else {
        resultado=resultado+varmirr;
        varmirr=' ';
    }
   
  } 
     varmirr=varmirr.substring(0, varmirr.length-1);
     resultado=resultado+varmirr;
     return resultado
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var varmirr='', resultado='' , numeroStr=numero.toString();
  
  for(var i=0;i<numeroStr.length;i++){

    varmirr=numeroStr[i] + varmirr;
  } 
     
  resultado=resultado+varmirr;
     
  if(resultado===numeroStr){
    return "Es capicua"
  }else{
    return "No es capicua"
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  var resultado=''
  for(var i=0;i<cadena.length;i++){
    if(cadena[i] != 'a' && cadena[i] !='b' && cadena[i] !='c'){
       resultado= resultado + cadena[i];
    }
  }
  return resultado;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  arr.sort((x, y) => x.length - y.length);
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 
  var arregloRpta=[] 
  for(var j=0;j<arreglo2.length;j++){
    for (var i=0;i<arreglo1.length;i++){
      if(arreglo2[j]===arreglo1[i]){
        arregloRpta.push(arreglo2[j]);
      }
    }
  }
  return arregloRpta
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

