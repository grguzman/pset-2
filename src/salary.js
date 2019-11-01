const readlineSync= require("readline-sync");



const salary = Number(readlineSync.question("\nAnnual salary: "));



const con = 0.07;

const fed = 0.157

const st = 0.0447;

const soc = 0.062;

const medi = 0.0145;

const paid = 24;



const totaltaxes = fed + st + soc + medi;

let firstdeduction = (1-con) * salary;

let scnddeduction = (1-totaltaxes) * firstdeduction;

let totalpay= scnddeduction/24;

let check = totalpay.toLocaleString('en-US', {style : 'currency' , currency: "USD"});



console.log("\n Your take-home pay each check will be " + check + "." );
