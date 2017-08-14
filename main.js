//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog(name, status, color, hungry, owner) {
  this.name = name
  this.status = status
  this.color = color
  this.hungry = hungry
  this.owner = owner
}

let sadie = new Dog("Sadie", "normal", "black", false, "Mason")

let moonshine = new Dog("Moonshine", "no loonger hungry", "orange", true)

let atticus = new Dog("Atticus", "mad", "brown", false)
// Instances of Dog
// Needed: sadie, moonshine, atticus

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human(name, cool, pet) {
  this.name = name
  this.cool = cool
  this.pet = function(Dog) {
    if ((Dog.name = this.pet)) {
      Dog.status = "happy"
    } else {
      Dog.status = "normal"
    }
  }
  this.feed = function(Dog) {
    if ((Dog.name = this.pet)) {
      Dog.hungry = false
    } else {
      Dog.hungry = true
    }
  }
}

let mason = new Human("Mason", false)

let julia = new Human("Julia", true)

// Instances of Human
// Needed: mason, julia
