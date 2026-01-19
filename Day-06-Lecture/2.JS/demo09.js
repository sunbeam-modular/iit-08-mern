// ParseInt and ParseFloat
let a = "5";
let b = parseInt(a);
console.log(`Type of a = ${a} : ${typeof b}`);

let c = 5.5;
let d = parseInt(c);
console.log(`Type of c = ${d} : ${typeof d}`);

let e = "5.5";
let f = parseFloat(e);
console.log(`Type of e = ${f} : ${typeof f}`);

let g = eval("5 + 10 * 2 / 2");
console.log(`Type of g = ${g} : ${typeof g}`);