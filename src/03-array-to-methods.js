
console.log('array to methods');


//! METODO TO + VER TO BE PASTED, NO INMUTA EL ARREGLO, QUIERE DECIR CREA UN NUEVA INSTANCIA

const fruits = [  'Apple', 'Orange', 'Pineapple', 'Melon' ];
// const fruits = [  5, 6, 0, 4 ];

// const copyFruits = fruits.toSorted(); // NO INMUTA, NO CAMBIA EL ARREGLO REFERENCIADO
// const copyFruits = fruits.sort(); // INMUTA, SI CAMBIA EL ARREGLO REFERENCIADO
// console.table(fruits);


// fruits.sort();
// const reversedFruits = fruits.toReversed(); // CAMBIA DE POSICION, NO HACE REVERSE DE MANERA ALFABETICA
// console.table(reversedFruits); 


const newFruits = fruits.toSpliced(0, 1, 'Purple'); // NO MODIFICA FRUITS, CREA UN NUEVA INSTANCIA 
// const deletedFruits2 = fruits.splice(0, 1, 'Purple'); // ELEMENTO ELIMINADO

console.table(fruits);
console.table(newFruits);
// console.table(deletedFruits2);



