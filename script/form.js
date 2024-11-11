class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName
    this.ownerName = _ownerName
    this.species = _species
    this.breed = _breed
  }
  compareOwner(otherOwner) {
    if (this.ownerName === otherOwner.ownerName) {
      return `${this.petName} e ${otherOwner.petName} hanno lo stesso padrone`
    } else {
      return `${this.petName} e ${otherOwner.petName} hanno padroni diversi`
    }
  }
}

const pet1 = new Pet('Biscotto', 'Tommaso', 'Gatto', 'Soriano')
const pet2 = new Pet('Goku', 'Giulia', 'Gatto', 'Soriano')
const pet3 = new Pet('Ginger', 'Tommaso', 'Gatto', 'Soriano')
console.log(pet1)
console.log(pet2)
console.log(pet3)
console.log(pet1.compareOwner(pet2))
console.log(pet3.compareOwner(pet1))

const petNameInput = document.getElementById('petName')
const ownerNameInput = document.getElementById('ownerName')
const speciesInput = document.getElementById('species')
const breedInput = document.getElementById('breed')

const myForm = document.getElementById('pet-form')

myForm.addEventListener('submit', function (e) {
  e.preventDefault()
  const pet = new Pet(
    petNameInput.value,
    ownerNameInput.value,
    speciesInput.value,
    breedInput.value
  )
  console.log('PET DATA SUCCESSFULLY INSERT', pet)
})
