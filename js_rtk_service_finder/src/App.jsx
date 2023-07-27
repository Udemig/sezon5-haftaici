import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";

import AboutUsPage from "./pages/about-us/about-us-page";
import ContactUsPage from "./pages/about-us/contact-us-page";
import PrivacyPolicyPage from "./pages/about-us/privacy-policy-page";
import VissionMissionPage from "./pages/about-us/vision-mission-page";

import LoginPage from "./pages/auth/login-page";
import RegisterPage from "./pages/auth/register-page";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useApi from "./hooks/useApi";
import CategoryDetailPage from "./pages/category-detail-page";
import MainPage from "./pages/main-page";
import UserDashboardPage from "./pages/user/user-dashboard-page";
import { setUser } from "./redux/authSlice";
import { setCategories } from "./redux/categorySlice";

function App() {
  const categoryState = useSelector((state) => state.categoryState);
  const authState = useSelector((state) => state.authState);

  console.warn("🔥 | categoryState:", categoryState);
  const api = useApi();
  const dispatch = useDispatch();

  useEffect(() => {
    // immediate call function
    (async () => {
      // burası asenkron bölge

      console.warn(
        "🔥 | useEffect içerisindeki immediate call function çalıştı."
      );

      /* `response` değişkeni AxiosResponse türünden bir objedir.
      Dolayısıyla apiden gelen json datasının kendisi değildir. */
      const response = await api.get("public/categories/listMainCategories");
      console.warn("🔥 | api response:", response);

      /* Eski redux'ta action objelerini aşağıdaki örnekteki gibi oluşturup
      dispatch yapıyorduk. Fakat bu yöntem demode ve artık kullanılmayan
      bir yöntemdir. Onun yerine redux-toolkit'le birlikte gelen action
      function'larını çağırmalıyız. */
      // dispatch({
      //   type: "SET_CATEGORIES",
      //   payload: response.data
      // })

      dispatch(setCategories(response.data.data));

      /* Eğer token varsa ama user yoksa API'den user bilgisini al ve
      dispatch yap. */
      console.log("App authState", authState);

      if (authState.token && !authState.user) {
        const userResponse = await api.get("user/appData");
        console.log("🔥 | App.jsx > userResponse:", userResponse);
        dispatch(setUser(userResponse.data.data.user));
      }
    })();
  }, []);

  /*
Route'lar şu url'lere göre oluşturulmalı.

/
/category/:slug
/services/:slug

/auth/login
/auth/register

/user

/about-us
/about-us/vision-mission
/about-us/contact-us
/about-us/privacy-policy

*/

  return (
    <div className="container py-3">
      <Header />
      <Routes>
        <Route index element={<MainPage />} />

        <Route path="/auth">
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>

        <Route path="/user">
          <Route index element={<UserDashboardPage />} />
        </Route>

        <Route path="/category/:slug" element={<CategoryDetailPage />} />

        <Route path="/about-us">
          <Route index element={<AboutUsPage />} />
          <Route path="vision-mission" element={<VissionMissionPage />} />
          <Route path="contact-us" element={<ContactUsPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
