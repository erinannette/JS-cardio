// -------------------------------------------------------
// Fill in the blanks
// -------------------------------------------------------
const noun = prompt("Give me a noun");
const adjective = prompt("Give me a adjective");
const adverb = prompt("Give me an adverb");

console.log(`After they did that, the king played chess on his brother's ${noun} and then combed his ${adjective} hair with a comb made out of old fish bones. Later, that same day, I saw the Monkey King dance ${adverb} in front of an audience of kangaroos and wombats.`);

// -------------------------------------------------------
// Coin flip
// -------------------------------------------------------
// Coin flipping machine in JavaScript that flips a virtual "coin" 100 times and tells us the results.

// 1. Write a flip() function that flips a coin and returns heads or tails based on a random number.
function flip() {
    return (Math.floor(Math.random() * 2) == 0) ? 'heads' : 'tails';
};
let result = flip();
console.log(result);

// 2. Write a function flipMany() that calls flip() 100 times.  Record a running tally of heads and tails. Return an object of the final results. ie. {"heads": 20, "tails": 80}
let heads = 0;
let tails = 0;

function flipMany() {
    for (let i = 0; i < 100; i++) {
        if (flip() == `heads`) {
            heads++
        } else (tails++)
    }
}
flipMany();
console.log(`heads is ${heads} and tails is ${tails}`);


// 3. Call the flipMany() function and use document.write() to print a sentence summarizing the results.
document.write(`heads is ${heads} and tails is ${tails}`);