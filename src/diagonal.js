const readlineSync= require("readline-sync");

const Width = readlineSync.question("\nWidth: ");
const Length = readlineSync.question("Length: ");
let w=Width;
let l=Length;

let r=Math.sqrt(Math.pow(w,2) + Math.pow(l,2)).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2});

console.log("\nA(n) " + w + "-by-" + l + "-inch sheet of paper has a diagonal of " + r +" inch(es).");
