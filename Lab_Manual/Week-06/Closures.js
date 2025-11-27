// closure
function makeCounter(){
    let count=0;
    return function(){ count++; return count; }
}
const c = makeCounter(); // c() increments

// IIFE
(function(){ console.log('IIFE executed'); })();
