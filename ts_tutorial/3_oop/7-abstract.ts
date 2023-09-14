// Abstract Class alt class'lar için bir şema görevi görür
// Doğrudan örneklerini oluşturmayız
// Genellikle alt sınıfların ortak davranışılarını tanımlamak için kullanılır
abstract class TakePhoto {
  constructor(cameraMode: string, filter: string) {}

  abstract share(): void;
}

// Class abstract olduğu için doğrudan örneğini oluşturamıyoruz
// const example = new TakePhoto('Front', 'Sun');

// Ama abstract class'ı miras alan yeni class oluşturup
// Bu class içerisinde yarım kalan (implement edilmeyen)  fonksiyonları ve değerleri tamamlıyıp
// Bir örneğini oluştuabiliriz.
class Instagram extends TakePhoto {
  constructor(cameraMode: string, filter: string, zoom: number) {
    super(cameraMode, filter);
  }

  share(): void {
    // burda abstact olan yani görevi tanımalanmış olan
    // fonksiyonun göreivini tanımlıyoruz
    // .... instagram ile alakalı fonksiyonlar çalışır ...
    console.log('Çekilen fotoğraf Story olarak paylaşılıyor..');
  }
}

const insta = new Instagram('Front', 'Sun', 4);
insta.share();

// Aynı class'ı farklı bir uygulama için yazıcaz
// Bu sefer share fonksiyonunu farklı bir şekilde implement edicez
class Twitter extends TakePhoto {
  constructor(cameraMode: string, filter: string) {
    super(cameraMode, filter);
  }

  share(): void {
    // ... twitter fonksiyonları ....
    console.log('Çekilen fotoğraf tweet olarak paylaşıldı..');
  }
}

const tw = new Twitter('Back', 'Night');
tw.share();
