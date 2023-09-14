// Abstract sınıf: DataFetcher
abstract class DataFetcher {
  constructor(protected apiURL: string) {}

  // Abstract Method: Veiriyi Çek
  abstract fetchData(apiKey: string): string;
}

// API  Üzerinden veri çeken bir sınıf
class FetchDog extends DataFetcher {
  // fetch datayı köpek verisi çekicek şekilde implement ettik
  fetchData(apiKey: string): string {
    try {
      const response = { ok: false, status: 404, data: 'Pitbull' };

      if (!response.ok) {
        return `Veri çekme isteği başarısız oldu: HTTP Kodu: ${response.status}`;
      }

      return `Veri çekme isteği başarılı oldu: Data: ${response.data}`;
    } catch (err) {
      return 'Veri çekme isteği başarısız. Uygulama kaynaklı hata';
    }
  }
}

const getDog = new FetchDog('www.dog.api/v1');
console.log(getDog.fetchData('10ads1239'));
