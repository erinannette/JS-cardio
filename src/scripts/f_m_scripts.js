
// this is the store data. normally we would be grabbing data from elsewhere (an external api), but this will represent the data model! 
const totalInventory = [
    {
        title: 'Bowie Tee',
        url: 'images/bowie.jpg',
        price: 19.99,
        stock: 4,
    },
    {
        title: 'Don\'t Know Tee',
        url: 'images/dontevenknow.jpg',
        price: 22.50,
        stock: 8,
    },
    {
        title: 'Doughnut Jean Jacket',
        url: 'images/doughnut.jpg',
        price: 59.00,
        stock: 5,
    },
    {
        title: 'Journey Tee',
        url: 'images/journey.jpg',
        price: 22.99,
        stock: 6,
    },
    {
        title: 'Skeleton Jean Jacket',
        url: 'images/someurl.jpg',
        price: 30.00,
        stock: 0,
    },
    {
        title: 'Skeleton Hand Tee',
        url: 'images/skeleton.jpg',
        price: 30.00,
        stock: 10,
    },
    {
        title: 'HackerYou Hoodie',
        price: 50.00,
        stock: 4,
    },
]

// document ready function allows page to load before running any of our scripts 
$(function () {

    // this object allows us to organize some information that we want to display conditionally depending on what currency the user selects

    const currencies = {
        usd: {
            exchange: 1,
            symbol: `$`,
            displayName: `USD`,
            flag: `🇺🇸`
        },
        cad: {
            exchange: 1.28,
            symbol: `$`,
            displayName: `CAD`,
            flag: `🇨🇦`
        },
        gbp: {
            exchange: 0.76,
            symbol: `£`,
            displayName: `GBP`,
            flag: `🇬🇧`
        }
    }

    // STEP ONE: filter the inventory so that only items with images that are also in stock are displayed

    // STEP TWO: write a function that displays inventory on the page in the correct pricing. HINT: What kind of information (paramaters) does this funciton need to properly display all of our information?  


    // STEP THREE: display items on the page passing in USD as defualt


    // STEP FOUR: add an event listener that will notice when a user clicks on a currency button, find out which currency they have selected, and call our display items method again. Don't forget to update the navigation, too! 


});