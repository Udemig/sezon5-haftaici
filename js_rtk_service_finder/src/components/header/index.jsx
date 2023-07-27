import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { removeToken } from "../../redux/authSlice";

/* Normalde sweetalert framework agnostiktir yani hiçbir frameworke bağlı
değildir. Bu sayede vanillajs içerisinde de kullanılabilir. Fakat Reactjs
gibi bir yapı içerisinde kullanılmak istenirse o zaman ek paketlere ihtiyaç
duyar. Burada `withReactContent()` fonksiyonu vasıtasıyla vanillajs halindeki
sweetalert fonksiyonlarına ulaşabiliyoruz. */
const MySwal = withReactContent(Swal);

export default function Header() {
  const navigate = useNavigate();

  const authState = useSelector((state) => state.authState);
  console.warn("🔥 | Header > authState:", authState);

  const dispatch = useDispatch();

  return (
    <>
      <header>
        <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
          <Link
            to="/"
            className="d-flex align-items-center link-body-emphasis text-decoration-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="32"
              className="me-2"
              viewBox="0 0 118 94"
              role="img"
            >
              <title>Bootstrap</title>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
                fill="currentColor"
              />
            </svg>
            <span className="fs-4">Service Finder</span>
          </Link>

          <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
            <Link
              to="/about-us"
              className="me-3 py-2 link-body-emphasis text-decoration-none"
            >
              About Us
            </Link>

            {authState.user ? (
              <>
                <Link
                  to="/user"
                  className="me-3 py-2 link-body-emphasis text-decoration-none"
                >
                  <strong>{authState.user.fullname}</strong>
                </Link>
                <a
                  href="#"
                  className="py-2 link-body-emphasis text-decoration-none"
                  onClick={(e) => {
                    /* Kullanıcı bu butona yanlışlıkla tıklamış olabilir. Bu durumda
                    kullanıcıyı istemediği halde logout yapmış oluruz. Bu problemi
                    çözmek için kullanıcıya "Çıkış yapmak istediğinizden emin misiniz?"
                    şeklinde bir soru sorup oraya evet dediğinde o zaman çıkış
                    yaptırmalıyız. Aksi halde hiçbirşey yapmamıza gerek yoktur. */

                    /* Bu soruyu sormanın iki yöntemi var. Birincisi confirm()
                    fonksiyonunu kullanmak (bu yöntem hiç tavsiye edilmez çünkü
                    yirmibirinci yüzyılda yaşıyoruz), ikinci yöntem ise sweetalert2
                    kütüphanesini kullanmaktır. */

                    /* Konfirmasyon penceresini bu şekilde gösteriyoruz. */
                    MySwal.fire({
                      title: <p>Çıkış yapmak istediğinize emin misiniz?</p>,
                      icon: "question",
                      showCancelButton: true,
                    }).then((result) => {
                      console.warn("🔥 | result:", result);

                      if (result.isConfirmed) {
                        dispatch(removeToken());
                        navigate("/");
                      }
                    });

                    /* Daha önceden formu submit yaptığımızda e.preventDefault()
                    fonksiyonunu en başta çağırıyorduk. Ama onClick() olayında
                    bunu en sonra çağırmamız gerekiyor. Çünkü bu fonksiyonun
                    altında kalan komutları tarayıcı çalıştırmaz. */
                    e.preventDefault();
                  }}
                >
                  Logout
                </a>
              </>
            ) : (
              <>
                <Link
                  to="/auth/login"
                  className="me-3 py-2 link-body-emphasis text-decoration-none"
                >
                  Login
                </Link>
                <Link
                  to="/auth/register"
                  className="me-3 py-2 link-body-emphasis text-decoration-none"
                >
                  Register
                </Link>
              </>
            )}
          </nav>
        </div>
      </header>
    </>
  );
}
