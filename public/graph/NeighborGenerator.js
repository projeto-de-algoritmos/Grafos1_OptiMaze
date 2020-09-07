class NeighborGenerator{
	constructor(gridSize) {
		this.gridSize=gridSize;
	}

	buildMap(strict) {
		var strict = strict || false;
		this.map = {};
		for(var x = 0 ; x < this.gridSize ; x++ ){
			for(var y = 0 ; y < this.gridSize ; y++) {
				if(!this.containsCoord(x,y)) {
					var keyName = this.createKey(x,y);
					this.map[keyName] = {
						neighbors:{}
					}
					if((x+1) < this.gridSize){
						this.addNeighbor(keyName,x+1,y,false);
					}

					if((y+1) < this.gridSize){
						this.addNeighbor(keyName,x,y+1,false);
					}

					if((x-1) >= 0){
						this.addNeighbor(keyName,x-1,y,false);
					}

					if((y-1) >= 0){
						this.addNeighbor(keyName,x,y-1,false);
					}
				}
			}
		}
		return this.map;
	}

	createKey(x,y) {
		return "v"+x+"_"+y;
	}

	addNeighbor(keyname, x,y,isDiagonal) {
		if(!this.containsCoord(x,y))
			this.map[keyname].neighbors[this.createKey(x,y)] = isDiagonal? 1.4:1;
	}

	containsCoord(x, y) {
		if(this.skips != undefined){
			for(var i = 0; i < this.skips.length; i++){
				if(this.skips[i][0] == x && this.skips[i][1] == y) return true;
			}
		}
		return false;
	}

	setSkips(skips) {
		this.skips = skips;
	}
}
