//1

//a
const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
let string = "";
for (let i = 0; i < friends.length; i++) {
  string += friends[i];
  if (i < friends.length - 1) {
    string += ", ";
  }
  console.log(string)
}
//b

const result = friends.join(", ");
console.log(result);

//2
//a
const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];
console.log(cards);
//b
const cardToRemove = cards.splice(2, 1);
console.log(cards);
//c
const cardToAdd = cards.splice(2, 0, "Карточка-6");
console.log(cards);
//c
const cardToUpdate = cards.splice(2, 1, "Карточка-4");
console.log(cards);
