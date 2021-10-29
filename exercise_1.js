// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.
const someObj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
}
const checkObj = (obj) => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
    console.log(key + ": " + obj[key]);
    }
  }
}
checkObj(someObj);