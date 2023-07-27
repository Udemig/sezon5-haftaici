export default function ImgFallback(props) {
  // TODO props.style undefined olursa hata verebilir bunu kontrol et.

  return (
    <img
      src={props.src}
      style={props.style}
      className={props.className}
      onError={(e) => {
        /* Bazen `props.src` içerisindeki url'den bazı sebeplerden dolayı
        resim gelmez (Network error, sitenin kapalı olması, wifi'nin kopması vs).
        Bu durumda `onError` event'ı trigger olur. Bu event çalıştığında
        biz kullanıcıya hiç resim göstermemektense kendi belirlediğimiz standart
        bir resmi gösterebiliriz. */

        console.log("Şu resim yüklenemedi: ", props.src);
        // Şu resim yüklenemedi:  https://lorempixel.com/400/200/

        /* Burayı set ederken doğru bir resim adresi set ettiğimizden emin
        olmalıyız. Aksi halde resim bulunamazsa onError tekrar trigger olur
        ve sonsuz döngüye gireriz. */
        e.target.src = "/assets/images/no-image.png";
      }}
    />
  );
}
