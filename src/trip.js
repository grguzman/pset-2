const readlineSync= require("readline-sync");



const stdnts = Number(readlineSync.question("\nStudents: "));

const tchrs = Number(readlineSync.question("Teachers: "));

const capa = Number(readlineSync.question("Bus capacity: "));



let pass = stdnts + tchrs;

let bss = Math.ceil(pass/capa);

let passreman = pass % capa;



console.log("\n" + bss + " bus(es) is (are) needed, with " + (passreman) + " passenger(s) on the last bus.");
