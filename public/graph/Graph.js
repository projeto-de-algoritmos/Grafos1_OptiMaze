class Graph {
    constructor(map) {
        this.map = map;
    }

    findPath(start, end) {
        this.map[this.createKey(start)].permanent = true;
        this.map[this.createKey(start)].tag = {length: 0, precedence: "-"};

        this.tagNeighbors(this.createKey(start));
        var min = this.findMinTag();
        while(min != undefined) {
            this.tagNeighbors(min);
            min = this.findMinTag();
        }
        return this.getPath(this.createKey(end));
    }

    tagNeighbors(nodeName) {
        var node = this.map[nodeName];
        Object.keys(node.neighbors).forEach( (key) => {
            if(this.map[key].tag == undefined) {
                this.map[key].tag = {
                    length: node.tag.length + node.neighbors[key],
                    precedence: nodeName
                };                    
            } else {
                if(this.map[key].permanent != true && 
                this.map[key].tag.length > (node.tag.length + node.neighbors[key])) {
                    this.map[key].tag = {
                        length: node.tag.length + node.neighbors[key],
                        precedence: nodeName
                    };  
                }
            }
        });
    }
    findMinTag() {
        var minTag = {length: Infinity};
        Object.keys(this.map).forEach( (key) => {
            if(this.map[key].permanent != true &&
                this.map[key].tag != undefined &&
                this.map[key].tag.length < minTag.length
            ) {
                minTag = {
                    key: key,
                    length: this.map[key].tag.length
                }
            }
        });
        if(minTag.key != undefined)
            this.map[minTag.key].permanent = true;
        return minTag.key;
    }

    getPath(last) {
        if(this.map[last].tag == undefined) return undefined;
        var path = [];
        path.push(last);
        var tag = this.map[last].tag;
        while(tag.precedence != "-") {
            path.push(tag.precedence);
            tag = this.map[tag.precedence].tag;
        }
        return path.reverse();
    }

    createKey(arr) {
        return "v"+arr[0]+"_"+arr[1];
    }
}