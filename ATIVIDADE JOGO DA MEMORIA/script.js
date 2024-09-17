document.addEventListener('DOMContentLoaded', ()=>{
    const imageNames = [
        'icon1', 'icon2', 'icon3', 'icon4', 'icon5', 'icon6'
    ];

let cardValues = [...imageNames, ...imageNames]; //duplicando as img
cardValues = cardValues.sort(()=> Math.random() - 0.5); //puxo um callback pra variavel cardVlçues receber o embaralhamento

const board = document.getElementById('board');
let flippedCards = [];
let matchedCards = [];
let isProcessing = false;

function createCard(value){
    const card = document.createElement('div'); //Cria uma div no doc
    card.classList.add('card');
    card.dataset.value = value;

    const img = document.createElement('img');
    img.src = `img/${value}.png`; // Caminho das imagens
    img.alt = value;

    card.appendChild(img);
    card.addEventListener('click', flipCard);

    return card;
}

function setup(){
    cardValues.forEach(value => {
        const card = createCard(value);
        board.appendChild(card);
    });
}

function flipCard(){
    if(isProcessing || this.classList.contains ('flipped')) return;
    this.classList.add('flipped');
    flippedCards.push(this);

    if (flippedCards.length ===2){
        isProcessing=true;
        setTimeout(checkMath, 1000);
    }
}

function checkMath(){
    const[card1, card2] = flippedCards;
    const value1 = card1.dataset.value;
    const value2 = card2.dataset.value;

    if(value1 === value2){
        matchedCards.push(card1, card2);
        if(matchedCards.length === cardValues.length){
            setTimeout(()=> alert ('Você venceu!'), 500);
            document.getElementById('restart').style.display = 'block';
        }
    } else {
        card1.classList.remove('flipped')
        card2.classList.remove('flipped')
    }

    flippedCards=[];
    isProcessing = false;
}

document.getElementById('restart').addEventListener('click', ()=>{
    board.innerHTML = '';
    matchedCards = [];
    flippedCards = [];
    isProcessing = false;
    cardValues=[...imageNames, ...imageNames];
    cardValues = cardValues.sort(()=> Math.random() -0.5);
    setup();
    document.getElementById('restart').style.display = 'none'
});

setup();

});
