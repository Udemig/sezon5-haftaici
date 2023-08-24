/* Örnek: useMemo() hooku yüksek hesaplama gücü gerektiren işlemleri
önbelleğe alan bir hooktur. Böylece aynı parametrelerle yapılan
çağrıların sonucunu hızlı bir şekilde getirir. Kullanımı şu şekildedir:

memoize: ezberlemek

*/

function calculateFactorial_1(factorial: number) {
  // burada yüksek güç gerektiren hesaplama yapılır ve
  // sonucu döndürülür

  if (factorial <= 0) {
    return 1;
  } else {
    let result = 1;

    for (let i = 0; i < 1e7; i++) {
      result = 1;
      for (let i = factorial; i >= 1; i--) {
        result *= i;
      }
    }

    return result;
  }
}

console.time("factorial");
console.log(calculateFactorial_1(5));
console.timeEnd("factorial");

console.time("factorial");
console.log(calculateFactorial_1(5));
console.timeEnd("factorial");

console.time("factorial");
console.log(calculateFactorial_1(5));
console.timeEnd("factorial");

console.time("factorial");
console.log(calculateFactorial_1(5));
console.timeEnd("factorial");

console.time("log");
console.log("test");
console.timeEnd("log");

type UseMemoFnType_1 = (callback: () => number, dependencies: number) => number;

/* Farzedelim ki bu cache değişkenine dışarıdan erişemiyoruz. Sadece
useMemo'nun erişebildiği bir değişken olduğunu düşünelim. */
const cache_1: number[] = [];

const useMemo_1: UseMemoFnType_1 = (callback, dependencies) => {
  console.log(
    "useMemo_1 invoke edildi, parametreler: ",
    callback,
    dependencies
  );

  if (cache_1[dependencies]) {
    console.log("Şu parametre için önbellekte değer mevcut: ", dependencies);

    return cache_1[dependencies];
  } else {
    console.log(
      "Şu parametre için önbellekte değer bulunamadı, hesaplama yapılacak: ",
      dependencies
    );

    cache_1[dependencies] = callback();
    return cache_1[dependencies];
  }
};

console.log("-------- useMemo kullanılıyor: -------------");

console.time("factorial");
console.log(useMemo_1(() => calculateFactorial_1(5), 5));
console.timeEnd("factorial");

console.time("factorial");
console.log(useMemo_1(() => calculateFactorial_1(5), 5));
console.timeEnd("factorial");

console.time("factorial");
console.log(useMemo_1(() => calculateFactorial_1(5), 5));
console.timeEnd("factorial");

console.time("factorial");
console.log(useMemo_1(() => calculateFactorial_1(5), 5));
console.timeEnd("factorial");
