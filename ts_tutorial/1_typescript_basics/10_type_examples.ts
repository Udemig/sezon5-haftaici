/* Birkaç tane örnek senaryo için typelar oluşturalım. */

// Senaryo 1: Öğrenci isimlerinin tutulduğu diziyi ayrı bir type olarak tanımlayıp kullanın.

type StudentNamesType = string[];
type StudentNameType = string;

type StudentType = {
  name: string;
};

const student_names_2: StudentNamesType = ["ceyhun", "farhad", "ismail"];
