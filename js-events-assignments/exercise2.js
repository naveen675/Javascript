window.addEventListener('load',() => {

    let increment = document.querySelector('.plus');
    let decrement = document.querySelector('.minus');
    let text = document.querySelector('.text');
    let value=0;
    increment.addEventListener('click',event => {
        value++;
        text.value= value;
    })
    decrement.addEventListener('click',event => {
        value--;
        text.value = value;
    })
})