// Import stylesheets
import './style.css';

// Write Javascript code!



/* FUNCTION DECLARATION */
var fd = document.getElementById('fd');
function squareFd(x) {
  return x * x;
}
fd.innerHTML = squareFd(2);


/* FUNCTION EXPRESSION */
var fe = document.getElementById('fe');
const squareFe = function(x) {
  return x * x;
}
fe.innerHTML = squareFe(3);


/* ARROW FUNCTION EXPRESSION */
var afe = document.getElementById('afe');
const squareAfe = (x) => {
  return x * x;
}
afe.innerHTML = squareAfe(4);


/* CONCISE ARROW FUNCTION EXPRESSION */
var cafe = document.getElementById('cafe');
const squareCafe = x => x * x;
cafe.innerHTML = squareCafe(5);