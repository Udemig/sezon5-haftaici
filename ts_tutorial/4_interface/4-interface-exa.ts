// Ürün (Product) interface'i
interface IProduct {
  id: string;
  name: string;
  price: number;
  calculateTotal(quantity: number): number;
}

// Kategori interfface'i
interface ICategory {
  category_id: string;
  category: string;
}

// Telefon Sınıfında, Product ve Category interface'lerini implement ediyoruzç
class Phone implements IProduct, ICategory {
  id: string;
  name: string;
  price: number;
  category: string;
  category_id: string;

  constructor(
    id: string,
    name: string,
    price: number,
    category: string,
    category_id: string
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
    this.category_id = category_id;
  }

  calculateTotal(quantity: number): number {
    return this.price * quantity;
  }
}

const iphone = new Phone('1', 'Iphone', 999, 'Telefonlar', 'tt14');
console.log(iphone.calculateTotal(9));

//  Kitaplar sınıfı
// Telefon Sınıfında, Product ve Category interface'lerini implement ediyoruzç
class Book implements IProduct, ICategory {
  id: string;
  name: string;
  price: number;
  category: string;
  category_id: string;

  constructor(
    id: string,
    name: string,
    price: number,
    category: string,
    category_id: string
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
    this.category_id = category_id;
  }

  calculateTotal(quantity: number): number {
    const discountPrice = Math.floor(this.price / 2);
    return discountPrice * quantity;
  }
}

const lordOfTheRings = new Book(
  'lds12',
  'lordOfTheRings',
  99,
  'kitaplar',
  'ktp23'
);

console.log(lordOfTheRings.calculateTotal(20));
