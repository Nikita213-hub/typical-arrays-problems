
exports.min = function min (array) {
  if(array.length <= 0){return 0;}
  else{
    return Math.min(... array);
  }
}

exports.max = function max (array) {
  if(array.length <= 0){return 0;}
  else{
    return Math.max(... array);
  }
}

exports.avg = function avg (array) {
  if(array.length <= 0){return 0;}
  else {
      let sum = 0;
      let avgN
      for(let i = 0; i < array.length; i++){
        sum = sum + array[i];
        avgN = sum / array.length;
      }
      console.log(avgN);
      return avgN;
  }
}
