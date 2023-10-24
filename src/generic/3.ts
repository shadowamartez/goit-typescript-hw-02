/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return { ...objA, ...objB };
}

const object1 = { a: 1, b: 2 };
const object2 = { c: 3, d: 4 };
const mergedObject = merge(object1, object2);

console.log(mergedObject); 
