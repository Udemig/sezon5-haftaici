/* Fonksiyonların türünü (prototipini) tanımlamak:

Typescriptte dört şekilde fonksiyon tanımlama yöntemi (sintaksı)
vardır. Bunlar normal isimli fonksiyon, isimsiz fonksiyon,
arrow function ve single line arrow function. Bu yöntemlerden
birincisi hariç hepsi bir değişkene atama yapılarak yazılır.
Bir atama işlemi yapıldığına göre eşittir karakterinin sağ tarafındaki
ifade bir "değer" (value) olarak kabul edilir (buradaki değer, fonksiyon
olmuş oluyor). Ortada bir değer varsa bunun türü de vardır.

*/

const exampleFn_6 = (param1: number, param2: number): number => {
  return param1 + param2;
};

/* Şimdi bir fonksiyon türünün nasıl tanımlandığını görelim: */
type SumFnType_1 = (no1: number, no2: number) => number;

const sum_1: SumFnType_1 = (no1: number, no2: number): number => {
  return no1 + no2;
};

const sum_2: SumFnType_1 = (no1: number, no2: number): number => {
  console.log("parametreler: ", no1, no2);
  return no1 + no2;
};

////////////////////////////////
type FullnameCreatorFnType_1 = (
  firstname: string,
  middlename: string,
  lastname: string
) => string;

const fullnameCreator_1: FullnameCreatorFnType_1 = (
  firstname: string,
  middlename: string,
  lastname: string
): string => {
  return firstname + middlename + lastname;
};

console.log("--------------------");
console.log(fullnameCreator_1("murat", "", "göğebakan"));
console.log(fullnameCreator_1("tarkan", "", ""));
console.log(fullnameCreator_1("ferda", "anıl", "yarkın"));

const fullnameCreator_2: FullnameCreatorFnType_1 = (
  firstname: string,
  middlename: string,
  lastname: string
): string => {
  return firstname + " " + middlename + " " + lastname;
};

console.log("--------------------");
console.log(fullnameCreator_2("murat", "", "göğebakan"));
console.log(fullnameCreator_2("tarkan", "", ""));
console.log(fullnameCreator_2("ferda", "anıl", "yarkın"));

const fullnameCreator_3: FullnameCreatorFnType_1 = (
  firstname: string,
  middlename: string,
  lastname: string
): string => {
  // let totalStr = "";
  // totalStr += firstname + " ";
  // if (middlename.length > 0) {
  //   totalStr += middlename + " ";
  // }
  // totalStr += lastname;
  // return totalStr;

  return firstname + " " + (middlename ? middlename + " " : "") + lastname;
};

console.log("--------------------");
console.log(fullnameCreator_3("murat", "", "göğebakan"));
console.log(fullnameCreator_3("tarkan", "", ""));
console.log(fullnameCreator_3("ferda", "anıl", "yarkın"));
console.log(fullnameCreator_3("    ferda   ", "   anıl  ", "   yarkın"));

console.log("" ? "evet" : "hayır");
console.log("a" ? "evet" : "hayır");

/* Bu implementasyonlara bazı özellikler ekleyelim.
- İsimlerin ilk harfleri büyük sonraki harfleri küçük olsun.
- Sağ ve soldaki boşluk karakterleri temizlensin.
- Middlename kuralı yine aynen mevcut olsun.
*/

const fullnameCreator_4: FullnameCreatorFnType_1 = (
  firstname: string,
  middlename: string,
  lastname: string
): string => {
  firstname = firstname.toLowerCase().trim();
  firstname = firstname[0].toUpperCase() + firstname.slice(1);

  if (middlename.length > 0) {
    middlename = middlename.toLowerCase().trim();
    middlename = middlename[0].toUpperCase() + middlename.slice(1);
  }

  if (lastname.length > 0) {
    lastname = lastname.toLowerCase().trim();
    lastname = lastname[0].toUpperCase() + lastname.slice(1);
  }

  return firstname + " " + (middlename ? middlename + " " : "") + lastname;
};

console.log("--------------------");
console.log(fullnameCreator_4("murat", "", "göğebakan"));
console.log(fullnameCreator_4("tarkan", "", ""));
console.log(fullnameCreator_4("FeRda", "aNıL", "yaRkıN"));
console.log(fullnameCreator_4("    ferda   ", "   anıl  ", "   yaRKın"));
