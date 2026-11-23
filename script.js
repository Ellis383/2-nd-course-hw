'use strict';

/* ===== Вспомогательные функции ===== */

// Случайное целое число от min до max включительно
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Правильная форма слова: 1 попытку, 2 попытки, 5 попыток
function pluralize(count, forms) {
  const n = Math.abs(count) % 100;
  const last = n % 10;

  if (n > 10 && n < 20) {
    return forms[2];
  }
  if (last > 1 && last < 5) {
    return forms[1];
  }
  if (last === 1) {
    return forms[0];
  }
  return forms[2];
}

/* ===== Кнопка «Поехали!»: плавная прокрутка ===== */
/* На компьютере прокручиваем к блоку «Об играх» (как и раньше).
   На телефоне этот блок скрыт, поэтому прокручиваем к блоку «Мини-игры». */

const welcomeButton = document.querySelector('.welcome__button');
const gamesSection = document.querySelector('#games');
const miniGamesSection = document.querySelector('#mini-games');

if (welcomeButton) {
  welcomeButton.addEventListener('click', (event) => {
    event.preventDefault();

    const isGamesVisible =
      gamesSection && getComputedStyle(gamesSection).display !== 'none';
    const target = isGamesVisible ? gamesSection : miniGamesSection;

    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

/* ===== Игра 1. Угадай число ===== */

function playGuessNumber() {
  const secret = getRandomInt(1, 100);
  let attempts = 0;
  let message = 'Я загадал число от 1 до 100. Попробуй угадать!';

  while (true) {
    const answer = prompt(message);

    // Нажали «Отмена»
    if (answer === null) {
      alert('Игра остановлена. Я загадывал число ' + secret + '.');
      return;
    }

    const text = answer.trim();

    // Пустая строка, буквы, дробные и отрицательные числа
    if (!/^\d+$/.test(text)) {
      message = 'Нужно ввести целое число от 1 до 100. Попробуй ещё раз:';
      continue;
    }

    const guess = Number(text);

    if (guess < 1 || guess > 100) {
      message = 'Число должно быть от 1 до 100. Попробуй ещё раз:';
      continue;
    }

    attempts += 1;

    if (guess < secret) {
      message = 'Загаданное число больше, чем ' + guess + '. Попробуй ещё раз:';
    } else if (guess > secret) {
      message = 'Загаданное число меньше, чем ' + guess + '. Попробуй ещё раз:';
    } else {
      const word = pluralize(attempts, ['попытку', 'попытки', 'попыток']);
      alert('Верно! Это число ' + secret + '. Ты угадал за ' + attempts + ' ' + word + '.');
      return;
    }
  }
}

/* ===== Игра 2. Простая арифметика ===== */

function createArithmeticTask() {
  const operation = getRandomInt(0, 3);
  let a;
  let b;
  let answer;
  let sign;

  if (operation === 0) {
    a = getRandomInt(1, 50);
    b = getRandomInt(1, 50);
    answer = a + b;
    sign = '+';
  } else if (operation === 1) {
    a = getRandomInt(10, 99);
    b = getRandomInt(1, a);
    answer = a - b;
    sign = '−';
  } else if (operation === 2) {
    a = getRandomInt(2, 10);
    b = getRandomInt(2, 10);
    answer = a * b;
    sign = '×';
  } else {
    // Деление: делитель от 2 (на ноль не делим), результат всегда целый
    b = getRandomInt(2, 10);
    answer = getRandomInt(2, 10);
    a = b * answer;
    sign = '÷';
  }

  return { question: a + ' ' + sign + ' ' + b, answer: answer };
}

function playArithmetic() {
  const task = createArithmeticTask();
  let message = 'Сколько будет ' + task.question + '?';

  while (true) {
    const reply = prompt(message);

    if (reply === null) {
      alert('Игра остановлена.');
      return;
    }

    const text = reply.trim();

    if (!/^-?\d+$/.test(text)) {
      message = 'Нужно ввести целое число. Сколько будет ' + task.question + '?';
      continue;
    }

    if (Number(text) === task.answer) {
      alert('Верно! ' + task.question + ' = ' + task.answer);
    } else {
      alert('Неверно. Правильный ответ: ' + task.question + ' = ' + task.answer);
    }
    return;
  }
}

/* ===== Игра 3. Переверни текст ===== */
function playReverseText() {
  let message = 'Введи любой текст, а я его переверну:';

  while (true) {
    const text = prompt(message);

    if (text === null) {
      alert('Игра остановлена.');
      return;
    }

    if (text.trim() === '') {
      message = 'Строка пустая. Введи хотя бы один символ:';
      continue;
    }

    // Array.from разбирает строку по символам, поэтому эмодзи не ломаются
    const reversed = Array.from(text).reverse().join('');
    alert('Было: ' + text + '\nСтало: ' + reversed);
    return;
  }
}

/* ===== Игра 4. Камень, ножницы, бумага ===== */

const RPS_CHOICES = ['камень', 'ножницы', 'бумага'];

// Что побеждает: камень бьёт ножницы, ножницы бьют бумагу, бумага бьёт камень
const RPS_BEATS = {
  'камень': 'ножницы',
  'ножницы': 'бумага',
  'бумага': 'камень'
};

function playRockPaperScissors() {
  let message = 'Камень, ножницы или бумага?\nВведи свой выбор:';

  while (true) {
    const reply = prompt(message);

    if (reply === null) {
      alert('Игра остановлена.');
      return;
    }

    const player = reply.trim().toLowerCase();

    if (!RPS_CHOICES.includes(player)) {
      message = 'Не понял твой выбор. Введи одно из слов: камень, ножницы или бумага.';
      continue;
    }

    const computer = RPS_CHOICES[getRandomInt(0, RPS_CHOICES.length - 1)];
    let result;

    if (player === computer) {
      result = 'Ничья!';
    } else if (RPS_BEATS[player] === computer) {
      result = 'Ты победил!';
    } else {
      result = 'Компьютер победил!';
    }

    alert(
      'Твой выбор: ' + player +
      '\nВыбор компьютера: ' + computer +
      '\n' + result
    );
    return;
  }
}

/* ===== Игра 5. Простая викторина ===== */

const quiz = [
  {
    question: "Какой цвет небо?",
    options: ["1. Красный", "2. Синий", "3. Зеленый"],
    correctAnswer: 2
  },
  {
    question: "Сколько дней в неделе?",
    options: ["1. Шесть", "2. Семь", "3. Восемь"],
    correctAnswer: 2
  },
  {
    question: "Сколько у человека пальцев на одной руке?",
    options: ["1. Четыре", "2. Пять", "3. Шесть"],
    correctAnswer: 2
  }
];

function playQuiz() {
  let correctCount = 0;

  for (let i = 0; i < quiz.length; i++) {
    const item = quiz[i];
    const questionText = item.question + '\n' + item.options.join('\n');
    let message = 'Вопрос ' + (i + 1) + ' из ' + quiz.length + ':\n' + questionText +
      '\n\nВведи номер ответа:';
    let isAnswered = false;

    while (!isAnswered) {
      const reply = prompt(message);

      if (reply === null) {
        alert('Викторина остановлена. Правильных ответов: ' + correctCount +
          ' из ' + quiz.length + '.');
        return;
      }

      const text = reply.trim();
      const number = Number(text);

      if (!/^\d+$/.test(text) || number < 1 || number > item.options.length) {
        message = 'Нужно ввести номер ответа от 1 до ' + item.options.length +
          '.\n\n' + questionText;
        continue;
      }

      if (number === item.correctAnswer) {
        correctCount += 1;
      }
      isAnswered = true;
    }
  }

  alert('Викторина завершена! Правильных ответов: ' + correctCount +
    ' из ' + quiz.length + '.');
}

/* ===== Игра 6. Генератор случайных цветов ===== */

function getRandomColor() {
  return '#' + getRandomInt(0, 0xffffff).toString(16).padStart(6, '0');
}

// Тёмный текст на светлом фоне и белый на тёмном, чтобы заголовок не пропадал
function getReadableTextColor(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  return brightness > 150 ? '#202027' : '#ffffff';
}

function playRandomColor() {
  const color = getRandomColor();

  document.body.style.backgroundColor = color;

  // Блоки сайта закрывают фон страницы своим цветом, поэтому цвет меняем
  // и у блока «Мини-игры», чтобы смена была видна
  if (miniGamesSection) {miniGamesSection.style.backgroundColor = color;

    const title = miniGamesSection.querySelector('.mini-games__title');
    if (title) {
      title.style.color = getReadableTextColor(color);
    }
  }
}

/* ===== Запуск игр по кнопкам «Играть!» ===== */

const games = {
  guess: playGuessNumber,
  arithmetic: playArithmetic,
  reverse: playReverseText,
  rps: playRockPaperScissors,
  quiz: playQuiz,
  color: playRandomColor
};

const gamesList = document.querySelector('.mini-games__list');

if (gamesList) {
  gamesList.addEventListener('click', (event) => {
    const button = event.target.closest('.mini-card__button');

    if (!button) {
      return;
    }

    const startGame = games[button.dataset.game];

    if (startGame) {
      startGame();
    }
  });
}