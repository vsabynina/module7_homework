// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.
const someObj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
}
const checkProperty = (str, object) => {
  if(object.hasOwnProperty(str)) {
    console.log(true);
  } else {
    console.log(false);
  }
}
checkProperty("a", someObj);