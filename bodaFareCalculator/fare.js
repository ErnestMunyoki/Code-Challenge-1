const prompt = require('prompt-sync')();

function calculateBodaFare(){
    
    const baseFare = 50;
    const perKilometerCharge = 15;
    
    let input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
    let distanceInKm = Number(input);

    console.log(`Uko kwote? Hiyo ni ${distanceInKm}:`);
    console.log(`Ukikalia Pikipiki: Kes ${baseFare} `);
    console.log(`Mpaka uko: Kes ${distanceInKm * perKilometerCharge}`);
    console.log(`Total: Kes ${baseFare + distanceInKm * perKilometerCharge}`);
}

calculateBodaFare()