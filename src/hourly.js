const readlineSync= require("readline-sync");



const hourly = readlineSync.question("\nHourly wage: ");



const m = readlineSync.question("\nMonday: ");

const t = readlineSync.question("Tuesday: ");

const w = readlineSync.question("Wednesday: ");

const th = readlineSync.question("Thursday: ");

const f = readlineSync.question("Friday: ");

const st = readlineSync.question("Saturday: ");

const sn = readlineSync.question("Sunday: ");



const weeklypay = (m*hourly)+(t*hourly)+(w*hourly)+(th*hourly)+(f*hourly)+(st*hourly)+(sn*hourly)



console.log("\nYou'll make " + "$" + Math.abs(weeklypay).toFixed(2) + " this week.\n")
