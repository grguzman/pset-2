const readlineSync= require("readline-sync");



const hw = 0.15;

const q = 0.35;

const t= 0.50;

const assignment = 3;



let hw1= Number(readlineSync.question("\n Enter three homework grades.\n"));

let hw2= Number(readlineSync.question)("");

let hw3= Number(readlineSync.question)("");



let q1= Number(readlineSync.question("\n Enter three quiz grades.\n"));

let q2= Number(readlineSync.question)("");

let q3= Number(readlineSync.question)("");



let t1= Number(readlineSync.question("\n Enter three test grades.\n"));

let t2= Number(readlineSync.question)("");

let t3= Number(readlineSync.question)("");



let totalhw=((hw1+hw2+hw3)/assignment)*hw;

let totalq=((q1+q2+q3)/assignment)*q;

let totalt=((t1+t2+t3)/assignment)*t;



let finalgrade=totalhw+totalq+totalt;

finalgrade=finalgrade.toFixed(2);



console.log("\n Your marking period grade is + finalgrade + %. ")
