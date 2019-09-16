let myPet = "dog"
let yourPet = "cat"
let two = 2
function myAnimal() {
  return myPet
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return yourPet
}

function add2(n) {
  return n + two

  // Feel free to move things around!
}