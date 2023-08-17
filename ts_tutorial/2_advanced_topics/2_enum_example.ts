/* Eğer biz enum'ların değerlerine herhangi bir tanımlama
yapmazsak standart olarak number değerlini alırlar arkaplanda.
Ve ilk değer sıfırdan başlar. */
enum CarBrandsEnum_1 {
  Bmw,
  Tofas,
  Sahin,
  Kartal,
  Mercedes,
  Ferrari,
  Toros,
  Fiat,
  Cadillac,
  Nissan,
}

console.log(CarBrandsEnum_1.Bmw); // 0
console.log(CarBrandsEnum_1["Bmw"]); // 0
console.log(CarBrandsEnum_1[0]); // Bmw
console.log(CarBrandsEnum_1[CarBrandsEnum_1.Bmw]); // Bmw

// Atama işlemi: Değişkenin türü belirtilir ve o enum türünün
// herhangi bir elemanı atanır.
let ismailinArabasi: CarBrandsEnum_1 = CarBrandsEnum_1.Bmw;
ismailinArabasi = CarBrandsEnum_1.Mercedes;
ismailinArabasi = CarBrandsEnum_1.Ferrari;

// Diziler için de daha önceden bildiğimiz kurallar geçerlidir.
let ramazaninArabaKoleksiyonu: CarBrandsEnum_1[] = [];
ramazaninArabaKoleksiyonu.push(CarBrandsEnum_1.Bmw);
ramazaninArabaKoleksiyonu.push(CarBrandsEnum_1.Mercedes);
ramazaninArabaKoleksiyonu.push(CarBrandsEnum_1.Cadillac);

/* Karşılaştırma işlemi: Belirli bir enum türündeki değişkenin değerini
o enum türünün başka bir elemanıyla karşılaştırırken dikkat etmemiz
gereken bir durum vardır. Typescript farklı enum değerlerini doğrudan
karşılaştırmıyor. Bu yüzden değişkeni ya kendi enum türüne çeviririz
yada javascriptteki primitive değerinin türüne çevirip  o şekilde
karşılaştırma işlemi yaparız. */

if ((ismailinArabasi as CarBrandsEnum_1) === CarBrandsEnum_1.Mercedes) {
  console.log("Mercedesin hayırlı olsun.");
} else if ((ismailinArabasi as CarBrandsEnum_1) === CarBrandsEnum_1.Ferrari) {
  // Burada değişkeni kendi türüne çeviriyoruz.
  console.log("Ferrari ile çok hız yapma.");
} else if ((ismailinArabasi as number) === CarBrandsEnum_1.Cadillac) {
  // Burada değişkenin javascript'teki primitive türüne çeviriyoruz.
  console.log("Araba çok efsane.");
}

/* Typescript enum eşitliğini kontrol etme işlemini net bir şekilde dilin
içerisine eklememiştir. Bu yüzden aşağıdaki satırda şu hatayı verir:

    console.log(ismailinArabasi === CarBrandsEnum_1.Nissan);

    This comparison appears to be unintentional because the types
    'CarBrandsEnum_1.Ferrari' and 'CarBrandsEnum_1.Nissan' have no overlap.

*/

/* Yukarıda ismailinArabasi değişkenine değer ataması yapıldığı için
bu değişkenin orjinal türüne çevirerek karşılaştırma yapmamız gerekiyor. */
switch (ismailinArabasi as CarBrandsEnum_1) {
  case CarBrandsEnum_1.Ferrari:
    console.log("Arabanın markası Ferrir.");
    break;

  case CarBrandsEnum_1.Cadillac:
    console.log("Araba efsane klasiklerden Cadillac.");
    break;
}

function printCarBrand(brand: CarBrandsEnum_1) {
  // burada `brand as CarBrandsEnum_1`yazmaya gerek yok çünkü bu bölge
  // içerisinde brand değişkeninin türü belli.
  switch (brand) {
    case CarBrandsEnum_1.Ferrari:
      console.log("Arabanın markası Ferrir.");
      break;

    case CarBrandsEnum_1.Cadillac:
      console.log("Araba efsane klasiklerden Cadillac.");
      break;

    default:
      console.log("Diğer marka araç.");
  }
}

printCarBrand(CarBrandsEnum_1.Bmw);
printCarBrand(CarBrandsEnum_1.Ferrari);
printCarBrand(CarBrandsEnum_1.Kartal);
printCarBrand(CarBrandsEnum_1.Cadillac);
printCarBrand(CarBrandsEnum_1.Nissan);
