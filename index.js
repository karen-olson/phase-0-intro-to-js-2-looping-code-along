// Code your solutions in this file

/*
const gifts = ['teddy bear', 'drone', 'doll'];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}

wrapGifts(gifts);
*/

const cardRecipients = ['Sam', 'Jane', 'Simon'];

function writeCards(cardRecipients, event) {
    const cardMessages = [];
    debugger;
    
    for (let i = 0; i < cardRecipients.length; i++) {
        cardMessages[i] = `Thank you, ${cardRecipients[i]}, for the wonderful ${event} gift!`;
        debugger;
    }
    return cardMessages;
}

console.log(writeCards(cardRecipients, 'birthday'));


function countDown(number) {
    while (number >= 0) {
        console.log(number);
        debugger;
        number--;
        debugger;
    }
}

countDown(34);