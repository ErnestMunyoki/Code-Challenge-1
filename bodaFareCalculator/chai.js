const prompt = require('prompt-sync')();

function calculateChaiIngredients (){
    let input = prompt("How many cups of Chai Bora would you like to make?");
    let numberOfCups = Number(input);
    const waterPerCup = 200;
    const milkPerCup = 50;
    const teaLeavesPerCup = 1;
    const sugarPerCup = 2;

    console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
    console.log(`Water:${waterPerCup * numberOfCups} ml`);
    console.log(`Milk:${milkPerCup * numberOfCups} ml`);
    console.log(`Tea Leaves(Majani):${teaLeavesPerCup * numberOfCups} Tablespoons`)
    console.log(`Sugar(Sukari):${sugarPerCup * numberOfCups} Tablespoons`);

}
calculateChaiIngredients ()