window.addEventListener('load',() => {

    let input = document.querySelector('.input');
    let length = document.querySelector('.char-length');
    input.addEventListener('input',event => {

        let string = event.target.value;
        length.innerText ='The above text has '+string.length+' charecters';

    })
})