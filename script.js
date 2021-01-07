function PageTitle(title) {
    document.querySelector('title').textContent = title || 'Template';
}
PageTitle('Generador de Frases');

const nuevaFraseBtn = document.querySelector('#nueva-frase');
const loader = document.querySelector('#loader');
//Get Qoute from Api
async function getFrase() {
    // const proxy = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        let randomIndex = randomNumber();
        document.querySelector('#frase').textContent = data[randomIndex].text;
        document.querySelector('#author').textContent = data[randomIndex].author;
        console.log(data[0])
        loader.hidden = true;

    } catch (err) {
        getFrase();
        console.log('Whoops, No hay mas Frases ', err);
    }
}

//On Load
getFrase();

//Cambiando frase al hacer click en el boton
nuevaFraseBtn.addEventListener('click', getFrase)

function randomNumber() {
    let randomNumber = Math.floor(Math.random() * 100);
    return randomNumber
}