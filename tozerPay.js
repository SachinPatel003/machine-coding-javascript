// // Pangram string checker

// const isPangram = (string) => {
//   const alf = "abcdefghijklmnopqrstuvwxyz";
//   const lowerString = string.toLowerCase();

//   for (let i = 0; i < alf.length; i++) {
//     if (lowerString.includes(alf[i]) === false) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(isPangram("The quick brown fox jumps over the lazy dog"));
// console.log(isPangram("This is not a pangram"));

// // convert 12 hours time to 24 hours time

// const input = "12:24 AM";

// const convert12to24 = (in12) => {
//   const [time, modifier] = in12.split(" ");

//   if (modifier.toUpperCase() === "AM") {
//     console.log(time.split(":"));
//     return time;
//   } else {
//     const [hour, minute] = time.split(":");

//     return `${12 + Number(hour)}:${minute}`;
//   }
// };

// console.log(convert12to24(input));
