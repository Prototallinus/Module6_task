const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Метод для вывода сообщения в веб-консоль');
})

const Alert = document.querySelector('#alert');

Alert.addEventListener('click', () => {
    alert('Метод для отображения информации пользователям');
})

const Prompt = document.querySelector('#prompt');
Prompt.addEventListener('click', () => {
    alert('Метод для отображения диалоговое окно с запросом на ввод текста');
})

