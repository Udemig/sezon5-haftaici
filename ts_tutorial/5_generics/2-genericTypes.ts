/*
 * Generic yapsını bir çok veri türlerinde kullanabiliyoruz
 * Class,interface,function,type generic kullanmak mümkündür
 * Burdaki amaç dinaik şekilde type'ları belirleyebilmek
 */

// 1 . Genel bir tür tanımında generic kullanımı:
// T değerini type'ı çağırıken gönderiyoruz
type MyArray<T> = {
  items: T[]; // t türünden bir dizi olucak
  addItem: (item: T) => void; // t türünden bir parametre alır
  getItem: (index: number) => T; // T dizisinden bir eleman bulup döndürüyoruz
};

// 2.Yularıdaki türü kullanarak sayılar için bir nesne oluşturalım.
const numberArray: MyArray<number> = {
  items: [3, 5, 9, 10, 44],

  addItem(item) {
    this.items.push(item);
  },

  getItem(index) {
    return this.items[index];
  },
};

// 3. Yularıdaki türü kullanarak sayılar için bir nesne oluşturalım.
const stringArray: MyArray<string> = {
  items: ['a', 'b', 'c'],

  addItem(item) {
    this.items.push(item);
  },

  getItem(index) {
    return this.items[index];
  },
};

/*
 Değişken isimlendirme kurallarına göre isimlendirilir.
 Yazılım camiasında genele olarak tek karakter ve büyük harfle kullanılır.
 Bunun sebebi generic typeların nasıl bir type alacığı belli olmaması.
 Bu yüzden genel olarak amacı yansıtan bir isim yöntemi kullanılır.
 Örneğin: T , K , V , Z , E

 T: type
 R: herhangi bir type
 E: Error type
 K: Key type
 V: Value type
 Z: Herhangi bir type

 * Bunlar sadece yaygın olarak kullanılanlar
 * Bunların yetmedği durumlarda kendmiiz isimlendirebiliriz.
*/

interface exam<K, V, E, T> {
  key: K;
  value: V;
  error: E;
  username: T;
}

interface exam_2<T, R, Z> {
  username: T;
  data: R;
  userInfo: Z;
}

//! T , R , Z: Type - GeneL Veri türü tanımlama
function exa_func<T>(arg: T): T {
  return arg;
}

const result = exa_func<number>(43);
const result2 = exa_func<string>('Selamlar');

console.log(result);
console.log(result2);

function exa_func2<T, R, Z>(arg1: T, arg2: R, arg: Z): T {
  console.log(arg2);
  return arg1;
}

exa_func2<number, string, boolean>(50, 'merhabalar', true);

//! E: Error/Exception - Hata Türünü Tanımlama
type API_Response<T, E> = {
  data: T;
  error?: E;
};

const example_6: API_Response<object, string> = {
  data: {
    products: [],
  },

  error: 'Üzgünüz hata oluştu',
};

//! K: Key, V: Value - Bir anahtar değer çifitini tanımlarken kullanılır
type obj_type<K, V> = {
  key: K;
  value: V;
};

const exam_1: obj_type<string, object> = {
  key: 'selam',
  value: {},
};

const exam_2: obj_type<object, number> = {
  key: {},
  value: 900,
};
