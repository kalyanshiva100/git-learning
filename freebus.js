let isSeatAvailable = prompt("is seat available ?");

let isAgeAbove50 = prompt("is your age is 50 ?");

let hasAdharcard = prompt("Do you have adar card");
/* console.log(hasAdharcard);
console.log(hasAdharcard.toLowerCase()); */

if (isSeatAvailable.toLowerCase() == "yes") {
  console.log("seat is available");

  if (isAgeAbove50.toLowerCase() == "yes") {
    console.log("Age is Above 50");

    if (hasAdharcard.toLowerCase() == "yes") {
      console.log("has Adar Card");
    }
  }
}
