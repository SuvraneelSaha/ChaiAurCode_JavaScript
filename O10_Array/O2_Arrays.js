const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
// takes in array - the whole array as an element

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);
// simple concatenation

// Spread - glass dropping example

const all_new_heros = [...marvel_heros, ...dc_heros];

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Hitesh"));
// checks whether it is an Array or not
console.log(Array.from("Hitesh"));
// makes an array from the argument
console.log(Array.from({ name: "hitesh" })); // interesting
// returns an empty object as it is not able to convert it into an array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
