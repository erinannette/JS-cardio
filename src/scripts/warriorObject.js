// Create an object that represents a "warrior".This warrior has the following properties:

// 1. equipment, an array containing the values "sword" and "shield".

// 2. energy, defaults to the number 100

// 3. location, an object with two properties: x and y.The values of x and y are numeric.

// 4. a method *walk()* which updates the warrior's location. 
//     If the warrior's location is x: 10 and y: 5 then walk(2, 0) will update the location to x: 12 and y: 5.

// 5. a method *strike()* which uses up energy.
//     If the warrior's energy is at 100 then strike(25) will reduce the energy to 75.

// 6. a method *pickUpEquipment()* which adds the argument(a string) to the equipment array.

const warrior = {
    equipment: ["sword", "shield"],
    energy: 100,
    location: {x: 10, y: 2},
    walk: function(a,b) {
        this.location.x += a;
        this.location.y += b;
    },
    strike: function(c) {
        this.energy -= c;
    },
    pickUpEquipment: function(d) {
        warrior.equipment.push(d);
    }
}
console.log(warrior.location.x, warrior.location.y);
warrior.walk(4,4);
console.log(warrior.location.x, warrior.location.y)

console.log(warrior.energy);
warrior.strike(25);
console.log(warrior.energy);

console.log(warrior.equipment);
warrior.pickUpEquipment("invisibility cloak");
console.log(warrior.equipment);
