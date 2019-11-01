const l = 48;

const w = 24;

const d = 6;



let brdarea = (l*w);

const r = (d/2);

const crclearea = Math.PI * (r ** 2);



let cornhole = brdarea - crclearea;

cornhole = cornhole.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 });



console.log("The surface area of a standard Cornhole board is " + cornhole + " square inch(es).")
