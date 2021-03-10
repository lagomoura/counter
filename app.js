// set inition count
let count = 0;

// select value buttons

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
// De essa maneira e mais facil de manipular. Selecionando todos os btns e trabalhando de maneira individual com cada um a traves de forEach()

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
const styles = e.currentTarget.classList;
// Acesso a classe do evento que esta associado ao btn apertado e guardo sua clase dentro de uma variavel
if (styles.contains('decrease')){
    count --;
} 
// se essa variavel tem a classe de decrease, o contador tem que reduzir 1 por vez
else if (styles.contains('increase')){
    count ++;
} 
// se a variavel tem a clase de increase, o numero tem que ir crescendo de um a um 
else if (styles.contains('reset')) {
    count = 0;
}
// Se a veriavel tem a classe de reset, o contador e igual a 0
if (count > 0) {
    value.style.color = 'green'
}
// se o contador e maior a 0 tem cor verde
if (count < 0) {
    value.style.color = 'red'
}
// se o contador e menor a zero, tem cor vermelha
if (count === 0) {
    value.style.color = '#222'
}
// se o contador e igual a zera, a cor e preta 

value.textContent = count;
    })
});
