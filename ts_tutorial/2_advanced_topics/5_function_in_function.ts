/* Fonksiyon parametresine fonksiyon göndermek.
Bir fonksiyonun parametresine yine bir fonksiyon gönderirsek bunun
type'ını nasıl tanımlarız?

Parametre type'ını tanımlarken daha önceden gördüğümüz fonksiyon
typeını o parametreyi yazarken tanımlayabiliriz. Yada parametrenin
fonksiyon type'ını ayrı tanımlayıp dış fonksiyon type'ını da
ayrı tanımlayabiliriz.

*/

// parametre type'ını doğrudan tanımlamak.
type ExampleFnType_2 = (
  param1: (param1: number, param2: string) => string,
  param2: string
) => number;

// parametre type'ını ayrı bir type içerisinde tanımlayıp kullanmak.
type ExampleFnParamType_1 = (no1: number, no2: number) => string;
type ExampleFnType_3 = (param1: string, param2: ExampleFnParamType_1) => object;

const arr_1 = [10, 40, -20, 50];
const map_result_1 = arr_1.map((item, index) => {
  console.log("map'e gönderilen arrow function'ın parametreleri:", item, index);

  return item * 2;
});
console.log(">>>  map_result_1:", map_result_1);

arr_1.map(function (item, index) {
  console.log(
    "map'e gönderilen nameless function'ın parametreleri:",
    item,
    index
  );

  return {
    foo: item,
  };
});

const result_1: number[] = [];
const foreach_result_1 = arr_1.forEach((item, index) => {
  console.log(
    "forEach'e gönderilen arrow function'ın parametreleri:",
    item,
    index
  );

  result_1.push(item * 3);

  return item * 3;
});
console.log(">>>  foreach_result_1:", foreach_result_1);
console.log(">>>  result_1:", result_1);

arr_1.forEach(function (item, index) {
  console.log(
    "forEach'e gönderilen nameless function'ın parametreleri:",
    item,
    index
  );
});

////////////////////////////////////////////////////////////
console.log("-------------------------------------");

/* Soru: Diziler üzerinde işlem yapmamızı sağlayan map() ve forEach()
fonksiyonlarını normal bir fonksiyon olarak türlerini tanımlayıp
implement ediniz. */

type IteratorFnType_1 = (currentItem: any, index: number) => any;
type MapFnType_1 = (iterator: IteratorFnType_1, arr: any[]) => any[];
type ForEachFnType_1 = (iterator: IteratorFnType_1, arr: any[]) => undefined;

/* map_1 bir fonksiyondur ve yukarıda tanımladığımzı türe bağlı olarak
yazılmış olan herhangi bir fonksiyonu tutar. */
const map_1: MapFnType_1 = (iterator, arr) => {
  console.log("map_1 invoke edildi", arr);
  const newArr: any[] = [];

  for (let i = 0; i < arr.length; i++) {
    console.log("For döngüsü i: ", i);

    const result = iterator(arr[i], i);
    newArr.push(result);
  }
  console.log(">>>  newArr:", newArr);

  return newArr;
};

/* mapResult_1, map_1'den dönen sonucu tutar. */
const mapResult_1 = map_1(
  (item, index) => {
    console.log("map_1'e gönderilen fonksiyon çağırıldı");
    console.log(">> item: ", item, index);

    return item * 2;
  },
  [40, 75, -30, -100, 43]
);
console.log(">>>  mapResult_1:", mapResult_1);

/* Parametreden gelen fonksiyonun çağırılması ve oradan dönen
değerin konsola yazdırılması örneği. */
type ExampleFnType_6 = (param1: () => number) => void;

const exampleFn_1: ExampleFnType_6 = (param1) => {
  const param1_result = param1();
  console.log("param1'in sonucu:", param1_result);
};

exampleFn_1(() => 10);
exampleFn_1(() => 20);
exampleFn_1(() => 33);
exampleFn_1(() => {
  console.log("param1'e gönderilen fonksiyon çağırıldı.");
  return 99;
});
exampleFn_1(() => 56);

//////////////////////////////////////

/* Bir değişkene atadığımız değer invoke edilebilen bir değerse o değişkeni
çağırabiliriz (veya invoke edebiliriz veya call yapabiliriz). Ama atanan
değer invoke edilebilen bir değer değilse o zaman çağıramayız. Örneğin
firstname değişkenine string atandığı için bunu çağıramayız. Ama
`foo` değişkenine bir fonksiyon atandığı için bunu çağırabiliriz. */
const firstname = "ahmet";
// aşağıdaki satır hata verir.
// firstname()

const foo = () => {};
foo();

() => {};

exampleFn_4();

/* Fonksiyon tanımlamakla fonksiyonu değişkene aktarmak arasında
ufak bir fark vardır. Her ne kadar ikisi de fonksiyon tanımlama
olarak yazılsa da gerçekte tam olarak aynı değildir. */

// Burada isimli fonksiyon tanımlıyoruz. İsimli fonksiyonlar tanımlandıkları
// bölgenin her noktasında çağırılabilirler.
function exampleFn_4() {
  //
}

// Ama burada isimsiz fonksiyonu bir değişkene aktarıyoruz. Bu yöntemi
// kullandığımızda bu değişkeni sadece tanımlandıktan sonra invoke
// edebiliriz, öncesinde invoke edemeyiz.
const exampleFn_5 = () => {};

exampleFn_5();

// Ödev: forEach() fonksiyonunu type'a bağlı olarak implement edip kullanın.
