/* Immediate Call Function (Hemen çağırılan fonksiyon)
Bazen bir fonksiyonun tanımlandığı noktada kullanılması ve
birdaha asla kullanılmaması gerektiği durumlar olur. Böyle durumlarda
immediate call function yazılır.

Bunun nasıl yazıldığına geçmeden önce typescriptteki fonksiyon
tanımlama yöntemlerini hatırlayalım. Typescriptte kabaca dört
şekilde fonksiyon tanımlama yöntemi vardır.

- 1: İsimli fonksiyon tanımlamak
- 2: İsimsiz fonksiyon tanımlamak ve bunu bir değişkene aktarmak.
- 3: Arrow function tanımlamak ve bunu bir değişkene aktarmak.
- 4: Single line arrow function
*/

// 1: İsimli fonksiyon örneği:
function exampleFn_1(param1: string, param2: number) {
  console.log("exampleFn_1 invoke edildi.");
}

// 2: İsimsiz fonksiyon tanımlayıp değişkene aktarmak.
const exampleFn_2 = function (param1: string, param2: string) {
  console.log("exampleFn_2 invoke edildi.");
};

// 3: Arrow function
const exampleFn_3 = (param1: number, param2: boolean) => {
  console.log("exampleFn_3 invoke edildi.");
};

// 4: Single line arrow function
const exampleFn_4 = (param1: number, param2: number) => param1 + param2;

/* Yapmak istediğimiz şey fonksiyonu tanımlandığı yerde çağırmak ve
birdaha asla çağırmamak. */

(() => {
  // burası arrow function içeriği
  console.log("Birinci function invoke edildi.");
})();

/* Nasıl yazılır? Önce peşpeşe iki tane parantez açıp kapatılır. Sonra birinci
parantezin içerisine arrow function yazılır. Böylece o fonksiyon nodejs tarafından
derhal çağırılmış olur. */

(() => {
  // bu fonksiyon immediate call function'dır.
  console.log("İkinci function invoke edildi.");
})();

exampleFn_2("foo", "bar");
exampleFn_2("foo", "bar");
exampleFn_2("foo", "bar");
exampleFn_2("foo", "bar");
exampleFn_2("foo", "bar");
exampleFn_2("foo", "bar");
exampleFn_2("foo", "bar");

/* Örneğin daha önceki projelerimizde useEffect() hookuna asenkron fonksiyon
göndermeye çalışmıştık ama bunu yapamamıştık çünkü useEffect() tanımı gereği
sadece senkron fonksiyon alıyordu. Ama bizim asenkron bir bölgeye ihtiyacımız
vardı. İşte bu durumda bu asenkron bölgenin bir kez tanımlanması ve hemen orada
çağırılması gerekiyordu. Bu senaryoyu gerçekleştirmenin en iyi yolu immediate
call function yazmaktır. */

/*
useEffect(() => {
    // burası senkron bölge.

    (async () => {
        // burası asenkron bölge
    })()

    // Aslında immediate call function yazmak yerine normal bir
    // fonksiyon yazıp hemen çağırabiliriz. Ama bu bizi güvence
    // altına almaz. Yani ikinci kez çağırma ihtimalimiz var.
    async function callMe() {
        //
    }
    callMe()

    // ...
    // ...
    // ... Mesela burada işlemler yapıp ikinci kez
    // ... callMe() fonksiyonunu çağırabiliriz. Bu mantıksal
    // ... bir hatadır.
    // ...
    // ...

    callMe()
})

*/
