type ExampleFnType_1 = (
  param1: number,
  param2: string,
  param3: boolean,
  param4: string
) => object;

const exampleFn_1: ExampleFnType_1 = (
  param1: number,
  param2: string,
  param3: boolean,
  param4: string
): object => {
  return {};
};

const exampleFn_2: ExampleFnType_1 = (
  param1,
  param2,
  param3,
  param4
): object => {
  console.log("exampleFn_2 invoked.");

  return {
    prop1: param1 + param2,
    param2,
  };
};

/* Örnek: İki sayı kullanılarak yapılan matematiksel işlemler için
bir fonksiyon prototipi hazırlayıp örnek fonksiyonlar yazınız.
Mesela toplama işlemi iki sayı ile yapılır. Çarpma işlemi de aynı
şekilde. İki sayıyla yapılan işlemler için genel bir fonksiyon
türü yazınız. */

type MathOperationFnType_1 = (no1: number, no2: number) => number | never;

/* Neden digit1 ve digit2 yazdık? Çünkü yukarıda fonksiyon typeını
yazarken parametrelerin isimlerini aynı kullanma zorunluluğu
yoktur. Buna örnek olması amacıyla farklı isimler kullandık.
Sadece parametre sayısının ve eğer türlerini de belirtirsek türlerinin
aynı olması gerekiyor. */
const sum_fn_1: MathOperationFnType_1 = (digit1, digit2) => {
  return digit1 + digit2;
};
//console.log(sum_fn_1(10, 20));

const divide_fn_1: MathOperationFnType_1 = (no1, no2) => no1 / no2;

const divide_fn_2: MathOperationFnType_1 = (no1, no2) => {
  if (no2 === 0) {
    throw new Error("İkinci sayı sıfır olamaz.");
  }

  return no1 / no2;
};

console.log(Infinity + Infinity);

const result1 = divide_fn_1(10, 0);
console.log(">>>  result1:", result1);
const result2 = divide_fn_2(10, 0);
console.log(">>>  result2:", result2);
