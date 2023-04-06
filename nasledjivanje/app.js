class Person {
    constructor(name, lastname){
        this.name= name
        this.lastname = lastname
    }
}

class Student extends Person{
    constructor(name,lastname,university){
        super(name,lastname)
        this.university = university
    }
   // making method for exam registration
   examRegistration(){
    return`I am ${this.name} ${this.lastname}, from the university ${this.university}`
   }
}
// making function for consoling some content (in our case that will be our class)
const display = (content) => {
    console.log(content)
}


const student2 = new Student("Nerma", "Hot", "ETF")
// console.log(student2)
// display(student2.examRegistration())

//VEZBA
//Napraviti Klasu Vozilo koja ima boju, brzinu i model i tri metode
//pokreni(), zaustavi(), promeniBrzinu()
//Napraviti klasu Automobil koja nasledjuje klasu Vozilo
//Klasa Automobil ima jedan novi properti: marka
//Napraviti instancu za obe klase i pozvati metode i za Vozilo i Automobil

class Vehicle {
    constructor(color, speed, model){
        this.color = color
        this.speed = speed
        this.model= model
    }
    start(){
        return `Vehicle ${this.model} of ${this.color} color has started`
    }
    stop(){
        return `Vehicle ${this.model}, stopped from ${this.speed} to 0`
    }
    changeSpeed(){
        return `Vehicle changed his speed from ${this.speed} to 100 `
    }
}

class Car extends Vehicle{
    constructor(color,speed,model,mark){
        super(color,speed,model)
        this.mark = mark
    }
    start(){
        return`car ${this.mark} started working`
    }
    stop(){
        return "car stopped"
    }
    changeSpeed(){
        return `car ${this.mark} changed speed from ${this.speed} to 100`
    }
}

const vehicle = new Vehicle("red", 80, "mercedes" )
// console.log(vehicle.start())
// console.log(vehicle.stop())
// console.log(vehicle.changeSpeed())

// const car = new Car("blue", 120, "model", "mark")


class Person2{
    constructor(name, age){
        //second example to write encapsulation
        let _name = name
        let _age = age

        this.getName= function(){
            return _name
        }
        
        this.getAge = function(){
            return age
        }
        
        this.setName = function(name){
            _name = name
        }

        this.setAge = function(age){
            _age = age
        }
    }
}

let person = new Person2("Nerma", 18)

// console.log(person.getName())
// console.log(person.getAge())

class Vehicle2{
    // #seats
    // #mark
    constructor(seats, mark){
        let _seats = seats
        let _mark = mark

        this.getMark= function(){
            return _mark
        }

        this.getSeats = function(){
            return _seats
        }

        this.setMark = function(mark){
            _mark = mark
        }

        this.setSeats = function(seats){
            _seats = seats
        }
    }
}

let bus = new Vehicle2(120, "lasta")
console.log(bus.getMark())
console.log(bus.getSeats())
