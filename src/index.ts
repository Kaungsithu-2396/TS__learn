let person = "Kaung si thu";
let data: string = person.slice(0, 2).toUpperCase();
function chgUpperCase(str: String) {
    return str.toUpperCase();
}
console.log(chgUpperCase(data));
function greet(person: string, date: Date) {
    console.log(`
         Welcome  ${person}, today is ${date.toDateString()}!
      `);
}
greet("Mg kaung", new Date());
