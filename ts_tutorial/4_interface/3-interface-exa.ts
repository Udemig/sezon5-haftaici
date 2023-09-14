// bir araç için interface
interface VehicleInterface {
  make: string;
  model: string;
  max_speed: number;
  type: 'sedan' | 'ticari'; // union type ile sınırlandı
}

// yolcu interface'i
interface IPassenger {
  passenger_count: number;
}

// Otomobil sınıfı, Arac ve Yolcu interfacelerini implement ediyor (uyguluyor)
class Car implements VehicleInterface, IPassenger {
  make: string;
  model: string;
  max_speed: number;
  passenger_count: number;
  type: 'sedan' | 'ticari';

  constructor(
    make: string,
    model: string,
    max_speed: number,
    passenger_count: number,
    type: 'sedan' | 'ticari'
  ) {
    this.make = make;
    this.model = model;
    this.max_speed = max_speed;
    this.passenger_count = passenger_count;
    this.type = type;
  }

  showInfo(): void {
    console.log(
      `${this.make} ${this.model} ${this.type} tipi aracın toplam yolcu kapasitesi ${this.passenger_count}`
    );
  }
}
// otomobil nesnesi oluşturma
const ford = new Car('Ford', 'Focus', 180, 4, 'sedan');
ford.showInfo();
