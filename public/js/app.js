console.log(' Client side javascript file is loaded!');

const weatherFrom = document.querySelector('form');
const Search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

messageOne.textContent = ''
messageTwo.textContent = ''

weatherFrom.addEventListener('submit', (e) => {

    e.preventDefault();
    const location = Search.value;

    messageOne.textContent = 'Loading Data...';
    messageTwo.textContent = '';

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                // console.log(data.error);
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.address
                messageTwo.textContent =  data.forecast
                // messageTwo.textContent = JSON.stringify(data.forecast)
                // console.log(data);
            }
        })
    })
})