//Potrebno je implementirati sistem upravljanja radnicima u nekoj firmi. Svi radnici imaju zajednička svojstva (ime, prezime, godine),
//ali postoje i neke razlike među radnicima,
//npr. menadžer i običan radnik imaju različite nadležnosti i plate.
//Potrebno je kreirati klase Radnik i Menadžer koje nasleđuju zajednička svojstva iz klase Osoba,
//a zatim dodati i neke dodatne metode i svojstva.
//Osim toga, sve privatne varijable treba da budu enkapsulirane.

class Person {
    #name
    #lstname
    #age
    constructor(name,lstname, age){
        this.#name = name
        this.#lstname = lstname
        this.#age = age
    }
    getName(){
        return this.#name
    }
    getLstname(){
        return this.#lstname
    }
    getAge(){
        return this.#age
    }
}

class Manager extends Person {
    constructor(name,lstname,age,position, salary){
        super(name,lstname,age)
        this.position = position
        this.salary = salary
    }
    business(){
        return `Manager ${this.getName()} ${this.getLstname()} is major in employment and has ${this.getAge()} age`
    }
    workingField(){
        return `She is the leader ${this.position} in her company and she is giving ${this.salary} of salary  to other workers`
    }
}

let manager = new Manager("Nerma", "Hot", "18", "leader", 2353)
console.log(manager.business())
console.log(manager.workingField())


class Worker extends Person{
    constructor(name,lstname,age,position,salary){
        super(name,lstname,age)
        this.position = position
        this.salary = salary
    }
}