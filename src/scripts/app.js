// 1.Create a function that accepts eight arguments and returns the string "A musical scale goes: do, re, mi, fa , so, la, ti, do!" - but does NOT print anything to the console.
// calScale("do", "re", "mi", "fa" , "so", "la", "ti", "do");

const scales = (a, b, c, d, e, f, g, h) => {
    console.log(`A musical scale goes: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}, ${h}!`)
}
scales("do", "re", "mi", "fa", "so", "la", "ti", "do");

// 2. Write a single function makeDeliciousSoup that takes  two arguments: a callback function called cook() and an array of RAW ingredients.
// The cook function returns the string 'The method of cooking is' and then the argument passed into the cook function.

// The result of the makeDeliciousSoup function should appear in the console like this:
// The method of cooking is boiling. 
// ['cooked onions', 'cooked carrots', 'cooked celery']

// INPUT: callback function *cook()* , array of raw ingredients
// OUTPUT:
// The method of cooking is boiling. 
// ['cooked onions', 'cooked carrots', 'cooked celery']

// it looks to me like the function does two things:
// 1. it defines the method of cooking (boiling)
// 2. it adds in the word "cooked" to each ingredient in the array.

// 1. 

// const makeDeliciousSoup = (a,b){
//     const ingredients = ["onions", "carrots", "celery"];
//     const cook = () => {

//     }
// }


// 2.5
// Write a function that returns the EXACT SAME THING but takes cooking ingredients not as an array but as strings passed into the makeDeliciousSoup function. 

// HINT: Use one of the special parameters from ES6




// 3. Write a function that takes 3 arguments: a callback function, a phone number, and a boolean.

// Write another function that takes one argument: name.

// Use these two functions in the function phoneAFriend. If your friend is available,return two console logs: "I'm calling 4162308439" and "Hi, Heather!"(or whatever phone number and friend name you enter). If your friend is not available, console log "I got voicemail."




// 3.5 Add another parameter to the phoneAFriend function called isScreeningYourCalls. If this parameter is true and you phone your friend, even though they are at home, you will get voicemail.





// 4. Using this array of magazines printed in Canada, make a new array of all the magazines that begin with the letter O.

const canadianMagazines = ["24 images", "Alternatives Journal", "abOUT", "Above&Beyond", "L'Action nationale", "L'actualité", "Adbusters", "Advisor's Edge", "Alberta Report", "Algoma Ink", "Alive Magazine", "Auto Atlantic", "BC Report", "The Body Politic", "Brave Words & Bloody Knuckles", "Briarpatch", "Edmonton Gazette", "Brick", "Broken Pencil", "Canada World View", "Canada's History", "Canadian Art", "Canadian Business", "On Spec", "Canadian Dimension", "Canadian Forum", "Canadian Geographic", "Canadian Home & Country", "Canadian Literature", "Canadian Living", "Canadian Parliamentary Review", "ChartAttack", "Chatelaine", "Checkerspot", "Chickadee", "Ciné-Bulles", "Cinema Canada", "Cité Libre", "Contemporary Verse 2", "Corporate Knights", "Country Music News", "The Dalhousie Review", "Cult MTL", "Dogs in Canada", "The Dorchester Review", "Downhome", "Drug Facts for Young People", "Elementary Safety Book For Children", "Esprit de Corps", "Exclaim!", "Every Day Fiction", "fps", "fab", "fab", "abOUT", "Fashion", "Faze", "The Fiddlehead", "Flare", "Flare", "Flare", "Flare", "Frank", "Fugues", "Fuse", "GayCalgary", "Geez", "Geist", "Géographica", "Glow", "Golden Words", "Graffiti", "Harrowsmith", "HighGrader", "The Hockey News", "Homemakers", "Hunter and Cook", "International Hair Route Magazine", "Inuktitut", "KidsWorld", "Justice Magazine", "Legion Magazine", "Literary Review of Canada", "LOU LOU", "Maandblad de Krant", "Maclean's", "The Magazine", "Maisonneuve", "Maisonneuve", "The Malahat Review", "Mehfil Magazine", "Memewar", "MoneySense", "MONTECRISTO", "Les Mouches Fantastiques", "Music Express", "Flare", "Muskrat Magazine", "Natural Life", "Neo-opsis Science Fiction Magazine", "The New Quarterly", "Newfoundland Quarterly", "The Nerve", "Nightlife", "Northern Ontario Business", "On Spec", "Ontario Out of Doors", "Opera Canada", "Ottawa Business Journal", "Outdoor Canada", "Outlooks", "Owl", "Paaras", "Peace Magazine", "Photosho", "Playback", "Plenitude", "Popjournalism", "Pound", "Prairie Fire", "Quill & Quire", "Realm", "Rites", "Rockstar Weekly", "Room", "RPM", "Rue Morgue", "Ryerson Review of Journalism", "Saskatchewan History", "Saturday Night", "SAY", "Scoregolf", "Séquences", "Shameless", "Sharp", "Shift", "Sir John Magazine", "Siren", "Spacing", "Sportsnet Magazine", "Stitches: The Journal of Medical Humour", "Straight Goods", "Style at Home", "Swerve", "Take One", "Tamarack Review", "This Magazine", "TISH", "Toro", "Toronto Life", "Tribe", "TV Guide", "Up Here", "Uppercase", "Urban Male Magazine", "University Magazine", "Urban North - A Lifestyle Magazine", "Vancouver Magazine", "Vice 160", "The Walrus", "Wasted Youth", "Wayves", "Wayves", "Weddingbells", "The Western Producer", "Western Standard", "What If?", "Xtra!", "Xtra Ottawa", "Xtra Vancouver"]

// const magazinesO = function () {
//     if (let i = 0; i < canadianMagazines.length; i++) {

//     }
// }

// 1. Iterate through the array
// 2. If a 




// 4.1 Make a new array of all the magazines that have the word`Canadian` in the title.

// 4.2 Find out if 'Flare' is in the canadianMagazines array.

// 4.3 Write a function that checks how many times each magazine title is in the array and returns an object in the format { "Magazine Name": 3, "Magazine Name": 1 }

// Pass the function you just wrote to another function.(The function you just wrote should evaluate to an object, remember!) This second function should accept an object and return a new array with each of the magazine titles appearing only once.

//     HINT: Try using Object.keys or Object.values

//         *** BONUS QUESTION ***
//             Create a function that returns the sum of any number of integers.

//                 HINT: Use ES6.