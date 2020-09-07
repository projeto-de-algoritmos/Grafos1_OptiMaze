class Graph {
    constructor() {
        this.nodes = {};
    }
    addNode(value, node) {
        this.nodes[value] = node;
    }

    // o importante eh esse algoritmo aqui: ????? nao sei se eh o mais correto
    // bfs(start, end) {
    //     if(this.nodes[0] == start) {
    //         console.log('inicio')
    //     }
    // }
}