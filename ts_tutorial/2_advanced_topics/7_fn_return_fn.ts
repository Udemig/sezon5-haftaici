/* Fonksiyonlara parametre olarak fonksiyon gönderebildiğimiz gibi
fonksiyonlardan fonksiyon da dönebilir. Bu durumda bu dönen değeri
yani fonksiyonu bir değişkene aktardığımızda bu değişken invoke
edilebilen bir fonksiyona sahip olmuş olur. Böylece bu fonksiyonu
çağırabiliriz.

Örneğin useDispatch() fonksiyonundan bir fonksiyon döner. Bu fonksiyon
redux'ın içerisinden gelir ve redux'ın state'ini güncellemek işini
yapar.

// useDispatch'ten dönen fonksiyonu değişkene aktar
const dispatch = useDispatch()

// Sonra bu fonksiyonu invoke et.
dispatch({
    type: "foo",
    payload: "bar"
})

*/

type UseDispatchFnType_1 = () => (action: object) => void;

const useDispatch_1: UseDispatchFnType_1 = () => {
  console.log("useDispatch_1 invoke edildi.");

  return (action) => {
    console.log("Dönen fonksiyon invoke edildi, action:", action);
  };
};
console.log(">>>  useDispatch_1:", useDispatch_1);

const dispatch_1 = useDispatch_1();
console.log(">>>  dispatch_1:", dispatch_1);

dispatch_1({
  type: "foo",
  payload: "bar",
});

console.log("----------------------------");

////////////////////////////////////////////

/* Örnek: useState hookunun typeını ve basit implementasyonunu yapalım.

const [counter, setCounter] = useState()

const counterState = useState(0)
const counter = counterState[0]
const setCounter = counterState[1]
setCounter(counter + 1)

const [token, setToken] = useState(() => {
    return "foo"
})

setToken("bar")
setToken()

setToken((previousState) => {
    return previousState + 1
})

*/

type InitialStateParamType = any | (() => any | undefined);
type SetterFnType = (newState?: any | ((previousState: any) => any)) => void;

type UseStateFnType_1 = (
  initialState?: InitialStateParamType
) => [any, SetterFnType];

// Basit bir useState fonksiyon implementasyonu:
const useState_1: UseStateFnType_1 = (
  initialState?: any | (() => any | undefined)
) => {
  console.log("useState_1 invoke edildi, initialState: ", initialState);

  return [
    initialState,
    (newState?: any | ((previousState: any) => any)) => {
      console.log("setter fonksiyon invoke edildi, newState:", newState);

      let calculatedNewState;

      if (typeof newState === "function") {
        calculatedNewState = newState(initialState);
      } else {
        calculatedNewState = newState;
      }

      console.log("calculatedNewState: ", calculatedNewState);
    },
  ];
};

const counterState = useState_1(0);
console.log(">>>  counterState:", counterState);

const [counter_1, setCounter_1] = useState_1(0);
console.log(">>>  counter_1:", counter_1);
console.log(">>>  setCounter_1:", setCounter_1);

setCounter_1(123);
setCounter_1((previousState: any) => {
  console.log(
    "setCounter'a gönderilen fonksiyon invoke edildi, previousState:",
    previousState
  );

  return 999;
});
