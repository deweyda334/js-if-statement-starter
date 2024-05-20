// Dax Dewey
// 20 MAY 2024
// JS IF Statements

// An IF statement
// const knowsPython = false;
// if (knowsPython) {

//     console.log('You should start learning more Python today!');
// }

// const accountBalance = Number(prompt('How much money do you have today in your account? (Example: 600)\n'));

// if (accountBalance > 100){
//     console.log("Woohoo! You're rich!");
// } else {
//     console.log("You should start adding $10 a week to your savings!");
// }

function checkSeason(month){
    const seasons = ['winter', 'spring', 'summer', 'fall'];

    const winter_months = [12, 1, 2];

    const spring_months = [3, 4, 5];

    const summer_months = [6, 7, 8];

    const fall_months = [9, 10, 11];

    if (month in winter_months) {
        return `The season for ${month} is ${seasons[0]}.`;
    } else if (month in spring_months) {
        return `The season for ${month} is ${seasons[1]}.`;   
    } else if (month in summer_months) {
        return `The season for ${month} is ${seasons[2]}.`;  
    } else if (month in fall_months) {
        return `The season for ${month} is ${seasons[3]}.`;
    }

} // End of checkSeason ( ) function

const monthNumber = Number(prompt('Enter a month number (1 - 12)'));
// Call the checkSeason ( ) function
const myOutput = checkSeason(monthNumber);
console.log(myOutput);