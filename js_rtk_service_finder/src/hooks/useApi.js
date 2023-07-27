import axios from "axios";

export default function useApi() {
    /* Biz orjinal axios objesini modifiye etmemeliyiz. Bu yüzden
    yeni bir axios objesi oluşturup onu modifiye edip kullanacağız. */
    const api = axios.create();

    api.defaults.baseURL = "https://api.adoptez1artisan.com"

    /* Axios standart davranış olarak sadece 2XX (200, 201 vs) http status kodlarını
    kabul eder. Bunların dışında gelen kodlarda ise error throw eder. Biz tüm status
    kodlarını kabul etmesini istiyoruz. Bu yüzden validateStatus isimli property'ye
    bu fonksiyonu set ediyoruz. */
    api.defaults.validateStatus = (status) => {
        return status >= 200 && status <= 599
    }

    api.defaults.headers.common = {
        /* Obje property'leri özel karakter içermiyorsa tırnaksız yazılabilir,
        özel karakter içeriyorsa mutlaka tırnak kullanılmalı. Örneğin aşağıda
        foo ve bar ifadelerinde özel karakter olmadığı için tırnaksız yazıldı
        ama `content-type` ifadesinde tire karakteri olduğundan dolayı tırnaklı
        yazıldı. */
        // foo: "foo",
        // bar: "bar",
        "content-type": "application/json; charset=UTF-8",
    };

    /* Eğer localStorage'da token varsa bu tokenu her requestte göndermemiz gerekiyor.
    Api dökümanına baktığımızda bu tokenı http headerları içerisine eklememiz gerekiyor. */
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
        /* Yine api dökümanına baktığımızda tokenımızı tam olarak şu şekilde
        set etmemiz lazım:

        Bearer [token bilgisi]

        Burada `Bearer` ifadesinden sonra bir adet boşluk olduğuna dikkat edelim.
        Eğer bu boşluk hiç olmazsa veya birden fazla olursa API hata verecektir. */
        api.defaults.headers.common["Authorization"] = "Bearer " + authToken

        /*
        Api isteğinde bulunduğumuzda request headerları tam olarak şu şekildedir:
        Burada bearer ifadesinin içeriğine dikkat edin.
        
        Accept-Encoding: gzip, deflate, br
        Accept-Language: en-US,en;q=0.9,tr;q=0.8
        Authorization: Bearer 8291481789c029304e85aec3d7d8cb5f
        Cache-Control: no-cache
        Origin: http://localhost:5173
        Pragma: no-cache
        Referer: http://localhost:5173/
        */
    }

    return api
}
