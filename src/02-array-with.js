
console.log('array with');


//! METODO WITH CASI "PERMITE" CREAR UN NUEVO STATE Y A LA VEZ HACE UNA MODIFICACION AL MISMO

const state = [
    {
        id: 1,
        name: 'Apple',
    },
    {
        id: 2,
        name: 'Orange',
    },
    {
        id: 3,
        name: 'Pineapple',
    },
    {
        id: 4,
        name: 'Melon',
    },
]

const index = 1;
const newName = 'Banana';


// const newState = state.map( (fruit, i) => { // structuredClone(state) PARA UN NUEVO ARREGLO
//     if (i === index) {
//         fruit.name = newName;
//     }
//     return fruit;
//     // return {...fruit};
// });


const newState = state.with( index, { // structuredClone(state) PARA UN NUEVO ARREGLO
    ...state[index], // state.at(index) // ES EL MISMO EFECTO
    name: 'Sebastian'
});

state[0].name = 'Green';

// console.table(state);
console.table(newState); // NO ES UN NUEVO ARREGLO, MANTIENE LA REFERENCIA

console.log(newState.at(-1)); // OBTENER EL ULTIMO ELEMENTO DE UN ARREGLO
console.log(newState.at(-2)); // OBTENER EL PENULTIMO DE UN ARREGLO