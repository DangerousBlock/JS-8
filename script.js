console.log("Task 1");
console.log("'For'");

const friends = ['Mango','Poly','Kiwi','Ajax'];
let string = '';

for(let i = 0; i < friends.length;i++){
    string += friends[i];
    if(i < friends.length - 1){
        string += ',';
    }
}

console.log(string);


console.log("'Join'");

const friends2 = ['Mango','Poly','Kiwi','Ajax'];
console.log(friends2.join(','));


console.log("Task 2");

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
];

console.log(cards);

console.log("Task 3");

const cardToRemove = 'Карточка-3';
cards.splice(cards.indexOf(cardToRemove),1);
console.log(cards);

console.log("Task 4");

const cardToInsert = 'Карточка-6';
cards.push(cardToInsert);
console.log(cards);

console.log("Task 5");

const cardToUpdate = 'Карточка-4';
cards.splice(cards.indexOf(cardToUpdate), 1, 'Updated');
console.log(cards);