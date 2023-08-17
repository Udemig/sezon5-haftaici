/* Enum: Bir değişkenin alabileceği değerleri belirten tanımlamalardır.
Aslında "enumeration" kelimesinin kısaltılmışıdır. Bu da "saymak" anlamına
gelir ama bu rakamsal olarak saymak değildir. Örneğin telefon numarası türlerini
sayın dediğimizde mobil numara, karasal numara, ticari numara gibi ifadelerin
peş peşe söylenmesi şeklinde sayma işlemi yapılır.

Özellikleri:

- `type` keywordüyle başlamazlar `enum` keywordüyle başlarlar.
- Typelar gibi bir atama işlemi yoktur, doğrudan süslü parantez
  kullanılarak tanımlamaya başlanır.
- Değerler tırnaksız şekilde yazılır ve değişken ismi tanımlama
  kuralları geçerlidir.

*/

enum GenderEnum_1 {
  Male,
  Female,
  NotSelected,
}

/*
var GenderEnum_1;
(function (GenderEnum_1) {
GenderEnum_1.Male = 0
  // Bu satırı açıklmayalım. Burada aslında iki adet
  // atama işlemi yapılıyor. Birincisi "Male" propertysine
  // 0 (sıfır) değeri atanıyor, ikincisi de 0 (sıfır)
  // propertysine "Male" değeri atanıyor.
  GenderEnum_1[GenderEnum_1["Male"] = 0] = "Male";

  // Yukarıdaki tek satırın açılımı aslında
  // aşağıdaki iki adet atamadır.
  GenderEnum_1["Male"] = 0;
  GenderEnum_1[0] = "Male";
  
    GenderEnum_1[GenderEnum_1["Female"] = 1] = "Female";
    GenderEnum_1[GenderEnum_1["NotSelected"] = 2] = "NotSelected";
})(GenderEnum_1 || (GenderEnum_1 = {}));

Sonuç olarak GenderEnum_1 objesinin içeriği tam
olarak şu şekilde oluyor:

GenderEnum_1 = {
    Male: 0,
    Female: 1,
    NotSelected: 2,
    0: "Male",
    1: "Female",
    2: "NotSelected"
}
*/

enum OperatingSystemEnum_1 {
  Unix = "unix",
  Linux = "linux",
  Windows = "windows",
  Macos = "macos",
  iOS = "ios",
  Android = "android",
}

/*
OperatingSystemEnum_1 {
  Unix: "unix",
  Linux: "linux",
  Windows: "windows",
  Macos: "macos",
  iOS: "ios",
  Android: "android",

  unix : "Unix",
  linux : "Linux",
  windows : "Windows",
  macos : "Macos",
  ios : "iOS",
  android : "Android",
}
*/

enum OperatingSystemEnum_2 {
  Unix,
  Linux,
  Windows,
  Macos,
  iOS,
  Android,
}

OperatingSystemEnum_2[5]; // "Android"

/* Soru: 0-100 arasındtaki sınav notlarını enum şeklinde tanımlayabilir miyiz?
Cevap: Tanımlayamayız. Çünkü enum'lar küçük miktarda ve sayılması kolay olan
dataları tanımlamak için kullanılır. 

Çok miktardaki dataları enum şeklinde yazmak sintaks olarak doğrudur
ama pratik açıdan yanlıştır. Bu sebepten dolayı aşağıdaki gibi bir
tanımlama yapmamalıyız. */
enum ExamNote {
  _0,
  _1,
  _2,
  // ...
}

/* Aslında enum'lar union'lara benzerler. Fakat burada hangi yöntemi
seçeceğimiz tamamen probleme göre değişen bir konudur. Bazı problemlerde
(veya tasklarda) enum'lar daha çok avantaj sağlarken bazılarında da
union'lar avantaj sağlar. Bunun kararını o problemin gereksinimlerine
göre yazılımcı verir. */
enum StatusEnum_1 {
  Success,
  Error,
}

type StatusType_1 = "success" | "error";

/* Sonuç olarak bir yazılım projesini yaparken benzer işleri yapan
farklı yöntemler mevcuttur ve bunun tercihini yazılımcı yapar. */

///////////////////////////////////////////////////
// Enum içerisinde kullanılan bazı konular:

// Objelerin property'lerine iki şekilde ulaşılabilir. Birincisi eğer
// property içerisinde özel karakter yoksa nokta notasyonuyla property'ye
// ulaşılır. İkincisi de köşeli paranter kullanılarak ulaşılır. Bu yöntem
// property içerisinde özel karakter olduğu zaman kullanılır. Çünkü
// o özel karakteri ifade etmenin tek yolu tırnak içerisinde string
// olarak yazmaktır.
const exampleObj_1: any = {};
exampleObj_1.foo = "test";

// Mesela aşağıdaki propertylerde özel karakterler var. Tire, yıldız,
// köşeli parantez bunlar özel karakterdir ve tırnak içinde yazılmalıdır.
// "foo-bar"
// "foo*bar"
// "[foo]"
exampleObj_1["foo-bar"] = "test";
exampleObj_1["foo*bar"] = "test";
exampleObj_1["[foo]"] = "test";
exampleObj_1["bar"] = "test";
console.log(">>>  exampleObj_1:", exampleObj_1);

// Diziler aslında Array objesidir, yani aslında dizi diye birşey yoktur,
// property'si number olan objeler vardır.
// Bu sebepten dolayı aşağıdaki iki tanımlama aynıdır ve
// ikisi de Array objesidir.
const exampleArr_1: string[] = [];
const exampleArr_2 = new Array<string>();
exampleArr_1[0] = "test";
