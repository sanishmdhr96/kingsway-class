/**
 * Switch case
 */

// let dataPack = prompt('Which data pack would you like to use')

// switch (dataPack) {
//     case 1:
//         alert("You have received unlimited 5g data for 1 day");
//         break;

//     case "Student Pack":
//         alert("You have received student pack for 1 day");
//         break;

//     case "Summer Pack":
//         alert("You have received summer pack for 1 day");
//         break;

//     case "Lockdown Pack":
//         alert("You have received lockdown pack for 1 day");
//         break;

//     default:
//         alert("Sorry, We donot have your requested datapack,please choose another datapack to continue");
// }

/**
 * 1. List of data pack - display
 *
 * 2. Take input from user - number input
 *
 * 3. Display message as per the input
 */
const datapacks = [
    "Winter Pack",
    "Prepaid Packs",
    "Unlimited Night Data",
    "Voice",
    "4G",
    "GB/Day",
    "Unlimited",
    "Day Packs",
    "Stay Connected",
];

const dataPacksList = [];

function formatItems(inputArr) {
    let lengthOfArr = inputArr.length;
    for (let i = 0; i < lengthOfArr; i++) {
        dataPacksList.push(`${i + 1}.${inputArr[i]}`);
    }
}

formatItems(datapacks);

const dataPackString = dataPacksList.join("\n");

const dataInput = prompt(
    `Please select your desired data pack\n${dataPackString}`
);

switch (dataInput) {
    case "1":
        alert("You have received Winter package");
        break;

    case "2":
        alert("You have received Prepaid Packs");
        break;

    case "3":
        alert("You have received  Night Data");
        break;

    case "4":
        alert("You have received Voice");
        break;

    case "5":
        alert("You have received 4G");
        break;

    case "6":
        alert("You have received GB/Day");
        break;

    case "7":
        alert("You have received Unlimited");
        break;

    case "8":
        alert("You have received Day Packs");
        break;

    case "9":
        alert("You have received Stay connected");
        break;

    default:
        alert(
            "Sorry, We donot have your requested datapack,please choose another datapack to continue"
        );
}
