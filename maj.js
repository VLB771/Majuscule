
function maj(myArgs) {

var myArgs = process.argv[2];
console.log('myArgs: ', myArgs);

var strArr = myArgs.split(" ");

for(var i = 0; i < strArr.length; i++) {

  str = strArr[i];
  strFinal = "";
  for(var a = 0; a < str.length; a++){
    if (a >= 0 && a % 2 !== 0) {
      strFinal = strFinal + str.charAt(a).toUpperCase();
    } else{
      strFinal = strFinal + str.charAt(a);
    }
  }
  strArr[i] = strFinal;
}

var strArr = strArr.join(" ");
return strArr.charAt(0).toLowerCase() + strArr.slice(1);

}

console.log(maj());
