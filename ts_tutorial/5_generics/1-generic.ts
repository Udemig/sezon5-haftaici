/*
 TypeScript'de "generic" terimi, veri tiplerinin ve fonksiyonların
 daha esnek ve kullanılabilir hale geterilmesine yardımcı olan bir özellik.
 Generic, bir değerin veri türünü belirlemek yerine,
 farklı veri tipleriyle kullanmaızı sağlayan mekenizma,
 Örn: yazdıpımız fonksiyonun hem paramtersenin hem de dödürdüğü
 değerin tipini fonksiyon çağırıken belirleme
*/

const numbers = [1, 3, 5, 8, 10, 23];
const strings = ['elma', 'armut', 'muz', 'karpuz'];

//* Fonksiyonlarda generic olmayınca:
// Fonksiyonun paramtre ve dönüş değeri any türünde olduğu için tür güvenliği sağlanamaz
function reverseArray(array: any): any {
  return array.reverse();
}

const newNumbers = reverseArray(numbers);
const newStrings = reverseArray(strings);

console.log(newNumbers, newStrings);

//* Fonksiyonlarda generic olunca
// TypeParam ismi, fonksiyonun çağrıldığı her yerde belirli bir veri tütüne dönüşücektir.
// Bu kullanım tür güvenliği sağlar
function reverseArrayV2<DISARIDAN_TYPE>(
  array: DISARIDAN_TYPE[]
): DISARIDAN_TYPE[] {
  return array.reverse();
}

const newNumbersV2 = reverseArrayV2<number>(numbers);
const newStringsV2 = reverseArrayV2<string>(strings);
const newBooolean = reverseArrayV2<boolean>([true, false, false]);
