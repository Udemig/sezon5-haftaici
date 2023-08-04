/* Öncelikle değişkenlerin türlerinin nasıl tanımlandığını görelim.

- Primitive types:
    -> string: sıralı karakterler
    -> number: virgüllü veya virgülsüz sayısal ifadeler
    -> bigint: çok büyük sayılar (örneğin milyar kere milyar)
    -> boolean: mantıksal ifade (true veya false)
    -> undefined: bu hem değer hem de tür olarak kullanılabilen bir türdür. bu değişken
                  tanımsızmış gibi davranır.
    -> symbol: 
    -> null: bu da hem değer hem türdür. bir değişkenin tanımlı olduğunu ama içerisinde
             herhangi bir değer mevcut olmadığını belirtir.
    -> object: süslü parantezle ifade edilen değerler için kullanılır.

*/

let firstname_1: string = "ismail";
let age_1: number = 24;
let attended_1: boolean = true;

console.log("İlk değerler: ", firstname_1, age_1, attended_1);

firstname_1 = "alpay";
age_1 = 19;
attended_1 = false;

console.log("İkinci değerler: ", firstname_1, age_1, attended_1);

let student_1: object;

student_1 = {};
console.log(">>> birinci atama student_1:", student_1);

student_1 = {
  id: 1,
  firstname: "ramazan",
  lastname: "şen",
  birth_year: 2003,
  is_attended: true,
};
console.log(">>> ikinci atama student_1:", student_1);

/* bigint türünü pek sık kullanmayız ama büyük sayılarla çalıştığımızda
kullanmamız gerekir. number türüyle benzerlik gösterir fakat atama yaparken
iki şekilde atama yapabiliriz. Birincisi `BigInt` yöntemi, ikincisi de
sayısal ifadenin sonun `n` harfi ekleme yöntemi. */
let star_count_in_universe_1: bigint = BigInt(1000000000000000);
star_count_in_universe_1 = 11111111111111111111111n;

let brain_cell_count_1: bigint = BigInt(1000000000000000);
brain_cell_count_1 = 99999999999999n;
