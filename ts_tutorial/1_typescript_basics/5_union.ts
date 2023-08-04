/* union kelime anlamı olarak "birleştirmek" anlamına gelir. Typescript içerisindeki
yaptığı görev ise birden fazla typeı birleştirip herhangi birisine karşılık
olan değerin atanabilmesini sağlamaktır. */

/* Örneğin bozuk para atma oyunu oynadığımızı düşünelim. Paranın tüm hareketlerini
farklı türlerde belirtebiliriz. Örneğin para henüz atılmadığında undefined,
ture geldiğinde true, yazı geldiğinde false, dik düşerse string, para havadayken
kuş kaparsa null olduğunu düşünebiliriz. Bir değişkenin tüm durumları
karşılayabilmesi için birden fazla türe ihtiyaç duyarız. */
let money_status_1: boolean | string | undefined | null = undefined;

console.log(
  "Henüz parayı atmamışken durumu:",
  money_status_1,
  typeof money_status_1
);

money_status_1 = true;
console.log("Farzedelimki tura geldi:", money_status_1, typeof money_status_1);

money_status_1 = false;
console.log("Farzedelimki yazı geldi:", money_status_1, typeof money_status_1);

money_status_1 = "para dik geldi";
console.log(
  "Farzedelimki para dik düştü:",
  money_status_1,
  typeof money_status_1
);

money_status_1 = null;
console.log(
  "Parayı attık ama kuş kaptı, o zaman durumu:",
  money_status_1,
  typeof money_status_1
);

/* Örneğin öğrenci isimlerini tutan bir değişkenimiz olsun. Fakat bu değişkene
bazen string bazen de obje gelmesi sözkonusu olduğunu düşünelim. Bu durumda bu
değişkenin türü olarak string ve obje olacak şekilde union type tanımlamamız gerekir. */

type StudentType_3 = {
  id: number;
  firstname: string;
  lastname: string;
};

let student_4: StudentType_3 | string;

// örneğin api'den bu şekilde değer geldiğini ve bu değeri atadığımızı düşünelim.
student_4 = {
  id: 34,
  firstname: "test",
  lastname: "test",
};
console.log("ilk atama student_4:", student_4, typeof student_4);

// örneğin input'tan öğrenci ismi girildiğini düşünelim.
student_4 = "Mehmet Yağız";
console.log("ikinci atama student_4:", student_4, typeof student_4);

function printHello_1(student: StudentType_3 | string) {
  /* Yukarıdaki örnekte iki farklı türde değer ataması yaptık. Bu değişkeni kullanırken
    öncelikle bu değişkenin türünü tespit etmemiz gerekiyor. Ardından farklı türler için
    farklı şekilde bu değişkeni kullanabiliriz. */

  if (typeof student === "string") {
    console.log(student);
  } else if (typeof student === "object") {
    console.log(student.firstname + " " + student.lastname);
  }
}

printHello_1(student_4);

/* Şimdiki örneğimizde iki adet custom type üzerinde çalışalım. Örneğin birkaç tane
araç türü tanımlayalım ve bunu union type şeklinde kullanalım. */

type CarVehicleType = {
  doorCount: number;

  // union type'ları değerler için de kullanabiliriz
  motorType: "diesel" | "gasoline" | "lpg" | "electric";
  seatCount: number;
  brand: string;
};

type MotorcycleVehicleType = {
  motorType: "gasoline" | "electric";
  isSingle: boolean;
  brand: string;
};

let ceyhunsVehicle: CarVehicleType | MotorcycleVehicleType;

ceyhunsVehicle = {
  brand: "bmw",
  motorType: "gasoline",
  isSingle: true,
  doorCount: 5,
};

console.log(">>> birinci atama ceyhunsVehicle:", ceyhunsVehicle);
detectVehicle(ceyhunsVehicle);

ceyhunsVehicle = {
  brand: "bmw",
  motorType: "gasoline",
  isSingle: false,
};

console.log(">>> ikinci atama ceyhunsVehicle:", ceyhunsVehicle);
detectVehicle(ceyhunsVehicle);

function detectVehicle(vehicle: CarVehicleType | MotorcycleVehicleType) {
  if (typeof vehicle["doorCount"] !== "undefined") {
    console.log("araba türü girildi, koltuk sayısı: ", vehicle);
  } else if (typeof vehicle["isSingle"] !== "undefined") {
    console.log("motorsiklet türü girildi, marka: ", vehicle.brand);
  }
}
