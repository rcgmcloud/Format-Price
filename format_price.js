var numberToPrice = function(number) {
  //if(!parseInt(number) && number != 0){
  if(typeof number !== "number"){
    return 'NaN';
  }



  var numArr = number.toString().split("");
  if(numArr.indexOf(".") === -1){
    numArr.push(".");
    numArr.push("0");
    numArr.push("0");
  }

  if(numArr[0] === "-"){
    numArr.shift();
  }

  var dot = numArr.indexOf(".");
  if(numArr[dot+2] === undefined){
    numArr.push("0");
  }

  if(numArr[dot+3]){
    numArr.splice(dot+3);
  }

  if(dot > 6){
    numArr.splice(dot-6, 0, ",");
    numArr.splice(dot-2, 0, ",");
  }
  if( 7 > dot && dot > 3 ){
     numArr.splice(dot-3, 0, ",");
  }

  if(number.toString().split("")[0] === '-'){
    numArr.unshift('-');
  }

  return numArr.join("");

};