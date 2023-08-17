/* 
Şimdiye kadar hep primitive type'ları kullandık. Fakat typescriptte kendimiz de
yeni type'lar oluşturabiliriz. Yeni bir type tanımlamak için önce `type` keywordu
yazılır. Ardından anlamlı bir isim belirlenir ve bu isim pascal case yöntemi
kullanılarak yazılır. Ardından eşittir denir ve eşittirden sonraki kısım
bizim datamızı modellediğimiz yani type'ı yazdığımız kısımdır.
*/

// snake case
const example_variable_1 = 10;
// camel case
const exampleVariable1 = 10;

// type'larda pascal case kullanılır
type StudentType_1 = {
  firstname: string;
  lastname: string;
  birth_year: number;
};

const student_2: StudentType_1 = {
  firstname: "ahmet",
  lastname: "test",
  birth_year: 1994,
};

/* Önceden yaptığımız bir projenin apisinin cevabının type'ını yazarak
bir örnek yapalım. */
type CategoryResultType = {
  data: {
    id: number;
    // birden fazla type'lardan herhangi bir olması gerektiğinde pipe karakteriyle
    // bu typeları birleştirebiliriz. Bu yönteme "union" type tanımlama yöntemi
    // denir ve bu konuyu ilerleyen derslerde detaylı bir şekilde göreceğiz.
    // şimdilik sadece örnek olması amacıyla buraya yazıldı.
    parent_id: number | null;
    name: string;
    slug: string;
    description: string;
    image: string;
    status: string;
    created_at: string;
    updated_at: string;
  }[];
  draw: number;
  recordsTotal: number;
  recordsFiltered: number;
  status: string;
};

const category_1: CategoryResultType = {
  data: [
    {
      id: 1,
      name: "test",
      parent_id: null,
      slug: "test",
      image: "test",
      status: "active",
      created_at: "2023",
      updated_at: "2023",
      description: "test",
    },
  ],
  draw: 1,
  recordsFiltered: 10,
  recordsTotal: 10,
  status: "success",
};
console.log(">>> category_1 ilk değer ataması:", category_1);

category_1.data.push({
  id: 2,
  parent_id: 1,
  name: "örnek kategori",
  slug: "ornek-logo",
  image: "https://ornek/imaj",
  description: "test",
  status: "active",
  created_at: "2023",
  updated_at: "2023",
});

////////////////////////////////////////////
// ödev: Bu type'ı kullanarak iki adet değişken oluşturun ve bu değişkenlerin
// değerleri farklı olsun.
type ApiLoginResult_1 = {
  data: {
    token: string;
    userData: {
      id: number;
      role_id: number;
      role_key: string;
      lang_code: string;
      firstname: string;
      lastname: string;
      email: string;
      facebook_id: null | number;
      google_id: null | number;
      status: string;
      created_at: string;
      updated_at: string;
      fullname: string;
      profile: {
        id: 1;
        user_id: 1;
        avatar: null;
        email_verified_at: null;
        phone: null;
        phone_verified_at: null;
        birthday: null;
        gender: "prefer_not_to_say";
        address: null;
        company_description: null;
        lat: null | number;
        lng: null;
        zip: null;
        portfolio_images: null;
        intervention_distance: 30;
        email_notification: "per_day";
        sms_notification: "no";
        created_at: "2021-09-11 17:54:46";
        updated_at: "2021-09-11 17:54:46";
      };
    };
  };
  status: string;
};
