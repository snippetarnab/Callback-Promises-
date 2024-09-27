const person = {
firstName: "Jack", lastName: "s", age: 20,
};
function ageInDays (personObject, callback) {
const fullName = `${personObject.firstName} ${personObject.lastName}`;
const ageInDays = personobject.age * 365;
callback(fullName, ageInDays);
}
function logResult (fullName, ageInDays) {
console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}. `);
}