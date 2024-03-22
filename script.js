/**
 * Switch case
 */

let dataPack = prompt('Which data pack would you like to use')

switch (dataPack) {
    case 1:
        alert("You have received unlimited 5g data for 1 day");
        break;

    case "Student Pack":
        alert("You have received student pack for 1 day");
        break;

    case "Summer Pack":
        alert("You have received summer pack for 1 day");
        break;

    case "Lockdown Pack":
        alert("You have received lockdown pack for 1 day");
        break;

    default:
        alert("Sorry, We donot have your requested datapack,please choose another datapack to continue");
}


