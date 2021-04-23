
var studente = {
  name : "alejandro",
  lastname : "malesani",
  age : 22
}
studente.segno = "bilancia"

for(var key in studente){
  var studenteIn = "indice: "+ key + " valore: "+ studente[key];
  console.log(studenteIn)
}

//////////////////////////////////////
console.log("")

studenti = [
  {name : "juan",
  lastname : "martinez",
  age : 22
  },

  {name : "fabio",
  lastname : "zacco",
  age : 21
  },

  {name : "luis",
  lastname : "fermin",
  age : 20
  }
]


var nombre = prompt("digitta il tuo nome")
var apellido = prompt("digitta il cognome")
var edad = prompt("digitta la tua etta")

addStudente(studenti,nombre,apellido,edad)


//stampa senza ciclo
console.log("vedere tutto l'array")
console.log(studenti);


//stampa con ciclo 
for(var dati of studenti){
  console.log("")

  //vedo l'array con gli objetivi separatamente
  for(var key in dati){
    console.log("key : " + key + " valore: " + dati[key])
  }
}


/////funzione-aggiungere dentro un array i dati dell'utente/////

function addStudente(target, nombre, apellido, edad){
  target.push({
    name : nombre,
    lastname : apellido,
    age : edad
  })
}



  

