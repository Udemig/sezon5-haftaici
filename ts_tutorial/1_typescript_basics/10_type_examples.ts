/* Birkaç tane örnek senaryo için typelar oluşturalım. */

// Senaryo 1: Öğrenci isimlerinin tutulduğu diziyi ayrı bir type olarak tanımlayıp kullanın.

type StudentNamesType = string[];
type StudentNameType = string;

type StudentType = {
  name: string;
};

const student_names_2: StudentNamesType = ["ceyhun", "farhad", "ismail"];

/////////////////////////////////////
/* forEach() ile map() arasındaki farklar:

- forEach fonksiyonu sadece itemleri sırayla gezmek için kullanılır.
- map fonksiyonu ise itemleri gezerken her itemin sıra numarasına
  karşılık gelecek şekilde yeni bir dizi oluşturmak için kullanılır.
- her iki fonksiyon da senkron çalışır.

Kısaca forEach'ten undefined döner map'ten dizi döner.

*/

const studentNames_2: string[] = [
  "Alpay",
  "Ceyhun Bingör",
  "Farhad",
  "S. Erdoğan",
  "Serhat",
  "Suat",
];

const forEachOutsideResult: number[] = [];
const forEachResult = studentNames_2.forEach((item) => {
  console.log("forEach() item", item);
  forEachOutsideResult.push(item.length);

  return item.length;
});

const mapResult = studentNames_2.map((item) => {
  const result = console.log("map() item", item);
  console.log(result);

  return item.length;
});

console.log(">>>  forEachResult:", forEachResult);
console.log(">>>  mapResult:", mapResult);
