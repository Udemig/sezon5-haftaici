//  Generic bir interface tanımlayalım
interface Repository<T> {
  getById(id: number): T; // dönürüceği değeri daha sonra belileyeceğiz
  getAll(): T[]; // dönürüceği değer dizisini daha sonra beliliyoruz
  createRepo(item: T): void; // aldığı paramtre tipini daha sonra beliliyoruz
}

// Interface'e generic olarak string göndererek
// Interface'deki ifadelere uygun bir nesne oluşturalım
const userRepo: Repository<object> = {
  getById(id) {
    // find ile repo bulunur ve döndürülür
    return {
      repo_name: 'Hesap makinesi',
    };
  },

  getAll() {
    // api'dan kullanıcının repoları alınır ve geri dödürülür
    return [{ name: 'Landing_page' }, { name: 'JS_Memory' }];
  },

  createRepo(item) {
    console.log(`Repo hesapta oluşturudlu`);
  },
};

const repo = userRepo.getById(5);
console.log(repo);

const allrepos = userRepo.getAll();
console.log(allrepos);

userRepo.createRepo({ repo_name: ' harcama hesaplayıcı' });

// Birden fazla generic alan interface
interface Pair<T, R> {
  first: T;
  second: R;
}

// Bir fonksiyon olsun.
// Bu fonksiyona parametre alalım paramtermiz Pair interfaceini implement etsin
// Pair interface'ine göndericeğimiz generic type'lerini fonkisoyana generi olarak aldık
function printPair<Y, Z>(double: Pair<Y, Z>): Y {
  return double.first;
}

printPair<string, number>({ first: 'Selamlar', second: 90 });
