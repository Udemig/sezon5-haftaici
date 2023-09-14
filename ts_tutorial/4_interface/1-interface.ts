/*
 ! Interface (arayüz):
 * Interface, Bir nesnenin yapısnı tanımlayan ve bu yapını
 * hangi özellikeler sahip olması gerektiğini belirleyen tanımlayıcı 
 * Abstract sınıftan farkı:
 * Inheritance hiyerarşisinde  class'lar sadece bir class'ı extend edebilir
 * Interface birden fazla farklı interface'den miras alabilir.
 * 
 * Özellikler
 * - Interface'leri isimlendirirken sonuna "Interface" taksını
 * veya başına "I" takısını ekleyebiliriz. Bunun sebibi isimlerine 
 * bakarak interface olduklarınını daha net anlaşılabilmesi.
 * 
 * - Interface'lerin property ve methodlarına erişim belirteci yazmayız.
 *  Çünkü bunların hepsi public olmak zorunda
 *
 * - Birden fazla interface implement edilebilir.  Interfaceler yazılırken aralarına virgül konur
 */

interface IGeometricShape {
  width: number;
  heigt: number;
  radius?: number;

  calculateArea(): number | string; // methodun tanımını yap
}

// GeometricShape interface'İni bir kare objesi için implement etme
const square: IGeometricShape = {
  width: 200,
  heigt: 200,

  calculateArea() {
    return this.width * this.heigt;
  },
};

// GeometricShape interface'İni bir silindir objesi için implement etme
const circle: IGeometricShape = {
  width: 50,
  heigt: 1,
  radius: 25,

  calculateArea() {
    return this.radius
      ? Math.PI * this.radius * this.radius
      : 'Lütfen çap giriniz';
  },
};

console.log(circle.calculateArea());
