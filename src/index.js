/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {
    for (let i = 0; i < array.length; i++) {
        fn(array[i], i, array);
    }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
    let tmp = [];

    for (let i = 0; i < array.length; i++) {
        tmp.push(fn(array[i], i, array))
    }

    return tmp;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
    let i = 0;
    let res = (initial) ? initial : array[i++];

    while (i < array.length) {
        res = fn(res, array[i], i, array);
        i++;
    }

    return res;
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
    return Object.keys(obj).map(el => el.toUpperCase());
}

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from, to) {
    let tmp = [];

    for (let i = from; i < to; i++) {
        tmp.push(array[i])
    }

    return array.filter((el, i, arr) => {
        return (to >= 0) ? (i > from) && (to < i) : (i > from) && (to < arr.length - i)
    })

}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
    let tmp = {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            tmp = new Proxy(obj[key], obj[key] * obj[key])
        }
    }

    return tmp
}

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};
