window.addEventListener('load',() => {

    let hexaValue = document.querySelector('.hexa');
    let button = document.querySelector('.button');

    hexaValue.addEventListener('input', event => {

        let val = event.target.value;
       button.style.background = val;

    })
})