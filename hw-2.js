// ===== ОСНОВНЫЕ ЗАДАНИЯ =====

// Задание 1. Выведи в консоль 2 раза слово «Привет»
for (let i = 0; i < 2; i++) {
    console.log("Привет");
}

// Задание 2. Выведи в консоль цифры от 1 до 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Задание 3. Выведи в консоль числа от 7 до 22
for (let i = 7; i <= 22; i++) {
    console.log(i);
}

// Задание 4. Объект obj и цикл for-in
const obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
};

for (let key in obj) {
    console.log(`${key} — зарплата ${obj[key]} долларов`);
}

// Задание 5. Делим n на 2, пока результат не станет меньше 50
let n = 1000;
let num = 0; // сколько раз выполнился цикл

while (n >= 50) {
    n = n / 2;
    num++;
}

console.log("Результат деления:", n);   // 31.25
console.log("Количество итераций:", num); // 5

// Задание 6. Отчётные пятницы в месяце из 31 дня
let firstFriday = 3; // номер первой пятницы месяца (от 1 до 7), можно менять

for (let day = firstFriday; day <= 31; day += 7) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}


// ===== ДОПОЛНИТЕЛЬНЫЕ ЗАДАНИЯ =====

// Дополнительное задание 1. Вычитаем 7 из k, пока результат не станет меньше 0
let k = 100;
let iterations = 0;

while (k >= 0) {
    k = k - 7;
    iterations++;
}

console.log("Итоговое число:", k);               // -5
console.log("Количество итераций:", iterations); // 15

// Дополнительное задание 2. Массив месяцев и их номера
const months = [
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
];

for (let i = 0; i < months.length; i++) {
    console.log(`${i + 1} — ${months[i]}`);
}

// Дополнительное задание 3. Объект «книга»
const book = {
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    year: 1967,
    genre: "Роман"
};

for (let key in book) {
    console.log(`${key}: ${book[key]}`);
}

// Дополнительное задание 4. Минимальное число в массиве из 10 случайных чисел
const randomNumbers = [];

for (let i = 0; i < 10; i++) {
    randomNumbers.push(Math.floor(Math.random() * 100)); // число от 0 до 99
}

let minNumber = randomNumbers[0];

for (let i = 1; i < randomNumbers.length; i++) {
    if (randomNumbers[i] < minNumber) {
        minNumber = randomNumbers[i];
    }
}

console.log("Массив:", randomNumbers);
console.log("Минимальное число:", minNumber);