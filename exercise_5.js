class Appliances{
  constructor(name) {
  this.name = name;
  this.type = 'electric';
  this.convenience = 'portable';
  }
  turnOn(name) {
  console.log(`Прибор ${name} включен в розетку`);
  }
  switchOff(name) {
    console.log(`Прибор ${name} выключен из розетки`);
  }
}
Appliances.prototype.getCapacity = function(name, brand, capacity) {
  console.log(`${name} ${brand} потребляет мощность - ${capacity} Ватт`);
}
class Laptops extends Appliances {
  constructor(name, brand, color, price, type, convenience) {
    super(name, type, convenience);
    this.brand = brand;
    this.color = color;
    this.price = price;
  }
  laptopsGreet() {
    console.log(`Hello!`);
  }
}
class Lamps extends Appliances {
  constructor(name, brand, height, price, type, convenience) {
    super(name, type, convenience);
    this.brand = brand;
    this.height = height;
    this.price = price;
  }
  lampsSound() {
    console.log(`Click`);
  }
}
const laptop = new Laptops(`Ноутбук`, `Lenovo`, `white`, `1000$`);
const lamp = new Lamps(`Лампа`, `IKEA`, `150cm`, `40$`);
laptop.turnOn(`Ноутбук`);
laptop.laptopsGreet();
laptop.getCapacity(`Ноутбук`, `Lenovo`, 100);
laptop.switchOff(`Ноутбук`);
lamp.turnOn(`Лампа`);
lamp.lampsSound();
lamp.getCapacity(`Лампа`, `IKEA`, 60);
lamp.switchOff(`Лампа`);