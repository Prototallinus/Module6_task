const Link = document.querySelector('a');

let clickCounter = 0;

Link.addEventListener('click', function(warning) {
    warning.preventDefault(alert('Вы хотите изменить текст ссылки?'));
    Link.removeEventListener('click', warning);
    Link.addEventListener('click', ThinkMore);
}, { once: true })

function ThinkMore(warning) {
    if (clickCounter == 0) {
        warning.preventDefault(alert('Подумайте больше!'));
    } else {
        warning.preventDefault(alert('Вы хотите изменить текст ещё раз?'));
    }
    Link.removeEventListener('click', ThinkMore);
    Link.addEventListener('click', ChangeLink);
}

function ChangeLink () {
    this.textContent = prompt('Измените текст ссылки');
    Link.removeEventListener('click', ChangeLink);
    Link.addEventListener('click', ThinkMore);
    clickCounter = clickCounter + 1;
    console.log(clickCounter);
}