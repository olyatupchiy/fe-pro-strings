/**
 * Мы передаем строку и должны заменить любую z или v вне зависимости от регистра
 * на символ звездочки *
 * @param {string} string
 * @returns {string}
 */

export const replaceZAndVFromString = (string) => {
 let result = "";
 string.toLowerCase();
 for (let i = 0; i < string.length; i += 1) {
  if (string[i] === 'z') {
   result = `${result}${'*'}`;
  }
  else if (string[i] === 'v') {
   result = `${result}${'*'}`;
  }
  else {
   result = `${result}${string[i]}`;
  }
 }
 return result;
}


/**
 * Функция должна принять 3 аргумента и все строки. Мы передаем строку,
 * вторая строка это искомое слово, третья это то слово, на которое мы должны
 * заменить. Смотрите использование в файле check.js рядом. Должно вернуть строку
 * 1 аргумента с замененным словом(2 аргумент) на слово(3 аргумент)
 * @param {string} string
 * @param {string} word
 * @param {string} newWord
 * @returns {string}
 */

export const changeWord = (string, word, newWord) => {
 return string.replace(word, newWord);
};

/**
 * Должна вернуть строку(1 аргумент) на обрезанную по длине(2 аргумент, число)
 * @param {string} string
 * @param {number} length
 * @returns {string}
 */
export const truncate = (string, length) => {
 return string.substring(0, length);
};

/**
 * Принимает строку в первом аргументе, и символ во втором
 * И должно вернуть количество этих символов в этой строке
 * Попробуйте реализовать просто через цикл for и с проверкой
 * посимвольно. Кстати, проверка регистронезависимая. Если у нас
 * строка 'I am ivan' и хочу найти количество символов i то будет
 * их 2, и если I то тоже 2
 * @param {string} string
 * @param {string} symbol
 * @returns {number}
 */
export const quantityOfSymbols = (string, symbol) => {
 let amount = 0;
 let lowerString = string.toLowerCase();
 let lowerSymbol = symbol.toLowerCase();
 for (let num = 0; num < lowerString.length; num++) {
  if (lowerString[num] === lowerSymbol) {
   amount++;
  }
 }
 return amount;
};

/**
 * Принимает строку в первом аргументе, и символ во втором
 * И должно вернуть количество этих символов в этой строке
 * Попробуйте реализовать через метод indexOf. Напомню, в
 * нем есть второй аргумент, который говорит, от какой позиции
 * делать поиск. Я хочу, чтобы вы сделали бесконечный цикл
 * while и искали символы этим методом, и сделали break когда позиций
 * больше нет. Так будет более оптимально, меньше проходов цикла.
 * Кстати, проверка регистронезависимая. Если у нас
 * строка 'I am ivan' и хочу найти количество символов i то будет
 * их 2, и если I то тоже 2
 * @param {string} string
 * @param {string} symbol
 * @returns {number}
 */
export const quantityOfSymbolsWithIndexOf = (string, symbol) => {
 let quantity = 0;
 let index = 0;
 while (true) {
  let idx = string.toLocaleLowerCase().indexOf(symbol.toLowerCase(), index);
  if (idx >= 0) {
   index = idx + 1;
   quantity++;
  } else if (idx === -1) {
   break;
  }
 }
 return quantity;
};