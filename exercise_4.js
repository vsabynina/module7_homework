function Appliances(name) {
  this.name = name;
  this.type = 'electric';
  this.convenience = 'portable';
  this.turnOn = function() {
    console.log(`Прибор ${name} включен в розетку`);
  }
  this.switchOff = function() {
    console.log(`Прибор ${name} выключен из розетки`);
  }
}
Appliances.prototype.getCapacity = function(name, brand, capacity) {
  console.log(`${name} ${brand} потребляет мощность - ${capacity} Ватт`);
}
function Laptops(brand, color, price) {
  this.brand = brand;
  this.color = color;
  this.price = price;
  this.greet = function () {
    console.log(`Hello!`);
  }
}
function Lamps(brand, height, price) {
  this.brand = brand;
  this.height = height;
  this.price = price;
  this.sound = function () {
    console.log(`Click`);
  }
}
Laptops.prototype = new Appliances(`Ноутбук`);
Lamps.prototype = new Appliances(`Лампа`);
const laptop = new Laptops(`Lenovo`, `white`, `1000$`);
const lamp = new Lamps(`IKEA`, `150cm`, `40$`);
laptop.turnOn();
laptop.greet();
laptop.getCapacity(`Ноутбук`, `Lenovo`, `100`);
laptop.switchOff();
lamp.turnOn();
lamp.sound();
lamp.getCapacity(`Лампа`, `IKEA`, `60`);
lamp.switchOff();