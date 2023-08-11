/* `any` type: Bir değişkenin herhangi bir değer atanabilmesini
sağlar. any olarak tanımlanmış bir değişkene sonradan farklı türlerde
değerler atanabilir. Bu durumda değişken aynı javascriptte davrandığı
gibi davranır.
*/

let example_var_4: any = "test";
example_var_4 = "foo";
example_var_4 = "bar";
console.log(">>> example_var_4:", example_var_4, typeof example_var_4);

example_var_4 = 10;
console.log(">>> example_var_4:", example_var_4, typeof example_var_4);

example_var_4 = false;
console.log(">>> example_var_4:", example_var_4, typeof example_var_4);

example_var_4 = {
  id: 1,
};
console.log(">>> example_var_4:", example_var_4, typeof example_var_4);

example_var_4 = {
  fullname: "test",
};
console.log(">>> example_var_4:", example_var_4, typeof example_var_4);

example_var_4 = undefined;
console.log(">>> example_var_4:", example_var_4, typeof example_var_4);

example_var_4 = null;
console.log(">>> example_var_4:", example_var_4, typeof example_var_4);

/* `void` type: Bir fonksiyondan değer dönmesini istemiyorsak o fonksiyonun
dönüş türünü `void` olarak tanımlamamız gerekir. Böylece bu fonksiyondan
bir değer dönmeyeceği anlaşılmış olur. Çünkü eğer fonksiyonun dönüş türünü
belirtmezsek mantıksal hatalara sebep olabilir. Örneğin yanlışlıkla gereksiz
bir değer dönderebiliriz. Bu durumda typescript bu dönderilen değerin
türünü fonksiyonun dönüş türü olarak algılar. Ama biz algoritmayı bu
fonksiyondan değer dönmeyecek üzere kurgulamışızdır. Bunun gibi mantıksal
hatalara sebep olmamak için dönüş türünü `void` olarak set etmeliyiz.

Not: Fonksiyonlar konusu daha detaylı şekilde ilerleyen derslerde işlenecektir.
*/

/* Örneğin sum_1 fonksiyonundan sayısal bir değer dönmesini beklediğimizi
düşünelim. İki sayıyı toplayıp bize sonucu dönderecek. Bundan dolayı
bu fonksiyonun dönüş türü number olarak belirtilmiştir. */
function sum_1(no1: number, no2: number): number {
  return no1 + no2;
}

/* Fakat aşağıdaki fonksiyondan algoritma gereği bir değer beklemiyoruz.
Sadece verilen ismi ekrana basmasını bekliyoruz. Bu durumda bu fonksiyonun
dönüş türünü void olarak ayarlarsak algoritmamızı sağlıklı bir şekilde
implement etmiş oluruz. */
function printHello_1(name: string): void {
  console.log("Merhaba " + name);
}

/* Eğer dönüş türünü belirtmezsek typescript bu fonksiyonun dönüş türünü
otomatik olarak ilk return ifadesine göre belirler. Bu da yine mantıksal
hataya sebep olan bir durumdur. Bu yüzden mutlaka her fonksiyonun dönüş
türünü belirtmek gerekir. Eğer hiçbirşey dönmesini istemiyorsak void
kullanmalıyız. */
function printHello_2(name: string) {
  console.log("Merhaba " + name);

  return "merhaba " + name;
}

/* Aşağıdaki örnek return ifadesinin kullanımıyla ilgili bir örnektir. */
function calculateExamResult_1(
  vize: number,
  final: number
): number | undefined {
  if (vize < 0 || vize > 100) {
    return;
  }
  if (final < 0 || final > 100) {
    return;
  }

  return vize * 0.4 + final * 0.6;
}

const result_1 = calculateExamResult_1(9999, 10000000);
if (typeof result_1 === "undefined") {
  console.log("Hatalı bilgi girildi.");
} else {
  console.log("result: ", result_1);
}

///////////////////////
function exampleFn_1(): any | void {
  const d = new Date();
  let ms = d.getMilliseconds();
  const modResult = ms % 4;

  if (modResult === 0) {
    return 0;
  } else if (modResult === 1) {
    return "bir";
  } else if (modResult === 2) {
    return true;
  } else {
    return;
  }
}

// içi boş fonksiyon ve dönüş türü void
function exampleVoid_1(): void {}

let exampleVar_3: any = exampleVoid_1();

let exampleVar_4 = exampleVoid_1();

let exampleResult_4 = exampleFn_1();
console.log(">>>  exampleResult_4:", exampleResult_4, typeof exampleResult_4);

for (let i = 0; i < 10; i++) {
  exampleResult_4 = exampleFn_1();
  console.log(">>>  exampleResult_4:", exampleResult_4, typeof exampleResult_4);
}

/* `never` type: Bir fonksiyondan hata fırlatılacaksa o fonksiyonun
dönüş türünü `never` olarak belirtmek gerekir.

Bir fonksiyonun çalışmasını durdurmak için iki yöntem vardır. Birincisi
return yöntemi, diğeri de throw yöntemi. Return ettiğimizde dönderilen değer
çağırılan noktaya gider. Ama throw ettiğimizde fırlatılan hata çağırılan
bölge tarafından yakalanmazsa (try-catch ile yakalanmalı) o zaman
program crash olur (biter).
*/

function fn5(): never {
  console.log("fn5 çağırıldı.");

  throw new Error("fn5 hatasını buraya yazıyoruz.");

  // Yukarıda throw edildiği için ondan sonraki satırlar çalışmaz.
  //return "test";
}

/* Eğer fn5() fonksiyonunu try-catch içerisinde yazmazsak bu satırda
hatayı ekrana basar ve program sonlanır. */
// fn5();

/* Eğer fn5() fonksiyonunu try-catch içerisinde yazarsak o zaman fırlatılan
hata catch bloğunda yakalanır. catch içerisine gelen Error objesindeki
message property'si konsole basılabilir. Sonuç olarak programın çalışması
kesilmez ve böylece hatayı kontrol altında tutmuş oluruz. */
try {
  fn5();
} catch (e: any) {
  console.log(e.message);
}
console.log("fn5 çağırıldıktan sonra kodlar çalışmaya devam eder..");

/* Örnek: Vize final ortalamasını alan bir fonksiyon yazalım. Fakat
girilen değerler 0-100 arasında değilse hata fırlatalım. */

function calculateExam_1(vize: number, final: number): number | never {
  if (vize < 0 || vize > 100) {
    throw new Error("vize 0-100 arasında olmalı.");
  }

  if (final < 0 || final > 100) {
    throw new Error("final 0-100 arasında olmalı.");
  }

  return vize * 0.4 + final * 0.6;
}

try {
  const result_2 = calculateExam_1(10, 20);
  console.log("Sınav sonucu: ", result_2);
} catch (e: any) {
  console.log(e.message);
}

/* Örnek: İsim girildiğinde "merhaba isim" şeklinde konsola bilgi yazan
bir fonksiyon tanımlayın. Eğer isim boş string girilirse hata fırlatsın. */

function sayHello_1(name: string): void | never {
  if (name.length === 0) {
    throw new Error("Lütfen isim alanını boş bırakmayınız.");
  }

  console.log("Merhaba " + name);
}

try {
  sayHello_1("alpay");
  sayHello_1("");
} catch (e: any) {
  console.log(e.message);
}
console.log("Program başarılı şekilde sonlandı.");
