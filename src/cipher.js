const cipher = {
  encode: function (offset, string) {
    let resultCipher = "";
    if (typeof string != "string") {
      throw new TypeError ();
     }

    for (var i=0; i<string.length;i++) {
        let encodeString = string.charCodeAt(i);
        let num;
         if (encodeString>=65 && (encodeString<=90)) {
              num = encodeString-65;
             resultCipher += String.fromCharCode(((num+offset)%26) + 65);
         }
         else if  (encodeString>=97 && (encodeString <=122)) {
             num = encodeString-97;
            resultCipher += String.fromCharCode(((num+offset)%26) + 97);
         }
         else {
          resultCipher += String.fromCharCode(encodeString);
         }
    }
    return resultCipher;
  },

  decode: function (offset,string) {
    let resultDecipher = "";
    if (typeof string != "string") {
      throw new TypeError ();
     }

    for (var i=0; i<string.length;i++) {
        let decodeString = string.charCodeAt(i);
        let num;
         if (decodeString>=65 && (decodeString<=90)) {
             num = decodeString-65;
             resultDecipher += String.fromCharCode((num+(26-offset%26))%26 + 65);
         }
         else if  (decodeString>=97 && (decodeString<=122)) {
                 num = decodeString-97;
            resultDecipher += String.fromCharCode((num+(26-offset%26))%26 + 97);
         }
         else {
          resultDecipher += String.fromCharCode(decodeString);
         }
         
    }
    return resultDecipher;
}
};
export default cipher;
