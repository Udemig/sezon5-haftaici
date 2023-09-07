/* OOP: Object Oriented Programming (Nesne Tabanlı Programlama)

Eskiden bilgisayarların güçlü olmadığı dönemlerde herşeyi fonksiyonlar
ile yapmak mümkündü. Bilgisayarın gelişimiyle birlikte ihtiyaçlar arttı
ve fonksiyon tabanlı programlama ihtiyaçları karşılayamaz hale geldi.
Bu sebepten dolayı mühendisler yeni bir programlama yaklaşımı oluşturdular.



*/

class Vehicle_1 {
  /* Class'ın özelliklerine "property" ismi verilir. */
  wheel_count: number = 0;
  door_count: number = 0;
  case_type: "suv" | "hatchback" | "sedan" | "pickup" | "limousine" = "suv";
  engine_type: "gasolin" | "gas" | "diesel" | "electric" = "gasolin";
  transmission_type: "auto" | "manual" = "auto";

  /* Class'ın içerisindeki fonksiyonlara "method" ismi verilir. */
  engine_start() {
    console.log("Engine started.");
  }

  engine_stop() {
    console.log("Engine stopped.");
  }

  run(meter: number) {
    console.log("Car is running for " + meter + " meter.");
  }

  turn(degree: number, direction: "left" | "right") {
    console.log(
      "Car is turning for " + degree + " degree to " + direction + "."
    );
  }
}

// `new` operatörü kullanarak Vehicle_1 class'ından yeni bir obje yaratıyoruz.
const alpays_car: Vehicle_1 = new Vehicle_1();
alpays_car.wheel_count = 4;
alpays_car.door_count = 2;
alpays_car.case_type = "hatchback";
alpays_car.engine_type = "gasolin";
alpays_car.transmission_type = "auto";

alpays_car.engine_start();
alpays_car.run(10);
alpays_car.turn(45, "left");
alpays_car.run(300);
alpays_car.engine_stop();

///////////////////////////////////

/* Class'ı initialize etmek (constructor):
Class'tan obje oluşturduğumuzda bu objenin property'lerine ilk değer
verilmesi gerekir. Bunu yapmak için iki yöntem vardır. Birincisi yukarıdaki
örnekteki gibi property'yi tanımladığımız yerde eşittir diyerek ilk değer
atamak, ikincisi ise `constructor` isimli methodu kullanmak.

*/

// Birinci yöntem: Bu yöntemde property'lere kod içerisinde ilk değer
// verilir. Fakat burada dinamik bir yapı kuramayız. Verilen değerler
// hardcoded şekilde verilir ve dinamik bir yapı kurmamız mümkün değildir.
class ExampleClass_1 {
  foo: string = "";
  bar: boolean = true;
  baz: number = 0;
}

// İkinci yöntem:

class ExampleClass_2 {
  foo: string;
  bar: boolean;
  baz: number;

  /* constructor fonksiyonunun özellikleri:
    - Bu method özel bir methoddur ve `new` ile yeni obje oluşturulduğunda
      typescript tarafından otomatik olarak çağırılır.

    - Buraya gelecek olan parametreler `new` operatörünün çağırıldığı satırda
    belirlenir.

    - Her class'ta constructor olması zorunlu değildir ama property'leri
      dinamik şekilde yani parametreden gelen değerlerle doldurmak istersek
      bu methodu oluşturmak zorundayız.
  */
  constructor(foo: string) {
    console.log("ExampleClass_2'nin constructor'ı çağırıldı.");

    /* `this` ifadesi şuanki objeye işaret eder. */
    this.foo = foo;

    this.bar = false;
    this.baz = 0;
  }
}

console.log("Objeler oluşturuluyor:");
const exampleObj1 = new ExampleClass_1();
const exampleObj2 = new ExampleClass_2("test");

console.log(">>>  exampleObj1:", exampleObj1);
console.log(">>>  exampleObj2:", exampleObj2);
