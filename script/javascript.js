
var studente = {
  name : "alejandro",
  lastname : "malesani",
  age : 22
}

for(var key in studente){
  var studenteIn = "indice: "+ key + " valore: "+ studente[key];
  console.log(studenteIn)
}


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

//stampa senza ciclo
console.log(studenti);

//stampa con ciclo 
for(var dati of studenti){
  //vedo l'array con gli objetivi separatamente
  console.log(dati)
}

  

