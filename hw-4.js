// ===== Задание 1. Выводим элементы, пока не встретим 10 =====
const array1 = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < array1.length; i++) {
    console.log(array1[i]);
    if (array1[i] === 10) {
        break; // после вывода 10 останавливаем цикл
    }
}


// ===== Задание 2. Индекс значения 4 =====
const array2 = [1, 5, 4, 10, 0, 3];
console.log(array2.indexOf(4)); // 2


// ===== Задание 3. join() через пробел =====
const array3 = [1, 3, 5, 10, 20];
console.log(array3.join(' ')); // 1 3 5 10 20


// ===== Задание 4. Многомерный массив из единиц (вложенные циклы) =====
const matrix = [];

for (let i = 0; i < 3; i++) {
    const row = [];
    for (let j = 0; j < 3; j++) {
        row.push(1);
    }
    matrix.push(row);
}

console.log(matrix); // [[1, 1, 1], [1, 1, 1], [1, 1, 1]]


// ===== Задание 5. Добавляем 2, 2, 2 в конец массива =====
const array5 = [1, 1, 1];
array5.push(2, 2, 2);
console.log(array5); // [1, 1, 1, 2, 2, 2]


// ===== Задание 6. sort() и удаление буквы 'a' =====
const array6 = [9, 8, 7, 'a', 6, 5];
array6.sort(); // обычная сортировка ставит букву 'a' в конец
array6.pop();  // удаляем последний элемент - букву 'a'
console.log(array6); // [5, 6, 7, 8, 9]


// ===== Задание 7. Угадай число из массива =====
const array7 = [9, 8, 7, 6, 5];
const guess = Number(prompt("Угадай число"));

if (array7.includes(guess)) {
    alert("Угадал");
} else {
    alert("Не угадал");
}


// ===== Задание 8. Строка в обратном порядке =====
const str = 'abcdef';
// reverse() работает только с массивами: строку -> в массив -> разворачиваем -> обратно в строку
console.log(str.split('').reverse().join('')); // fedcba


// ===== Задание 9. Двумерный массив в одномерный =====
const array9 = [[1, 2, 3], [4, 5, 6]];
console.log(array9.flat()); // [1, 2, 3, 4, 5, 6]


// ===== Задание 10. Сумма текущего и следующего элементов =====
const array10 = [3, 7, 1, 9, 4];

for (let i = 0; i < array10.length - 1; i++) { // -1: у последнего нет следующего
    console.log(array10[i] + array10[i + 1]);
}


// ===== Задание 11. Квадраты чисел =====
function getSquares(numbers) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        result.push(numbers[i] * numbers[i]);
    }
    return result;
}

console.log(getSquares([1, 2, 3, 4])); // [1, 4, 9, 16]


// ===== Задание 12. Длина каждого слова =====
function getLengths(words) {
    const result = [];
    for (let i = 0; i < words.length; i++) {
        result.push(words[i].length);
    }
    return result;
}

console.log(getLengths(['привет', 'мир', 'JavaScript'])); // [6, 3, 10]


// ===== Задание 13. Только отрицательные числа =====
function getNegatives(numbers) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            result.push(numbers[i]);
        }
    }
    return result;
}

console.log(getNegatives([3, -1, 0, -7, 5])); // [-1, -7]


// ===== Задание 14. Чётные числа из 10 случайных (от 0 до 10) =====
const randomNumbers = [];
const evenNumbers = [];

for (let i = 0; i < 10; i++) {
    randomNumbers.push(Math.floor(Math.random() * 11)); // от 0 до 10
}

for (let i = 0; i < randomNumbers.length; i++) {
    if (randomNumbers[i] % 2 === 0) {
        evenNumbers.push(randomNumbers[i]);
    }
}

console.log("Исходный массив:", randomNumbers);
console.log("Чётные числа:", evenNumbers);


// ===== Задание 15. Среднее арифметическое 6 случайных чисел (от 1 до 10) =====
const numbers15 = [];
let sum = 0;

for (let i = 0; i < 6; i++) {
    const number = Math.floor(Math.random() * 10) + 1; // от 1 до 10
    numbers15.push(number);
    sum += number;
}

console.log("Числа:", numbers15);
console.log("Среднее арифметическое:", sum / numbers15.length);