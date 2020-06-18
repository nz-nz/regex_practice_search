// {
// // разный синтаксис для одного результата
// let word = 'js';
// let pattern = new RegExp(word, 'gi');
// let pattern = /js/gi;
//
// let text = 'Я люблю js. Js это современный язык. js и я неразлучны.';
// console.log(text.match(pattern));
// }
//
// {
// // let pattern = new RegExp('[олв]');
// // ищет по 1 букве
//     let pattern = new RegExp('[олв]', 'g');
// // будет искать подстроку из 5 символов в []
//     let pattern1 = /[олв]{5}/;
// // ищет подстроку от 2 до 5 символов [] при этом символы должны быть без пропусков
//     let pattern2 = new RegExp('[олв]{2,5}', 'g');
// // ищет подстроку от 2 до бесконечности символов [] при этом символы должны быть без пропусков
//     let pattern3 = new RegExp('[олв]{2,}', 'g');
//
//     let result = 'я люблю делать поделки из олово.'.match(pattern1);
// }
// {
//     let str = '12, 43,34, 43;123    4';
//     let result = str.split(/\D{1,}/).map(n => +n);  // + == {1,} * == от 0 до бескон map как forEach но возвр массив
//
//     console.log(result);
//
// // \d /[0123456789]  \D == !\d прописные буквы обозначают отрицание
// // \w word signs
// // \s space signs
// }
//
// {
//     let str = 'Qwerty';
//     let pattern = /^.{8,}$/; // . - это любой символ, ^ начало строки $ конец строки
//     let result = pattern.test(str);
//     console.log(result);
// }

// \b граница слова
// \B не граница слова

// let str = 'я люблю делать поделки из оловa.';
// let pattern = /\b[а-яё]\b/; //важно ё идёт после я см коды .charCodeAt() для кириллицы не воспринимает начало слова
// let result = str.match(pattern);
// console.log(result);

// 'привет потомкам прапорщик'.replace(/[уеыаоэяиюё]/g, l=>l.toUpperCase());

let pwdElem = document.getElementById('pwd');
let emailElem = document.getElementById('email');

pwdElem.addEventListener('input', ()=>{
    let patten = /^[a-zа-яё_\-0-9\.,!]{8,12}$/i;
    let value = pwdElem.value;
    let isValid = patten.test(value);
    if (isValid){
        pwdElem.style.border = '2px solid green';
    }else{
        pwdElem.style.border = '2px solid red';
    }
});

emailElem.addEventListener('input', ()=>{
    let patten = /^\w{2,10}@\w{2,5}\.(ru|com)$/i; // пробел можно обычным пробелом указывать
    let value = emailElem.value;
    let isValid = patten.test(value);
    if (isValid){
        emailElem.style.border = '2px solid green';
    }else{
        emailElem.style.border = '2px solid red';
    }
});

let values = {
    name: 'Гайк',
    lastname: 'Инанц',
    age: '27'
};

/*
      {{  name }}
 */

let inputElem = document.querySelector('#text');
let outputElem = document.querySelector('.output');

inputElem.addEventListener('input', ()=>{
    let value = inputElem.value;
    let pattern = /\{\{\s*\w+\s*\}\}/g;  // * от 0 до бескон {0,}

    outputElem.innerText = value.replace(pattern, findValue);
});


function findValue(value) {
    let pattern = /\w+/;
    let key = value.match(pattern)[0];

    return values[key];
}

// ограничивает область видимости функций
(function () {
    let inputElem = document.querySelector('#search input');
    let textElem = document.querySelector('#search p');
    let formElem = document.querySelector('#search form');
    let caseElem = document.querySelector('#search #case');

    formElem.addEventListener('submit', function (event) {
        event.preventDefault();
        let searchValue = inputElem.value;
        let flagCase  = (caseElem.checked) ? 'i' : '';
        // let i = '';
        // if (caseElem.checked){
        //     i = 'i';
        // }


        if (searchValue === ''){
            textElem.innerText = textElem.innerText; //убирает теги
            return
        }

        let pattern = new RegExp(screen(searchValue), 'g'+flagCase);
        let text = textElem.innerText;
        let result = text.replace(pattern, mark);
        textElem.innerHTML = result;
        i = '';
    });

    function mark(l) {

        return `<span class="result">${l}</span>`;

    }

    function screen(word) {
        return  word.split('')
            .map(elem=>/\w|[а-яё]/.test(elem) ? elem : '\\'+elem)
            .join('');
    }

})();

// // ограничивает область видимости функций
// (function () {
//     let inputElem = document.querySelector('#search input');
//     let textElem = document.querySelector('#search p');
//
//     inputElem.addEventListener('input', function () {
//         let searchValue = inputElem.value;
//         if (searchValue === ''){
//             textElem.innerText = textElem.innerText; //убирает теги
//             return
//         }
//
//         let pattern = new RegExp(screen(searchValue), 'gi');
//         let text = textElem.innerText;
//         let result = text.replace(pattern, mark);
//         textElem.innerHTML = result;
//     });
//
//     function mark(l) {
//
//         return `<span class="result">${l}</span>`;
//
//     }
//
//     function screen(word) {
//         return  word.split('')
//             .map(elem=>/\w|[а-яё]/.test(elem) ? elem : '\\'+elem)
//             .join('');
//     }
//
// })();