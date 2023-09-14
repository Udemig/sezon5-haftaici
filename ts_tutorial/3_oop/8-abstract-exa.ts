// Oluştutcağımı bütün araçlar için ortak noktaları bu class'ta tutuyoruz
// Daha sonra alt class'lar oluştutup o sınıflarda abstact fonksiyonunu
// farklı şekillerde implement edicez
abstract class Vehicle {
  constructor(make: string, model: string) {}

  abstract move(km: number): void;
}

class Car extends Vehicle {
  move(km: number): void {
    console.log('Kontağı çevir');
    console.log('Elfrenini indir');
    console.log(`Gaza bas ve ${km} km ilerle`);
  }
}

class Plane extends Vehicle {
  move(km: number): void {
    console.log('Kuleye haber ver');
    console.log('Gerekli kontrolleri yap');
    console.log(`Kalkış pistine git ve ${km} km ilerle`);
  }
}

class MotorBike extends Vehicle {
  move(km: number): void {
    console.log('Kaskı tak');
    console.log('Ayaklıkları indir');
    console.log(`${km} km boyunca motoru sür`);
  }
}

// Abstact class'on alt sınıflarında örnek oluşturma
const toyata = new Car('Toyota', 'Coralla');
toyata.move(100);

const plane = new Plane('Boeng', '707');
plane.move(4000);

const honda = new MotorBike('Honda', 'CBR');
honda.move(40);
