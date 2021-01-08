//Variables
const fraseContainer = document.querySelector('#frase');
const autorContainer = document.querySelector('#author');
const nuevaFraseBtn2 = document.querySelector('#nueva-frase');
const twitterBtn = document.querySelector('#twitter');
const urlBase = 'https://type.fit/api/quotes';
const lodaer = document.querySelector('#loader');
loader.hidden = false;

const mostrarImagen = document.querySelector('#mostrarImagen');


// Funciones
let getFrase = async() => {
    try {
        let data = await fetch(urlBase);
        data = await data.json();

        let randomIndex = randomNumber();

        let nameAuthor = data[randomIndex].author;
        let text = data[randomIndex].text;

        loader.hidden = true;
        showQuote(nameAuthor, text);

    } catch (error) {
        console.log('Whoops, No hay mas Frases ', err);
    }

}

function shareTwitt() {
    let name = autorContainer.textContent;
    let text = fraseContainer.textContent;
    let urlTwitter = `https://twitter.com/intent/tweet?text=${text} - ${name}`;
    window.open(urlTwitter, '_blank');
}


function showQuote(author, text) {
    autorContainer.textContent = author;
    fraseContainer.textContent = text;
}
let randomNumber = () => {
    let random = Math.floor(Math.random() * 100);
    return random;
}

getFrase();
showQuote();

// EventListeners
nuevaFraseBtn2.addEventListener('click', function() {
    getFrase();
    showQuote();
});

twitterBtn.addEventListener('click', shareTwitt);