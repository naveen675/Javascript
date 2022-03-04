window.addEventListener('load',() => {

    let input = document.querySelector('.input');

    input.addEventListener('input',event => {

        let string = input.value;
        console.log(string);

    })
})