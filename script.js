const text = document.querySelector('.text')
const button = document.querySelectorAll('.button')
const equal = document.querySelector('#green')
const clear = document.querySelector('#red')


button.forEach((item) => {
    item.addEventListener('click', (e) => {
        var data = e.target.dataset.num;
        text.value += data;
    })
})

equal.addEventListener('click', () =>{
    if(text.value === ""){
        text.value = " Votre opération n'est pas correct "
    }else{
        var answer = eval(text.value)
        text.value = answer
    }
})

clear.addEventListener('click', () => {
    text.value = ""
})

