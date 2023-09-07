/* Getter & Setter:

Private veya protected olan property'lere dışarıdan erişim sağlamak
amacıyla yazılan fonksiyonlardır. Bu fonksiyonların görevi eğer
okuma yapmaksa o zaman getter, yazma yapmaksa setter olarak
isimlendirilir. Bu amaç doğrultusunda fonksiyon yazmak için
iki yöntem kullanılır. Bunlar normal method yazma yöntemi ve
typescript'in kendi getter/setter sintaksını kullanarak
fonksiyon yazma yöntemidir.

Kurallar:

- Yönetilen property'ler private veya protected olmalı. Çünkü okuma ve yazma (get & set)
  işlemlerini kontrollü bir şekilde yapmak için fonksiyonları kullanıp property'yi de
  gizlememiz gerekiyor. Eğer gizlemezsek kontrolün bir amacı kalmaz.
- Setter fonksiyona göndereceğimiz parametrenin türü set edeceğimiz parametrenin türüyle
  genelde aynı yapılır. Aynı olmadığı durumlar da olabilir, bu tamamen yapılan işin
  durumuyla ilgilidir.
- Bir fonksiyonun setter veya getter olduğu fonksiyonun önündeki (başındaki) "get" veya
  "set" ifadesi vasıtasıyla belirlenmez. Fonksiyonun yaptığı işe bakılır (yani implement
  ettiği algoritmaya bakılır). Eğer bir property'yi set ediyorsa bu setterdır, property'deki
  datayı bir şekilde dönderiyorsa getter olarak isimlendirilir.
- Fonksiyonların önüne eklenen "set" ve "get" ifadeleri sadece fonksiyonun görevi
  ilk bakışta anlaşılsın diye yazılır. Normalde bunlar kullanılmasa bile bir fonksiyon
  set veya get işlemi yapabilir.

*/

// Yöntem 1: Normal method yazarak getter/setter amacını gerçekleştirmek.
class Foo_1 {
  private bar: string = "";
  private baz: string = "";
  private qux: string = "";

  public getBar() {
    return this.bar;
  }

  public setBar(bar: string) {
    this.bar = bar;
  }
}

const foo = new Foo_1();

//foo.bar = "test";
//console.log(foo.bar);

foo.getBar();

// Birinci yöntemin gerçek dünya probleminde kullanılması örneği:

class UserPaymentInfo_1 {
  private creditCardNumber: string = "";
  private expireMonth: number = 0;
  private expireYear: number = 0;

  /* Genelde parametreden gelen değerin türüyle property'nin türü aynı
  olarak belirlenir. Böylece tür dönüşümü yapmaktan kurtulmuş oluruz. */
  public setCreditCardNumber(cardNumber: string) {
    if (cardNumber.length !== 16) {
      throw new Error("Kart numarası 16 haneli olmak zorunda.");
    }

    if (Number(cardNumber.trim()) + "" !== cardNumber) {
      throw new Error("Lütfen sadece sayısal bilgiler giriniz.");
    }

    this.creditCardNumber = cardNumber;
  }

  // Bazı durumlarda parametre aynı türde olmayabilir. Fakat bu türü uygun bir şekilde
  // set edeceğimiz property'nin türünden bir değere dönüştürmeliyiz. Örneğin aşağıdaki
  // fonksiyonda kart numarasını tuple ile alıyoruz ama class property'sine set ederken
  // stringe çeviriyoruz. (Doğrulama işleminin yapıldığını düşünelim.)
  public setCreditCardNumberWithTuple(
    cardNumber: [number, number, number, number]
  ) {
    //////////////////////////////////////////////////////////////////////////
    // ... Burada parametreden gelen bilgilerin doğrulaması yapılsın.
    //////////////////////////////////////////////////////////////////////////

    this.creditCardNumber = cardNumber.join("");
  }

  public getCreditCardNumber() {
    return "**** **** **** " + this.creditCardNumber.slice(-4);
  }
}

const serhatin_kredi_karti: UserPaymentInfo_1 = new UserPaymentInfo_1();

serhatin_kredi_karti.setCreditCardNumber("2345234234235454");
console.log("Kart no: ", serhatin_kredi_karti.getCreditCardNumber());

//serhatin_kredi_karti.creditCardNumber = "234234534645623453";
// **** **** **** 5454
// "2345234234235454"

/*
Yöntem 2: Get&set sintaksı kullanılması. Burada yeni bir sintaks kullanacağız.
Kurallar:

- Gizli olan property'ler alt tire ile başlamalı. Örn: private _creditCardNumber

- Methodların erişim belirtecinden sonra `get` ve `set` isimli erişim belirteçlerini
  yazarak methodu tanımlamaya başlarız.

- Normal fonksiyonlarda aynı isimde iki fonksiyon bulunmamalıdır. Fakat get veya set
  olarak tanımlanan aynı isme sahip iki fonksiyon tanımlamak mümkündür.

*/

enum Foo {
  Bar,
  Baz,
  Qux,
}

console.log(Foo[Foo.Bar]); // "Bar"

class UserPaymentInfo_2 {
  private _creditCardNumber: string = "";
  private _expireMonth: number = 0;
  private _expireYear: number = 0;

  public set creditCardNumber(creditCardNumber: string) {
    // .. burada kontroller yapılır
    console.log(
      "set creditCardNumber() fonkisyonu çağırıldı, creditCardNumber:",
      creditCardNumber
    );

    this._creditCardNumber = creditCardNumber;
  }

  public get creditCardNumber() {
    console.log("get creditCardNumber() fonkisyonu çağırıldı");

    return this._creditCardNumber;
  }
}

const ramazanin_kredi_karti = new UserPaymentInfo_2();

// Yukarıda "set" olarak tanımlanmış olan fonksiyonu sanki bir property'miş
// gibi kullanıyoruz. Eşittir ifadesini kullanarak değer ataması yaptığımda
// aslında bu property'yi set etmiş olurum. Set ettiğimde de yukarıda
// "set creditCardNumber(...)" şeklinde tanımlanmış olan fonksiyon
// invoke edilir. Bu invoke etme olayını typescript yapar. Yani biz aslında
// eşittir ile atama yapıyoruz ama arkaplanda fonksiyon çalışıyor.
// Böylece birinci yöntemde yapılan tüm kontrolleri bu atama işlemi
// için de yapmak mümkün hale geliyor.
ramazanin_kredi_karti.creditCardNumber = "test";

console.log("Okunan bilgi: ", ramazanin_kredi_karti.creditCardNumber);
