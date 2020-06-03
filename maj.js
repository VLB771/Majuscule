
function maj(myArgs) {

var myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);

var str = myArgs[0];
var strFinal = "";

for(var i = 0; i <= str.length; i++) {

  if (i >= 0 && i % 2 !== 0 && str.charAt(i) !== " ") {
    strFinal = strFinal + str.charAt(i).toUpperCase();
  } else{
    strFinal = strFinal + str.charAt(i);
  }
}

console.log(strFinal.charAt(0).toLowerCase() + strFinal.slice(1));

}
console.log(maj());
