/* Access Modifier (Erişim Belirteci):

Class elemanları hassas bilgi tutacakları zaman bu elemanlara class'ın
dışından erişilip erişilmeyeceğini belirlemek için kullanılan ifadelerdir.
Örneğin kredi kartı bilgilerini tutan bir class'ımız var diyelim. Burada
kart bilgilerini tutan property'lere dışarıdan erişilmesi güvenlik zaafiyeti
oluşturacaktır. Bundan dolayı hassas bilgileri tutan property'lerin dışarıdan
erişime kapatılması gerekir.

Üç adet erişim belirteci vardır. Bunlar public, protected ve private'dır.

- public: Hem class dışında hem de classı extend eden classların erişebilmesi
  için kullanılır.

- protected: Sadece classın kendisi ve onu extend eden classlar tarafından
  erişilebilmesi için kullanılır.

- private: Sadece tanımlandığı class tarafından erişilebilir, extend eden
  classlar ve dışarıdan erişilemez.

*/

class ExampleClass_3 {
  private foo: string;
  protected bar: string;

  /* Eğer herhangi bir erişim belirteci yazılmazsa o eleman public olur. */
  baz: string;

  // Bir property'yi sadece okunabilir yapmak için readonly belirtecini kullanırız.
  readonly qux: string;

  constructor(qux: string) {
    this.foo = "";
    this.bar = "";
    this.baz = "";

    // readonly olarak belirlenmiş bir property'ye sadece constructor içerisinde
    // değer ataması yapılabilir, onun dışında yapılamaz.
    this.qux = qux;
  }
}

/* Yeni class oluştururken mevcut bir class'ı genişleterek oluşturabiliriz (yani
extend edebiliriz). Bu durumda üst class'ın property'lerine erişebilmek için
o property'lerin protected veya public olmaları gerekir. Private olan property'lere
buradan erişemeyiz. */
class ExampleClass_4 extends ExampleClass_3 {
  exampleFn1() {
    // foo property'si extend eden class'a kapalı ama bar property'si açık olduğu
    // için buradan bar'a erişebiliyoruz.
    this.bar = "test";
  }
}

const example_obj_1 = new ExampleClass_3("qux değeri buraya gelir");
// foo ve bar property'leri dışarıya kapalı oldukları için erişemiyoruz.
//example_obj_1.foo = "test";
//example_obj_1.bar = "testaerşlgkjaelrşgkj";
example_obj_1.baz = "aeşrkgjsrşhjsr";

// readonly olarak belirlenmiş bir property'ye constructor dışında set edilemez.
//example_obj_1.qux = "test";

/* Önemli not: Erişim belirteçleri sadece kod yazarken bizim işimize yarayan
ifadelerdir. Çalışma esnasında yani kodu javascripte derlediğimizde bütün
propertylerin erişim belirteçleri silinir yani dolayısıyla hepsi public
olur. Bundan dolayı bir objeyi konsola bastığımızda bütün propery'lerin
yazıldığını görürüz. Örneğin aşağıdaki konsol çıktısında private ve protected
olan property'ler de ekrana basılır. */

console.log(">>>  example_obj_1:", example_obj_1);
