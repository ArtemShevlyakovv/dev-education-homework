
//1.Составьте алгоритм, который считает, сколько времени вам нужно на приготовление яиц.

//как работает это выражение: (Math.ceil(eggsAmount/5))*5
//Сперва делится то, что находится в скобках, на выходе получаем число, которое поможет определить
//число заходов, затем используется метод Math.ceil, который при любом значении после запятой округлит
//вверх, что нам и нужно, мы получим конкретное число заходов, которое помножим на время одного захода

function getCookingTime(eggsAmount) {
   var result;
   result = (Math.ceil(eggsAmount / 5)) * 5
   return 'Чтобы сварить все твои яйца уйдёт ' + result + ' минут. Подумай о комуналке...';
}

//console.log(getCookingTime(6))


//2.Получая массив чисел. Все они либо нечетные, либо четные, кроме одного. Тебе нужно его найти.

function getNumber(array) {

   var result = 0;
   var countpair = 0;
   var countunpair = 0;
   var pairNum = 0;
   var unpairNum = 0;

   for (var i = 0; i < array.length; i++) {
      if (array[i] % 2 == 0) {
         countpair++
      }
      else {
         countunpair++
      }
   }

   if (countpair === 1) {

      for (var i = 0; i < array.length; i++) {
         if (array[i] % 2 == 0) {
            var pairNum = array[i];
            result = pairNum;
            break;

         }
      }
   }
   if (countunpair === 1) {
      for (var i = 0; i < array.length; i++) {
         if (array[i] == 0) continue;
         if (array[i] % 2 !== 0) {
            var unpairNum = array[i];
            result = unpairNum;
            break;

         }
      }
   }
   return result;

}

console.log(getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17]));

console.log(getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12]));


//3. Принимая массив объектов и случайную строку. У объектов может быть ключ: «title»
//с разными значениями. Создайте алгоритм, который фильтрует массив, заданный как первый
//параметр, и возвращает массив объектов, которые содержат в своих заголовках заданную
//строку в качестве второго параметра (без учета регистра).


//создаём массив объектов

let arrObj = [{
   title: 'Eeny, meeny'
}, {
   title: 'miny, moe'
}, {
   title: 'Catch a tiger by the toe'
}, {
   title: 'If he hollers, let him go'
}, {
   smth: 'I forgot the lyrics'
}];

//функция findTitle
function findTitle(array, string) {
   var result = []
   for (var i = 0; i < array.length; i++) {
      if (array[i].hasOwnProperty("title")) {
         if (array[i].title.toLowerCase().indexOf(string, 0) !== -1) {
            result.push(array[i]);
         }
      }

   }
   return result
}

console.log(findTitle(arrObj, 'hollers,'))

//4. Принимая строку, ваша функция должна вернуть обьект, в котором ключи – символы строки,
//значение – количество повторений символов в строке

function countCharacters(string) {
   var result = {};
   string = string.toUpperCase()

   for (let i = 0; i < string.length; i++) {
      if (string[i].charCodeAt() >= 48 && string[i].charCodeAt() <= 90) {
         if (result[string[i]]) {
            result[string[i]] += 1;
         } else {
            result[string[i]] = 1;
         }
      }
   }

   return result;
}

console.log(countCharacters('sparrow')) 
console.log(countCharacters('aabcddeffgea')) 
console.log(countCharacters('a 2ab !d')) 




//5. Принимая число, ваша функция должна найти следующий положительный палиндром большего размера.
//Палиндром - это слово, фраза, число или другая последовательность символов, которая читается так же, как вперед и назад, например, «мадам».


function isPolindrome(str) {
   var strReverse = '';
   var str = str.toString();
   str.toLowerCase();

   for (var i = str.length - 1; i >= 0; i--) {
      strReverse += str[i];
   }
   if (Number(strReverse) === Number(str) && str.length > 1) {
      return true;
   } else { return false }


}

function getNextPolindrome(number) {
number+=1;
   if (number < 10) {
       number = 10;
   } 
   while (!isPolindrome(number)) {
       number++
   }
   return number;
}

console.log(getNextPolindrome(7)) 
console.log(getNextPolindrome(99))
console.log(getNextPolindrome(132))
console.log(getNextPolindrome(888))
console.log(getNextPolindrome(999))
