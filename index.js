var CryptoJS = require('crypto-js');
var key = CryptoJS.enc.Hex.parse("");
var iv  = CryptoJS.enc.Hex.parse("");
var encrypted = CryptoJS.AES.encrypt('test', key, { mode: CryptoJS.mode.CBC, iv: iv, padding: CryptoJS.pad.ZeroPadding });
var decrypted = CryptoJS.AES.decrypt('', key, { mode: CryptoJS.mode.CBC, iv: iv, padding: CryptoJS.pad.NoPadding });
console.log(encrypted.toString());
console.log(decrypted.toString(CryptoJS.enc.Utf8));
