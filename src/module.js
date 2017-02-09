function shortenString(strLength){
  var alphabet = "123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ";
var returnString = '';
for(strIndex = 0; strIndex < strLength; strIndex += 1){

var rand = Math.round(Math.random() * (alphabet.length - 1));
returnString += alphabet.charAt(rand);
}

return returnString;

}

exports.strLogic = shortenString;
