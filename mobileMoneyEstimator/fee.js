const prompt = require('prompt-sync')();

function estimatedTransactionFee(){
    let fee = amountToSend * 0.015;
    if (fee < 10){
        fee = 10;
    } else if ( fee > 70){
        fee = 70;
    }
    return fee;
}
    let input = prompt("Unatuma Ngapi? (KES):");
    let amountToSend = Number(input);

    let fee = estimatedTransactionFee(amountToSend);
    console.log(`Sending: Kes ${amountToSend}`);
    console.log(`Calculated Transaction Fee: Kes ${fee}`);
    console.log(`Total amount to be debited: ${amountToSend + fee}`);
    console.log(`send money securely`);

