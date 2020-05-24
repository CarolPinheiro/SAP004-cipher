export const encodeAndDecode = (offset, string) => {
  let resultDecipher = "";
  const zAsciiUpperCase = 90;
  const zAsciiLowerCase = 122;
  if (typeof string != "string") {
    throw new TypeError();
  }

  for (let item of string) {
    let letterCharCode = item.charCodeAt();
    resultDecipher += /[A-Z]/.test(item) ? cipher(letterCharCode, zAsciiUpperCase, offset) : /[a-z]/.test(item) ? cipher(letterCharCode, zAsciiLowerCase, offset) : item

  }
  return resultDecipher
}

const  cipher = (letterCharCode, value, offset) => {
  let num = letterCharCode - value;
  return String.fromCharCode((num + (offset%26)) % 26 + value);
}
