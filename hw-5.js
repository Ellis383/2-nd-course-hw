// ===== Задание 1. Строка 'js' в верхний регистр =====
const lang = 'js';
console.log(lang.toUpperCase()); // JS


// ===== Задание 2. Элементы массива, которые начинаются с заданной строки =====
function filterByStart(words, start) {
    const result = [];
    const startLower = start.toLowerCase(); // приводим к нижнему регистру, чтобы регистр не влиял

    for (let i = 0; i < words.length; i++) {
        if (words[i].toLowerCase().startsWith(startLower)) {
            result.push(words[i]);
        }
    }

    return result;
}

console.log(filterByStart(['Apple', 'avocado', 'banana', 'Ананас'], 'a')); // ['Apple', 'avocado']
console.log(filterByStart(['Привет', 'привычка', 'мир'], 'ПРИВ'));          // ['Привет', 'привычка']


// ===== Задание 3. Округление числа тремя способами =====
const number = 32.58884;
console.log(Math.floor(number)); // 32 - до меньшего целого
console.log(Math.ceil(number));  // 33 - до большего целого
console.log(Math.round(number)); // 33 - до ближайшего целого


// ===== Задание 4. Минимум и максимум =====
console.log("Минимум:", Math.min(52, 53, 49, 77, 21, 32)); // 21
console.log("Максимум:", Math.max(52, 53, 49, 77, 21, 32)); // 77


// ===== Задание 5. Случайное целое число от 1 до 10 =====
function printRandomFrom1To10() {
    console.log(Math.floor(Math.random() * 10) + 1);
}

printRandomFrom1To10();


// ===== Задание 6. Массив случайных чисел от 0 до n, длина вдвое меньше n =====
function getRandomArray(n) {
    const length = Math.floor(n / 2); // для нечётного n берём целую часть
    const result = [];

    for (let i = 0; i < length; i++) {
        result.push(Math.floor(Math.random() * (n + 1))); // число от 0 до n
    }

    return result;
}

console.log(getRandomArray(10)); // 5 чисел от 0 до 10
console.log(getRandomArray(7));  // 3 числа от 0 до 7
console.log(getRandomArray(1));  // []


// ===== Задание 7. Случайное целое число в диапазоне (обе границы включены) =====
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInRange(5, 10)); // число от 5 до 10
console.log(getRandomInRange(3, 3));  // 3


// ===== Задание 8. Текущая дата =====
console.log(new Date());


// ===== Задание 9. Дата через 73 дня =====
const currentDate = new Date();
const futureDate = new Date(currentDate); // копия, чтобы не менять currentDate
futureDate.setDate(futureDate.getDate() + 73);

console.log("Сегодня:", currentDate);
console.log("Через 73 дня:", futureDate);


// ===== Задание 10. Дата в русском формате =====
function formatDate(date) {
    const months = [
        "января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"
    ];
    // getDay() даёт 0 для воскресенья, поэтому массив начинается с воскресенья
    const days = [
        "воскресенье", "понедельник", "вторник", "среда",
        "четверг", "пятница", "суббота"
    ];

    // Добавляет ноль впереди, если число меньше 10 (5 -> "05")
    function addZero(value) {
        if (value < 10) {
            return "0" + value;
        }
        return String(value);
    }

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const weekDay = days[date.getDay()];

    const hours = addZero(date.getHours());
    const minutes = addZero(date.getMinutes());
    const seconds = addZero(date.getSeconds());

    return `Дата: ${day} ${month} ${year} — это ${weekDay}.\nВремя: ${hours}:${minutes}:${seconds}`;
}

console.log(formatDate(new Date()));
console.log(formatDate(new Date(2024, 0, 1, 9, 5, 3)));    // 1 января 2024, понедельник, 09:05:03
console.log(formatDate(new Date(2023, 11, 31, 23, 59, 59))); // 31 декабря 2023, воскресенье
console.log(formatDate(new Date(2020, 1, 29, 0, 0, 0)));     // 29 февраля 2020, суббота, 00:00:00