/*
Task: Array Filtering And Mapping
Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.

**/
const persons=[
    {id:1, name:'Al-Amin', age:'24', gender:'male'},
    { id: 2, name: 'Sara', age: '29', gender: 'female' },
    { id: 3, name: 'John', age: '35', gender: 'male' },
    { id: 4, name: 'Emily', age: '22', gender: 'female' },
    { id: 5, name: 'Michael', age: '31', gender: 'male' },
    { id: 6, name: 'Jessica', age: '27', gender: 'female' },
    { id: 7, name: 'David', age: '40', gender: 'male' },
    { id: 8, name: 'Sophia', age: '26', gender: 'female' },
    { id: 9, name: 'Daniel', age: '32', gender: 'male' },
    { id: 10, name: 'Emma', age: '25', gender: 'female' },
    { id: 11, name: 'Matthew', age: '28', gender: 'male' }
]

function filterFemale(){
const filteredFemale=persons.filter(person=>person.gender!=='female');
const remainingPeople= filteredFemale.map(person=>person.name)
return remainingPeople;
}
const result= filterFemale();
console.log( result)