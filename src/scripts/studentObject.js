// Create a "student" object. The student should have the following properties:

// equipment(array).
// energy(number).
// grades(number).
// uniform(object with top, bottoms, shoes properties).

const student = {
    equipment: ["backpack"],
    energy: 100,
    grades: 80,
    uniform: {top: "pink crop top", bottoms: "jeans", shoes: "doc martens"},
// 1. create a method that takes in food(number of calories) and then updates energy.
    food: function(a) {
        this.energy += a;
    },
// 2. create a method that takes in new equipment that will update our equipment array.
    newEquipment: function(b) {
        this.equipment.push(b);
    },
// 3. create a method that will change the uniform (since everyday you wear something different).
    changeUniform: function(c,d,e) {
        this.uniform.top = c;
        this.uniform.bottoms = d;
        this.uniform.shoes = e;
    },
// 4. create a method *study time* that takes time studied(minutes) that will update             your grades and deplete your energy.
//    For every hour that you study, your grades go up by 5 % 
//      (example: if your grade is 60, and you study an hour, your grade will be 63) .
//    For every hour you study, your energy goes down by 2.
//      Bonus: if your energy goes below 0, your grades go down(10 %).
    studyTime: function(f) {
        // define the amount of time studied in minutes
        let timeStudied = f;
        // how many times does that number divide by 60 i.e. how many hours

        // for every hour, increase grades by 5%

        // for every hour, decrease energy by 2

        // if energy goes below 0, grades decrease by 10%
    }
}

console.log(student.energy);
student.food(8);
console.log(student.energy);
document.write(`After eating, my energy is now at ${student.energy}.`);

console.log(student.equipment);
student.newEquipment("pencilcase");
console.log(student.equipment);
document.write(` I use my ${student.equipment[0]} and ${student.equipment[1]} for school.`);

console.log(student.uniform);
student.changeUniform("blazer","short shorts","jandals");
console.log(student.uniform);
document.write(` Today I wore a ${student.uniform.top}, ${student.uniform.bottoms}, and ${student.uniform.shoes} to school.`);