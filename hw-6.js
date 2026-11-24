// В заданиях повторяются имена (people, delayForSecond),
// поэтому каждое задание лежит в своих фигурных скобках { }.

// ===== Задание 1. Сортировка массива по возрасту =====
{
    const people = [
        { name: 'Глеб', age: 29 },
        { name: 'Анна', age: 17 },
        { name: 'Олег', age: 7 },
        { name: 'Оксана', age: 47 }
    ];

    // Если a.age - b.age меньше 0, то a ставится раньше b (по возрастанию)
    people.sort(function (a, b) {
        return a.age - b.age;
    });

    console.log(people); // Олег 7, Анна 17, Глеб 29, Оксана 47
}

// ===== Задание 2. Собственная функция filter =====
{
    // Проверяет, что число положительное
    function isPositive(number) {
        return number > 0;
    }

    // Проверяет, что человек - мужчина
    function isMale(person) {
        return person.gender === 'male';
    }

    // Принимает массив и функцию-правило, возвращает новый массив
    function filter(array, rule) {
        const result = [];

        for (let i = 0; i < array.length; i++) {
            if (rule(array[i]) === true) {
                result.push(array[i]);
            }
        }

        return result;
    }

    console.log(filter([3, -4, 1, 9], isPositive)); // [3, 1, 9]

    const people = [
        { name: 'Глеб', gender: 'male' },
        { name: 'Анна', gender: 'female' },
        { name: 'Олег', gender: 'male' },
        { name: 'Оксана', gender: 'female' }
    ];

    console.log(filter(people, isMale)); // Глеб и Олег
}

// ===== Задание 3. Дата каждые 3 секунды в течение 30 секунд =====
{
    // Каждые 3 секунды выводим текущую дату
    const timerId = setInterval(function () {
        console.log(new Date());
    }, 3000);

    // Через 30 секунд останавливаем вывод и пишем сообщение
    setTimeout(function () {
        clearInterval(timerId);
        console.log('30 секунд прошло');
    }, 30000);
}

// ===== Задание 4. Задержка выполнения функции на 1 секунду =====
{
    function delayForSecond(callback) {
        setTimeout(callback, 1000); // вызываем callback не сразу, а через 1 секунду
    }

    delayForSecond(function () {
        console.log('Привет, Глеб!');
    });
}

// ===== Задание 5. Исправление порядка выполнения =====
{
    function delayForSecond(cb) {
        setTimeout(() => {
            console.log('Прошла одна секунда');
            if(cb) { cb(); }
        }, 1000)
    }

    function sayHi (name) {
        console.log(`Привет, ${name}!`);
    }

    // Код выше менять нельзя

    // Нужно изменить код ниже:
    // Было: delayForSecond(sayHi('Глеб')) - sayHi вызывалась сразу, а в delayForSecond попадал undefined.
    // Теперь передаём функцию, которую delayForSecond вызовет сама через секунду.
    delayForSecond(function () {
        sayHi('Глеб');
    });
}