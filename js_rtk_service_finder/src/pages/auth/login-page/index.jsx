import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useApi from "../../../hooks/useApi";
import { setToken, setUser } from "../../../redux/authSlice";

export default function LoginPage() {
  const navigate = useNavigate();
  const api = useApi();
  const dispatch = useDispatch();

  /* Inputlardan bilgiyi almak için birkaç tane yöntem var. Bu yöntemlerden
  en basit olanı useState ve onChange birlikte kullanmaktır. Fakat bu yöntemde
  her onchange olayı trigger olduğunda component tekrar render olacağından
  dolayı büyük formlarda performans kaybı oluşur. Bunun yerine biraz daha
  performanslı ve güncel bir yöntem kullanacağız. */
  //const [email, setEmail] = useState("");

  console.log(">> Component render oldu.");

  useEffect(() => {
    (async () => {
      //
    })();
  }, []);

  async function onFormSubmit(e) {
    e.preventDefault();

    /* Formdan bilgiyi doğrudan alıp json haline çevirme yöntemini
    kullanacağız. Bu yöntem sayesinde her input için onChange eventlarını
    yazmaya gerek kalmayacak ve component tekrar render olmayacağı için
    performans kaybı da yaşanmaz.
    
    Bu yöntemde ilk adım tüm inputların `name` property'lerini set
    ediyoruz. Sonra `e` parametresinden (event) formun kendisine ulaşıp
    bu formu json'a çeviriyoruz.
    */

    /* FormData class'ı her tarayıcıda mevcuttur. Bu class bir form html
    elemanı alır (e.target bizim form html elemanımızdır). Bu işlem bize
    form içerisinde name property'si tanımlı olan inputların değerlerini
    Map class'ı olarak verir. */
    const data = new FormData(e.target);
    console.log("Map şekildeki form datası: ", data.entries());
    // Map şekildeki form datası:  FormData Iterator {}

    const exampleArr1 = ["ahmet", "mehmet", "ali", "veli"];
    const exampleArr2 = new Array();
    exampleArr2.push();
    exampleArr1.push();
    exampleArr1[1];

    /* `data.entries()` fonksiyonu bize tam olarak aşağıdaki
    gibi bir Map objesi verir. Sonra bu objeyi `Object.fromEntries()`
    fonksiyonuyla JSON'a çeviririz. */
    // const exampleMap = new Map();
    // exampleMap.set("email", "c20@user.com");
    // exampleMap.set("password", "123123");

    /* Map olarak gönderilen parametreyi JSON haline getirir. */
    const formJson = Object.fromEntries(data.entries());
    console.warn("🔥 | formJson:", formJson);
    // 🔥 | formJson: {email: 'c20@user.com', password: '123123'}

    const loginResult = await api.post("auth/login", formJson);
    console.warn("🔥 | loginResult:", loginResult);

    if (loginResult.data.status === "success") {
      dispatch(setToken(loginResult.data.data.token));
      dispatch(setUser(loginResult.data.data.userData));

      navigate("/user");
    } else {
      alert("Lütfen bilgilerinizi kontrol ediniz.");
    }
  }

  return (
    <>
      <Row className="justify-content-center">
        <Col sm="12" md="12" lg="6">
          <Form onSubmit={onFormSubmit}>
            <Form.Group className="mb-3" controlId="loginForm.email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={(e) => {
                  e.target.value;
                }}
                type="email"
                name="email"
                placeholder="name@example.com"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="loginForm.password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password here..."
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="loginForm.password">
              <Button type="submit" variant="primary" className="w-100 mt-3">
                <i className="fa-solid fa-right-to-bracket" />
                &nbsp; Login
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </>
  );
}
