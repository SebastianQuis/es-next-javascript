
console.log('structured clone');


const superFruits = [
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

// const cloneFruits = [...superFruits]; // SE PASA POR REFERENCIA 
// const cloneFruits = JSON.parse(JSON.stringify(superFruits)); // PIERDE LA REFERENCIA
const cloneFruits = structuredClone(state) // PIERDE LA REFERENCIA, MANERA OPTIMA

cloneFruits[0].name = 'Pears'; 

console.table(state);
console.table(cloneFruits);


