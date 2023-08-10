/* Tuple, miktarı değişmeyen data türleri için kullanılır. Kullanımı diziye
benzemektedir ama aslında mantıksal olarak uzunluğu değşimez.
Örneğin bir renk bilgisine ulaşmak için üç adet temel renk bilgisini
vermemiz yeterlidir. Bunlar RGB olarak bilinir ve bu üç renk bilgisinin
miktarı asla değişmez, her zaman üç adet renk kodu vardır.

rgb(0, 0, 0)
rgb(255, 255, 255)

*/

/* Tuple'ların özellikleri:

- Tuple tanımlamak için köşeli parantezler kullanılır.
- Her bir item'ın türü ayrı ayrı belirlenir.
- Array'lerde her item aynı türde olmak zorundadır ama tuple'larda
  her item farklı türde olabilir.
- Tuple'da her itemın sırasının amacı bellidir ve bu sıralamaya
  bağlı kalınarak değer atama/okuma işlemi yapılır.
*/

/* Örnek: Renk kodlarını tutan bir tuple oluşturun ve kullanın. */

type RgbColorType_1 = [number, number, number];
let darkGreen_1: RgbColorType_1 = [100, 200, 5];

/* Kullanırken aynı array gibi kullanırız. Normal arrayden pek
farkı yoktur ama item miktarı sabit olduğundan ve hangi itemin
hangi değere karşılık geldiğini bildiğimizden dolayı doğrudan
index no belirterek ihtiyaç duyduğumuz değere ulaşabiliriz. */
console.log("dark green color codes blue: ", darkGreen_1[2]);
console.log("dark green color codes green: ", darkGreen_1[1]);

// dizilerin boyutu sınırsızdır ama tuple'ların boyutu sabittir.
// Yani aşağıdaki diziye istediğimiz kadar eleman atayabiliriz.
let exampleArray_1: number[] = [1, 2, 3, 4, 5, 6];

/* Normalde obje tanımlamak mümkünken tuple tanımlamaya gerek yoktur.
Fakat uzunluğu asla değişmeyecek olan data türleri için tuple kullanmak
daha mantıklıdır. Obje tanımlamanın asıl amacı geliştirilebilir olması
gereken dataları tutmak içindir. Şuanki RGB örneğimizde bu üç adet
renk kodunun boyutu asla değişmeyecek. Bu durumda object türü
tanımlamak yerine tuple tanımlamak mantıksal olarak daha doğrudur. */

// type RgbColorObjectType = {
//   r: number;
//   g: number;
//   b: number;
// };

/* Not: Hangi parantez hangi type türünü tanımlamak için kullanılır:

- Süslü parantez: obje tanımlamak için kullanılır.
- Köşeli parantez: tuple tanımlamak için kullanılır.
- Normal parantez: fonksiyon türü tanımlamak için kullanılır.
*/

////////////////////////////////////////////////////
/* Örnek: IP adreslerini tutan bir tuple yazıp kullanın. */
type IpAddressType_1 = [number, number, number, number];
let farhadComputerIpAddress: IpAddressType_1 = [213, 56, 194, 239];

farhadComputerIpAddress = [183, 205, 94, 149];

console.log(
  "Farhad IP address:",
  farhadComputerIpAddress[0] +
    "." +
    farhadComputerIpAddress[1] +
    "." +
    farhadComputerIpAddress[2] +
    "." +
    farhadComputerIpAddress[3],
  farhadComputerIpAddress.join(".")
);

/* Önemli not: Tuple'lar aslında dizidir. Bu sebepten dolayı tüm dizi fonksiyonları
tuple'lar üzerinde kullanılabilir. map(), forEach(), join(), find(), findIndex(),
reduce(), push() vs gibi tüm dizi fonksiyonları tuple'lar için kullanılabilir.
Ama tuple'ların kullanım amacı dizilerin kullanım amacından biraz farklıdır.

Örneğin aşağıdaki satır hatasız bir şekilde çalışır yani farhad'ın
ip adresini tuttuğumuz değişkene yeni bir item ekleyebiliriz. Ama
bunun bir mantığı yoktur. Sintaks olarak hata vermez ama mantıksal
olarak yanlıştır.

farhadComputerIpAddress.push(100000);

Eğer uzunluğu (yada miktarı) artıp-azalacak bir data tutacaksanız
o zaman array kullanın. Aksi halde tuple kullanmanız daha doğrudur.
*/

/* Örnek: Sitemizi ziyaret eden kullanıcıların tarayıcı bilgilerini
tuple kullanarak tutalım. Bu bilgiler
- işletim sistemi adı
- işletim sisteminin versiyon numarası
- tarayıcı render ismi
- tarayıcı ismi
- tarayıcı versiyon numaraları
olsun. */

// navigator.userAgent
// 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'

type OperatingSystemType_1 =
  | "linux"
  | "macos"
  | "windows"
  | "android"
  | "ios"
  | "others";

type BrowserNameType_1 =
  | "Google Chrome"
  | "Chromium"
  | "Opera"
  | "Edge"
  | "Safari"
  | "Brave"
  | "Yandex Browser"
  | "Others";

// Dördüncü itemin sonuna soru işareti ekleyerek opsiyonel hale getirdik.
type SemanticVersion_1 = [number, number, number, number?];

type UserAgentParsedType_1 = [
  OperatingSystemType_1,
  SemanticVersion_1,
  string,
  BrowserNameType_1,
  SemanticVersion_1
];

let currentVisitorBrowser: UserAgentParsedType_1 = [
  "macos",
  [10, 15, 7],
  "Gecko",
  "Google Chrome",
  [114, 0, 0, 0],
];
