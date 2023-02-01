const pron = ['You', 'Your dog', 'Your cat', 'Your mom', 'Your dad', 'Your friend'];
const modal = ['might', 'may', 'could', 'should', 'would', 'will', 'must'];
const verbs = ['use', 'see', 'create', 'buy', 'deserve', 'cook', 'hate', 'love', 'eat', 'need', 'get', 'study', 'taste'];
const adj = ['sticky', 'cool', 'old', 'smelly', 'nice', 'edible', 'delicious', 'delicious', 'pretty', 'soft', 'short', 'gigantic'];
const noun = ['cars', 'bananas', 'hats', 'dresses', 'knifes', 'rockets', 'aliens', 'shoes', 'books', 'pens'];

function getRandomItem (arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}


function createPhrase () {
    let randomPron = getRandomItem(pron);
    let randomModal = getRandomItem(modal);
    let randomVerb = getRandomItem(verbs);
    let randomAdj = getRandomItem(adj);
    let randomNoun = getRandomItem(noun);
    return console.log (randomPron + ' ' + randomModal + ' ' + randomVerb + ' ' + randomAdj + ' ' + randomNoun);
}

createPhrase();