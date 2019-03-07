// var name = prompt('¿Cuál es tu nombre?').toLowerCase()
// var age = prompt('¿Cuál es tu edad?')
// alert(name)
// alert(age)

// if(age > 18){
//   document.write('Sí eres mayor de edad')
// } else {
//   document.write('Eres menor de edad')
// }

// if(name === 'jonh'){
//   alert('Si eres Jonh')
// } else {
//   alert('Eres un intruso')
// }


//for(let index = 0; index < name.length; index = index +1 ){
//  document.write(name[index] + "<br>")
//}

// var number = prompt('Elige tu numero')

// if(number % 2 == 0){
//   document.write("Tu numero es par")
// } else {
//   document.write("Tu numero es impar")
// }

var name = prompt('¿Cuál es tu nombre?').toLowerCase()
var count = 0

for(var index = 0; index < name.length; index ++) {
  if(name[index] == "a" || name[index] == "e" || name[index] == "i" || name[index] == "o" || name[index] == "u") {
    count = count + 1
  }  
}
document.write( "Tu palabra tiene " + count + " vocales")

