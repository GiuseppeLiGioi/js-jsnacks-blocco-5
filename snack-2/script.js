const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];
// con for
for(let i = 0; i < people.length; i++){
  console.log(people[i].name);
}

//con foreach
people.forEach(element => {
  
  return console.log(element.name)
});

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'