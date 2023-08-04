/* Javascriptteyken dizilerin elemanlarına istediğimiz türde değerler
ekleyebilirdik. Fakat bu dizinin stabilitesini bozan bir problemdir.
Çünkü biz diziyi kullanırken (map(), forEach(), filter() vs) gelen
elemanların hepsinin AYNI TÜRDE olduğunu farzederek kullanırız.
Javascriptteki bu belirsizlik typescriptte giderilmiştir. Çünkü
typescriptte dizi elemanlarının türleri de belirtilir. */

// örneğin aşağıdaki dizi bir string dizisidir ve tüm elemanlarının
// string olduğundan eminiz.
const student_names_1: string[] = [];
student_names_1.push("test");
student_names_1.push("alpay");
student_names_1.push("ceyhun");
student_names_1.push("fardah");
console.log(">>>  student_names_1:", student_names_1);

student_names_1.forEach((item) => {
  console.log("item value: ", item);
  console.log("item type: ", typeof item);
});

const salaries_1: number[] = [1000.234, 1500.436, 3000.2, 2250.8798];
salaries_1.push(1800.57632);
salaries_1.push(2600.392);

salaries_1.map((salary) => {
  console.log("Salary: ", salary.toFixed(2));
});

//////////////////////////////////////////////

/* Objelerin dizilerini oluştururken `object` ifadesi kullanılabilir.
Fakat bu ifade objenin içeriğini belirtmediği için tam olarak istediğimiz
kesinliği bize sağlamaz. Bu problemi çözmek için bir sonraki örneğe bakınız. */
const students_1: object[] = [];

students_1.push({});
students_1.push({
  id: 1,
});
students_1.push({
  firstname: "ismail",
});
students_1.push({
  firstname: "ceyhun",
  lastname: "bingör",
  is_attended: true,
});

const students_2: {
  id: number;
  firstname: string;
  lastname: string;
}[] = [];

students_2.push({
  id: 1,
  firstname: "test",
  lastname: "example",
});

students_2.push({
  id: 2,
  firstname: "foo",
  lastname: "bar",
});

students_2.push({
  id: 3,
  firstname: "pelin",
  lastname: "karaçocuk",
});

console.log(">>>  students_2:", students_2);

students_2.forEach((item) => {
  console.log(">>>  item:", item);
});
