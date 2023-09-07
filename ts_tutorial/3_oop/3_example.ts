/* Soru: Bir telefon mağazasında yazılımcı olarak işe girdiğimizi
düşünelim. Bu firmada antika telefonlar dahil güncel telefonlar ve
eski telefonlar hem sıfır hem ikinci el olarak satıldığını düşünelim.
Patron geldi ve bize bir task verdi. Dedi ki tüm bu telefonların
özelliklerini kullanıcıya göstereceğiz. Aynı zamanda ilan verilirken
bu özelliklerin seçilmesi işlemlerini de yapılmasını istedi. Örnek tasarım
olarak da sahibindendeki ilan sayfalarını gösterdi. Sonra çayını içti ve
kolay gelsin dedi ve gitti. */

class AntiquePhone_1 {
  public key_type: "rotation" | "button";
  public color: [number, number, number];
  public manufacture_country: string;
  public manufacture_date: Date;
  public brand: string;
  public price: number;
}

class CellularPhone_1 extends AntiquePhone_1 {
  public readonly key_type: "button" = "button";
  public screen_resolution: [number, number];
  public screen_color_type: "monochrome" | "color";
  public antenna: boolean;
  public processor_name: string;
  public processor_speed: number;
}

class SmartPhone_1 extends CellularPhone_1 {
  // ÖDEV: Bu class'ın property'lerini yazın.
}

// bilgisayarın şuanki tarih ve saatini verir.
console.log(new Date());
