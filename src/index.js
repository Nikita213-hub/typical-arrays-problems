
exports.min = function min (array) {
  if(array.length <= 0){return 0;}
  let min = array.reduce(function(a, b) {
    console.log(Math.min(a, b));
    return Math.min(a, b);
  })
}

exports.max = function max (array) {
  if(array.length <= 0){return 0;}  
  let max = array.reduce(function(a, b) {
    console.log(Math.max(a, b));
    return Math.max(a, b);
  })
}

exports.avg = function avg (array) {
  if(array.length <= 0){return 0;}
  let avg = 0;
  avg = (array.reduce((sum, current) => sum + current, 0)) / array.length;
  console.log(avg);
  return avg;
}
