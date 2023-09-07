/* Inheritence (Kalıtım):

Nesneler geliştikçe bir önceki nesildeki özellikler bir sonraki nesile aktarılır.
Örneğin ilk bilgisayar olan ENIAC isimli bilgisayar oda boyutlarındaydı ve çok
enerji harcıyordu. Ayrıca bir klavyesi yoktu ama programlayıcısı vardı ve ekranı
da yoktu. Sonraki nesil olan IBM tabanlı bilgisayarlar ise masa boyutlarındaydı ve 
tek renk ekranı vardı, önceki nesile göre biraz daha hızlı çalışıyordu ve klavyesi
sayesinde kullanılması daha kolaydı. Ondan sonra çıkan bilgisayarlar ise aynı
özelliklere sahip olmasına rağmen yeni özelliklere de sahipti.

İşte bu özelliklerin bir sonraki jenerasyona aktarılması meselesine inheritence
(yani kalıtım) denir. Bu olayı yazılım geliştirirken de kullanırız.

>> OOP Terimleri:
- Parent class: Extend edilen class (üstteki class)
- Child class: Extend eden class (alttaki class)
- 

*/

class EniacComputer_1 {
  public weight: number = 0;
  public dimension: [number, number, number] = [0, 0, 0];
  public energy_consumption: number = 0;
  public brand: string = "";
  public owner_fullname: string = "";
  public processor_speed: number = 0;

  public start() {
    console.log("EniacComputer_1 starting.");
  }

  public shutdown() {
    console.log("EniacComputer_1 shutting down.");
  }

  public execute(program: () => any) {
    // girilen programı çalıştırıyoruz.
    const result = program();

    // burası eniac bilgisayarın yazıcısı (printer) olduğunu düşünelim.
    console.log("Program result: ", result);
  }
}

class ApolloSpaceCraftComputer_1 extends EniacComputer_1 {}

class SpaceXRocketComputer_1 extends ApolloSpaceCraftComputer_1 {}

class IbmComputer_1 extends EniacComputer_1 {
  public keyboard_mounted: boolean = true;
  public keyboard_layout: "iso" | "butterfly" | "other" = "other";
  public monitor_color_type: "monochrome" | "color" = "monochrome";
  public monitor_resolution: [number, number] = [0, 0];
  public floppy_disk_type: 3.5 | 5.25 | null = null;
}

class ModernComputer_1 extends IbmComputer_1 {
  public fingerprint_reader_exist: boolean = true;
  public touchpad_exist: boolean = true;
  public bluetooth_version: string | null = null;
  public wifi_version: string | null = null;
}

const ceyhunun_eniac_bilgisayarı = new EniacComputer_1();
ceyhunun_eniac_bilgisayarı.brand = "eniac";
ceyhunun_eniac_bilgisayarı.weight = 1000;
ceyhunun_eniac_bilgisayarı.owner_fullname = "Ceyhun Bingör";
ceyhunun_eniac_bilgisayarı.processor_speed = 5000;
ceyhunun_eniac_bilgisayarı.energy_consumption = 10000;

ceyhunun_eniac_bilgisayarı.start();

ceyhunun_eniac_bilgisayarı.execute(() => {
  return 5 + 10;
});

ceyhunun_eniac_bilgisayarı.execute(() => {
  let total = 0;
  for (let i = 1; i <= 10; i++) {
    total += i;
  }
  return total;
});

ceyhunun_eniac_bilgisayarı.shutdown();

const mehmetin_ibm_bilgisayarı = new IbmComputer_1();
mehmetin_ibm_bilgisayarı.brand = "ibm";
mehmetin_ibm_bilgisayarı.weight = 25;
mehmetin_ibm_bilgisayarı.owner_fullname = "Mehmet Yağız";
mehmetin_ibm_bilgisayarı.processor_speed = 4_000_000;
mehmetin_ibm_bilgisayarı.energy_consumption = 2000;
mehmetin_ibm_bilgisayarı.floppy_disk_type = 3.5;
mehmetin_ibm_bilgisayarı.monitor_color_type = "monochrome";

// Ödev: Diğer class'lar için basit birkaç tane method yazıp kullanın.
