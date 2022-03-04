window.addEventListener('load', () => {

    let inputUrl = document.querySelector('.input-url');
    let encoder = document.querySelector('.encoder');
    let decoder = document.querySelector('.decoder');
    let result = document.querySelector('.result');
    let output = '';

    encoder.addEventListener('click', event => {
        let url = inputUrl.value;
        result.value=encodeURIComponent(url);
    })

    decoder.addEventListener('click',event => {
        let url = inputUrl.value;
        result.value = decodeURIComponent(url);
    })
    
})