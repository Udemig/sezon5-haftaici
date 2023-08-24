/* Örnek: useEffect() hook'unun typeını ve basit implementasyonunu yazınız. 

useEffect(() => {
   api.post("api/auth/login", {user, pass})
   .then((response) => {

   }).catch((err) => {

   })
}, [])
*/

type UseEffectFnType_1 = (callback: () => void, dependencies: any[]) => void;
