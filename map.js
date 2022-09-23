/**
 * TODO:
 * 1. Buatlah variabel currency yang merupakan Map dengan kriteria:
 *   - key "USD", value 14000
 *   - key "JPY", value 131
 *   - key "SGD", value 11000
 *   - key "MYR", value 3500
 * 2. Buatlah variabel priceInIDR yang bernilai dari hasil perkalian:
 *     - priceInJPY dengan nilai currency JPY
 */

// TODO
let currency = new Map();
currency.set("USD", 14000);
currency.set("JPY", 131);
currency.set("SGD", 11000);
currency.set("MYR", 3500);

let priceInJPY = currency.get("JPY");
let priceInIDR = priceInJPY * 131;
console.log(priceInJPY);

/**
 * Jangan hapus kode di bawah ini
 */
module.exports = { currency, priceInJPY, priceInIDR };
