class User {
  constructor(_firstName, _lastName, _age, _location) {
    this._firstName = _firstName
    this._lastName = _lastName
    this._age = _age
    this._location = _location
  }
  compareAge(otherUser) {
    if (this._age === otherUser._age) {
      return `${this._firstName} e ${otherUser._firstName} hanno la stessa età`
    } else {
      return `${this._firstName} e ${otherUser._firstName} non hanno la stessa età`
    }
  }
}

const user1 = new User('Tommaso', 'Panciroli', '21', 'Reggio Emilia')
const user2 = new User('Giulia', 'Gallo', '27', 'Padova')
console.log(user1)
console.log(user2)

console.log(user1.compareAge(user2))

const user3 = new User('Luca', 'Capasso', 22, 'Napoli')
const user4 = new User('Massimo', 'Pizzicannella', 22, 'Roma')

console.log(user3)
console.log(user4)
console.log(user3.compareAge(user4))
