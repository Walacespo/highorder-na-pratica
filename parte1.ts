export {}

let list1 = [1, 2, 3, 4];
let list2 = [];
let nomes = ['MARIA', 'JOAO', 'ANABELA'];

// --------------------------------------------------------------------------------------------------------------------
// map: aplica uma função a cada elemento da coleção original, retornando uma nova coleção com os elementos alterados

function dobro(x: number) : number {
    return x * 2;
}

function triplo(x: number) : number {
    return x * 3;
}

let m1 = list1.map(dobro);
let m2 = list1.map(triplo);
let m3 = list1.map(x => 2 * x);

console.log('MAP ------------------------------');
console.log(m1);
console.log(m2);
console.log(m3);


// --------------------------------------------------------------------------------------------------------------------
// filter: retorna uma nova coleção contendo apenas aqueles elementos da coleção original que satisfazem um dado predicado

function par(x: number) : boolean {
    return x % 2 == 0;
}

let f1 = list1.filter(par);
let f2 = list1.filter(x => x > 2);
let f3 = list1.filter(x => x % 2 != 0);

console.log('FILTER ------------------------------');
console.log(f1);
console.log(f2);
console.log(f3);
