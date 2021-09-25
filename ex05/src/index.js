myPetsArray = [
{
    animalType:"Dog",
    name : "Pujdo"
},
{
    animalType:"Cat",
    name : "Maca"
},
{
    animalType:"Bird",
    name : "Tweety"
}
];
function myPetsFunction(pets) {
  
    var petsN = pets.name;

    return petsN;
   
}
console.log(myPetsFunction(myPetsArray[1]));
module.exports = myPetsFunction;