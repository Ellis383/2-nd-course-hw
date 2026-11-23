{
  let a = 10;
  alert(a);

  a = 20;
  alert(a);
}

let releaseYear = 2007;
alert(releaseYear);

let creator = "Брендан Эйх";
alert(creator);

let a = 10;
let b = 2;
alert(a + b);
alert(a - b);
alert(a * b);
alert(a / b);

let result = 2 ** 5;
alert(result);

let remainderA = 9;
let remainderB = 2;
alert(remainderA % remainderB);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

let age = prompt("Сколько вам лет?");
alert(age);

let user = {
    name: "Эллис",
    age: 20,
    isAdmin: false
};

let name = prompt("Как вас зовут?");
alert(`Привет, ${name}!`);


// ===== НОВЫЕ ЗАДАНИЯ =====
// Каждое задание в своих фигурных скобках { }, чтобы переменные не конфликтовали.

// Задание 1. Проверка пароля
{
    let password = "qwerty123";
    let enteredPassword = prompt("Введите пароль");

    if (enteredPassword === password) {
        alert("Пароль введен верно");
    } else {
        alert("Пароль введен неправильно");
    }
}

// Задание 2. Проверка числа (результат смотрим в консоли)
// Проверь значения: 0, 10, -3, 2. Меняй число в c и обновляй страницу.
// Ожидаемо: 0 -> Неверно, 10 -> Неверно, -3 -> Неверно, 2 -> Верно
{
    let c = 2;

    if (c > 0 && c < 10) {
        console.log("Верно");
    } else {
        console.log("Неверно");
    }
}

// Задание 3. Проверка двух чисел (результат смотрим в консоли)
{
    let d = 150;
    let e = 5;

    if (d > 100 || e > 100) {
        console.log("Верно");
    } else {
        console.log("Неверно");
    }
}

// Задание 4. Преобразование строк в числа
{
    let a = '2';
    let b = '3';
    alert(Number(a) + Number(b));
}

// Задание 5. Определение времени года
{
    let monthNumber = 12;

    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            alert("Зима");
            break;
        case 3:
        case 4:
        case 5:
            alert("Весна");
            break;
        case 6:
        case 7:
        case 8:
            alert("Лето");
            break;
        case 9:
        case 10:
        case 11:
            alert("Осень");
            break;
        default:
            // Любой номер, которого нет в году (0, 13, 20, -1...), сезон не определяем
            alert("Такого месяца не существует");
    }
}

// Задание 6. Чётное или нечётное число
{
    let answer = prompt("Пожалуйста, введите любое число");
    let number = Number(answer);

    // Ошибка, если нажали «Отмена», оставили пустую строку, ввели не число или дробное число
    if (answer === null || answer.trim() === "" || isNaN(number) || !Number.isInteger(number)) {
        alert("Ошибка: нужно ввести целое число");
    } else if (number % 2 === 0) {
        alert("Число четное");
    } else {
        alert("Число нечетное");
    }
}

// Задание 7. Определение операционной системы (результат смотрим в консоли)
// 0 - iOS, 1 - Android
{
    let clientOS = 0;

    if (clientOS === 0) {
        console.log("Установите версию приложения для iOS по ссылке");
    } else if (clientOS === 1) {
        console.log("Установите версию приложения для Android по ссылке");
    }
}

// Задание 8. Версия приложения по году выпуска устройства (результат смотрим в консоли)
{
    let clientOS = 0;
    let clientDeviceYear = 2015;

    if (clientOS === 0) {
        if (clientDeviceYear < 2015) {
            console.log("Установите облегченную версию приложения для iOS по ссылке");
        } else {
            console.log("Установите версию приложения для iOS по ссылке");
        }
    } else if (clientOS === 1) {
        if (clientDeviceYear < 2015) {
            console.log("Установите облегченную версию приложения для Android по ссылке");
        } else {
            console.log("Установите версию приложения для Android по ссылке");
        }
    }
}