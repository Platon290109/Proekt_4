const scientists = [ 
    { 
        name: "Albert", 
        surname: "Einstein", 
        born: 1879, 
        dead: 1955, 
        id: 1 
    }, 
    { 
        name: "Isaac", 
        surname: "Newton", 
        born: 1643, 
        dead: 1727, 
        id: 2 
    }, 
    { 
        name: "Galileo", 
        surname: "Galilei", 
        born: 1564, 
        dead: 1642, 
        id: 3 
    }, 
    { 
        name: "Marie", 
        surname: "Curie", 
        born: 1867, 
        dead: 1934, 
        id: 4 
    }, 
    { 
        name: "Johannes", 
        surname: "Kepler", 
        born: 1571, 
        dead: 1630, 
        id: 5 
    }, 
    { 
        name: "Nicolaus", 
        surname: "Copernicus", 
        born: 1473, 
        dead: 1543, 
        id: 6 
    }, 
    { 
        name: "Max", 
        surname: "Planck", 
        born: 1858, 
        dead: 1947, 
        id: 7 
    }, 
    { 
        name: "Katherine", 
        surname: "Blodgett", 
        born: 1898, 
        dead: 1979, 
        id: 8 
    }, 
    { 
        name: "Ada", 
        surname: "Lovelace", 
        born: 1815, 
        dead: 1852, 
        id: 9 
    }, 
    { 
        name: "Sarah E.", 
        surname: "Goode", 
        born: 1855, 
        dead: 1905, 
        id: 10 
    }, 
    { 
        name: "Lise", 
        surname: "Meitner", 
        born: 1878, 
        dead: 1968, 
        id: 11 
    }, 
    { 
        name: "Hanna", 
        surname: "Hammarström", 
        born: 1829, 
        dead: 1909, 
        id: 12 
    } 
];
const roki = document.getElementById("roki");
const stariy = document.getElementById("stariy");
const alfavit = document.getElementById("alfavit");
roki.addEventListener("click", onClickRoki);
stariy.addEventListener("click", onClickStariy);
alfavit.addEventListener("click", onClickAlfavit);
// Відсортувати вчених за кількістю прожитих років
function onClickRoki () {
const vidsort = scientists.sort((a, b)=>{return (b.dead-b.born)-(a.dead-a.born)})
console.log(vidsort)
};
// Знайти вченого, який народився найпізніше
function onClickStariy () {
const samistari = scientists.sort((a, b)=>b.born-a.born)
samistari[0]
console.log(samistari[0])
}
// Відсортувати вчених за алфавітом
function onClickAlfavit () {
const abc = scientists.sort((a, b)=>a.surname.localeCompare(b.surname))
console.log(abc)
}