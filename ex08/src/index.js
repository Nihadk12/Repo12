var contacts = [{
    "firstName":"John",
    "lastName": "Doe",
    "number": "12365495208",
    "likes": ["C","C++","C#"]
},
{
    "firstName":"Jane",
    "lastName": "Doe",
    "number": "4568295761",
    "likes": ["Python","Swift","R"] 
},
{
    "firstName":"Richard",
    "lastName": "Roe",
    "number": "6938257149",
    "likes": ["React","Angular","Vue"]
},
{
    "firstName":"Jane",
    "lastName": "Roe",
    "number": "unknown",
    "likes": ["JavaScript","Node","HTML & CSS"]
}];

    function lookUpProfile(name, prop){
        const fnMatch = contacts.filter(cont => cont.firstName === name);
        return fnMatch.length ? (fnMatch[0][prop] ? fnMatch[0][prop] : "No such property") : "No such contact";
      }
    
 
console.log(lookUpProfile("John","likes"));
console.log(lookUpProfile("Jane","lastName"));
console.log(lookUpProfile("Rob","number"));
console.log(lookUpProfile("Rob","JavaScript"));
console.log(lookUpProfile("Jane","adress"));
module.exports = lookUpProfile;