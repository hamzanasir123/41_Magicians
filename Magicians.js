"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
// which prints the name of each magician in the array.
let magician = ['Harry potter', 'Loki', 'Dr Strange'];
function show_magicians(megicians) {
    megicians.forEach(element => {
        console.log(element);
    });
}
show_magicians(magician);
