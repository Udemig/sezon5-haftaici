// Generic bir tipe sahip class
class Sorter<T> {
  constructor(private data: T[]) {}

  sort(): void {
    this.data.sort();
  }
}

// sayı dizisini sıralayan bir örnek
const numbers = new Sorter<number>([4, 3, 1]);
numbers.sort();
console.log(numbers);

// string dizisi için generic type'ı gönderme
const strings = new Sorter<string>(['elma', 'armut', 'muz']);
strings.sort();
console.log(strings);

interface CategoryType {
  id: number;
  category_name: string;
  category_id: number;
}

// Generic bir github repo class'ı
// Bir reposnun sahip olucağı tipi class'a örnek oluşturuken gönderiyoruz
// * Göndericeğimiz generic type!ı farklı bir type'ın özellikleri ile kısıtlayabiliyoruz.
class Repo<T extends CategoryType> {
  private user_repos: T[] = [];

  constructor(private readonly user: string) {}

  add(newrepo: T): void {
    this.user_repos.push(newrepo);
    console.log(`${this.user} hesabı için repo oluşturuldu`, newrepo);
  }

  update(item: T): void {
    // elemanı dizide arar
    const found = this.user_repos.find((i) => i.id === item.id);
    // bukursa dizideki objenin değerlerini günceller
    if (found) {
      Object.assign(found, item);
      console.log(
        `${this.user} hesabınndaki ${found.category_name} kategorisindeki ürün güncellendi`,
        item
      );
    }
  }
}

// Bir repo'nun sahip olması gereken değerleri interface içerisnde tanımlıyoruz
interface RepoInterface {
  title: string;
  id: number;
  favourites_count: number;
  category_name: string;
  category_id: number;
}

// Generic type olarak daha önce hazırladığımız interface'i gönderiyoruz
const userRepo = new Repo<RepoInterface>('Ahmet42');

// artık add fonksiyonu daha önce generic type olarak RepoInterface göndermemizden
// dolayı interface'de tanımladığımız tip kısıtlamalarına sahip oldu
userRepo.add({
  title: 'Chat Uygulaması',
  id: 983,
  favourites_count: 104,
  category_name: 'Uygulamlarım',
  category_id: 906,
});

// güncellme fonksiyonu
userRepo.update({
  title: 'Chatleşme Uygulaması',
  id: 983,
  favourites_count: 199,
  category_name: 'Uygulamlarım',
  category_id: 906,
});

// generic bir sınıf özelliği
// T generic type'i ini sace number veya string kabul edicek bir yapıya getilerim
class Container<T extends number | string> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

const ex_container = new Container<number>(42);
console.log(ex_container.getValue());

const ex_container2 = new Container<string>('Merhabalar');
console.log(ex_container2.getValue());
