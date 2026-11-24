// ===== Задание 1. Меньшее из двух чисел =====
function getMin(a, b) {
    if (a < b) {
        return a;
    } else {
        return b; // если числа равны, вернётся это же значение
    }
}

console.log(getMin(8, 4)); // 4
console.log(getMin(6, 6)); // 6
console.log(getMin(-3, 2)); // -3


// ===== Задание 2. Чётное или нечётное число =====
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}

console.log(checkEvenOdd(10)); // Число четное
console.log(checkEvenOdd(7));  // Число нечетное
console.log(checkEvenOdd(0));  // Число четное


// ===== Задание 3. Квадрат числа =====

// Первая функция только ВЫВОДИТ результат в консоль (return нет)
function printSquare(number) {
    console.log(number * number);
}

// Вторая функция ВОЗВРАЩАЕТ результат, его можно использовать дальше
function getSquare(number) {
    return number * number;
}

printSquare(5); // в консоли будет 25
let square = getSquare(5); // результат сохранили в переменную
console.log(square + 1);   // 26 - используем результат дальше


// ===== Задание 4. Проверка возраста =====
function checkAge() {
    let answer = prompt("Сколько вам лет?");
    let age = Number(answer);

    // Отрицательное число, а также не число (буквы, «Отмена», пустая строка)
    if (answer === null || answer === "" || isNaN(age) || age < 0) {
        return 'Вы ввели неправильное значение';
    } else if (age <= 12) {
        return 'Привет, друг!';
    } else {
        return 'Добро пожаловать!';
    }
}

alert(checkAge());


// ===== Задание 5. Проверка чисел и умножение =====
function multiply(a, b) {
    // Пустая строка при преобразовании даёт 0, поэтому проверяем её отдельно
    if (a === "" || b === "" || isNaN(Number(a)) || isNaN(Number(b))) {
        return 'Одно или оба значения не являются числом';
    } else {
        return Number(a) * Number(b);
    }
}

console.log(multiply(3, 4));     // 12
console.log(multiply("5", "2")); // 10
console.log(multiply(3, "abc")); // Одно или оба значения не являются числом


// ===== Задание 6. Возведение числа в куб =====

// Эта функция проверяет значение и возвращает строку
function getCubeText(value) {
    if (value === null || value === "" || isNaN(Number(value))) {
        return 'Переданный параметр не является числом';
    }

    let n = Number(value);
    return n + ' в кубе равняется ' + n * n * n;
}

// Эта функция спрашивает число у пользователя
function askCube() {
    let value = prompt("Введите число");
    return getCubeText(value);
}

alert(askCube());

// Проверка с числами от 0 до 10 (смотри в консоли)
for (let i = 0; i <= 10; i++) {
    console.log(getCubeText(i));
}
console.log(getCubeText("abc")); // Переданный параметр не является числом


// ===== Задание 7. Объекты-круги =====
const circle1 = {
    radius: 5,
    getArea: function () {
        return Math.PI * this.radius * this.radius;
    },
    getPerimeter: function () {
        return 2 * Math.PI * this.radius;
    }
};

const circle2 = {
    radius: 10,
    getArea: function () {
        return Math.PI * this.radius * this.radius;
    },
    getPerimeter: function () {
        return 2 * Math.PI * this.radius;
    }
};

console.log("Круг 1, площадь:", circle1.getArea());       // ≈ 78.54
console.log("Круг 1, периметр:", circle1.getPerimeter()); // ≈ 31.42
console.log("Круг 2, площадь:", circle2.getArea());       // ≈ 314.16
console.log("Круг 2, периметр:", circle2.getPerimeter()); // ≈ 62.83