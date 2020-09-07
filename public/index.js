// const table = document.querySelector('table');
// const message = document.querySelector('p');
// let counter = 0;
// let matrix = [];

// message.innerHTML = 'Selecione o ponto de partida.';

// for(let i = 1; i <= 15; i++) {
//     let row = table.insertRow();
//     for(let j = 1; j <= 15; j++) {
//         let cell = row.insertCell();
//         matrix.push([i, j]);
//         cell.addEventListener('click', () => {
//             if( cell.style.backgroundColor == 'blue' ||
//                 cell.style.backgroundColor == 'red'
//             ) {
//                 return; 
//             }
//             if(counter === 0){
//                 cell.style.backgroundColor = 'blue';
//                 counter++;
//                 message.innerHTML = 'Selecione o ponto de chegada.';
//             } else if (counter === 1) {
//                 cell.style.backgroundColor = 'red';
//                 counter++;
//                 message.innerHTML = 'Selecione as paredes, aperte play e espere o resultado!';
//             } else {
//                 cell.style.backgroundColor = '#04D361';
//                 counter++;
//                 matrix.splice([i,j], 1);
//             }
//         });
//     }
// }

    
var mapper = new Mapper(10);

var grid = new Grid("grid",600);
grid.draw(10);
function solve() {
    var start = grid.getStart();
    var end = grid.getEnd();
    mapper.skips = grid.getSkips();
    var map = mapper.buildMap(true);

    var dijkstra = new Graph(map);
    var solution = dijkstra.findPath(start,end);
    if(solution != undefined){
        grid.drawSolution(solution);
    } else {
        alert("Não há solução");
    }
    //console.log(solution);
}