const cipher = {
  encode: function (offset, string) {
    let resultCipher = "";
    if (typeof string !== "string") {
      throw new TypeError ();
     }

    for (var i=0; i<string.length;i++) {
        var encodeString = string[i];
         if (encodeString.charCodeAt(0)>=65 && (encodeString.charCodeAt(0) <=90)) {
             var num = encodeString.charCodeAt(0)-65;
             resultCipher += String.fromCharCode(((num+offset)%26) + 65);
         }
         else if  (encodeString.charCodeAt(0)>=97 && (encodeString.charCodeAt(0) <=122)) {
             num = encodeString.charCodeAt(0)-97;
            resultCipher += String.fromCharCode(((num+offset)%26) + 97);
         }
         else if(encodeString.charCodeAt(0) === 32) {
             num = encodeString.charCodeAt(0);
             resultCipher += String.fromCharCode(num);
         }
    }
    return resultCipher;
  },

  decode: function decode(offset,string) {
    let resultDecipher = "";

    if (typeof string !== "string") {
      throw new TypeError ();
     }


    for (var i=0; i<string.length;i++) {
        var decodeString = string[i];
         if (decodeString.charCodeAt(0)>=65 && (decodeString.charCodeAt(0) <=90)) {
             var num = decodeString.charCodeAt(0)-65;
             resultDecipher += String.fromCharCode((num+(26-offset%26))%26 + 65);
         }
         else if  (decodeString.charCodeAt(0)>=97 && (decodeString.charCodeAt(0) <=122)) {
                 num = decodeString.charCodeAt(0)-97;
            resultDecipher += String.fromCharCode((num+(26-offset%26))%26 + 97);
         }
         else if(decodeString.charCodeAt(0) === 32) {
                 num = decodeString.charCodeAt(0);
             resultDecipher += String.fromCharCode(num);
         }
         
    }
    return resultDecipher;
}
};
export default cipher;
