
exports.min = function min (array) {
  if(array.length <= 0){return 0;}
  else{
      let minN = array[0];
      for(let i = 0; i < array.length; i++){
        if(array[i] < minN){
          minN = array[i];
        }
      }
  return minN;
  }
}

exports.max = function max (array) {
  if(array.length <= 0){return 0;}
  else{
      let maxN = array[0];
      for(let i = 0; i < array.length; i++){
        if(array[i] < maxN){
          maxN = array[i];
        }
      }
  return maxN;
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
