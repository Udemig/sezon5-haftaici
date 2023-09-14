// Müzik Çalar Arayüzü
interface IMusicPlayer {
  play(song: string): void;
  pause(): void;
}

// Spotify için bir sınıf oluşturma
class Spotify implements IMusicPlayer {
  play(song: string): void {
    console.log('Spotify açılıyor');
    console.log('Spotify sql veritabanı  ile iletişim kuruluyor');
    console.log(`${song} çalıyor....`);
  }

  pause(): void {
    console.log('Oynatılan müzk durduruldu');
  }
}

const spotify = new Spotify();
spotify.play('Müslüm');

// Apple müzik için bir sınıf
class AppleMusic implements IMusicPlayer {
  play(song: string): void {
    console.log('Apple müzik açılıyor');
    console.log('Apple mongo db veritabanı ile iletişime geçiyor..');
    console.log(`${song} çalıyor.....`);
  }

  pause(): void {
    console.log('Aktif müzk durduruldu');
  }
}

// sınıfın örneğini oluşturma
const apple = new AppleMusic();
apple.play('RAP');
