// Написать функцию, которая создает пустой объект, но без прототипа.
const createObject = (() => {
  const emptyObj = Object.create(null);
  console.log(emptyObj.pr);
})()