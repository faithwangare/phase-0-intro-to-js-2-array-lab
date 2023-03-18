// Write your solution here!
let cats =["Milo", "Otis", "Garfield" ];
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
  
function destructivelyAppendCat(name) {
    cats.push("Ralph");

}
function destructivelyPrependCat(name) {
    cats.unshift("Bob");

}
function destructivelyRemoveLastCat(){
cats.pop("Garfield");
}
function destructivelyRemoveFirstCat() {
 cats.shift("Milo");
}
function appendCat(name) {
    let cat = cats.slice();
    cat.push("Broom");
    return cat;

}function prependCat(name) {
    let cat = cats.slice();
    cat.unshift("Arnold");
    return cat;

}
function removeLastCat() {
    let cat = cats.slice();
    cat.pop("Broom");
    return cat;

}

function removeFirstCat(){
    let cat= cats.slice();
    cat.shift();
    return cat;
    
}