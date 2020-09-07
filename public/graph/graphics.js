class Grid {
	constructor(id,width) {
		this.width = width;
		var elem = document.getElementById(id);
		this.grid = elem.getContext("2d");
		this.grid.clearRect(0, 0, width,width);
		this.grid.fillStyle = "#FFFFFF";
		this.grid.fillRect(0,0,600,600);
		elem.grid = this;
		elem.addEventListener('click', this.onclick);
	}

	draw(gridSize) {
		this.gridSize = gridSize;
		var boxSize = this.width/gridSize;
		console.log(this.width);
		for(var i = 0; i < gridSize ; i++) {
			for(var j = 0; j < gridSize; j++) {
				this.grid.rect(i*boxSize,j*boxSize,boxSize,boxSize);
				this.grid.stroke();
			}
		}
	}

	onclick(event) {
		var res = this.grid.getKeyBounds(event.x,event.y);
		this.grid.addBlock(res);
	}
	createKey(x,y)  {
			return "v"+x+"_"+y;
	}
	
	getKeyBounds(x, y)  {
		var boxSize = this.width/this.gridSize;
		for(var i = 0; i < this.gridSize ; i++) {
			for(var j = 0; j < this.gridSize; j++) {
				if(x >= i*boxSize && x <= (i*boxSize+boxSize) && y >= j*boxSize && y <= (j*boxSize+boxSize)){
					return [i,j];
				}
			}
		}
		return undefined;
	}

	addBlock(res){
		var boxSize = this.width/this.gridSize;
		if(this.start == undefined){
			this.start = [res[1],res[0]];
			this.grid.fillStyle = "#00FF00";
			this.grid.fillRect(res[0]*boxSize,res[1]*boxSize,boxSize,boxSize);
		} else if(this.end == undefined) {
			this.end = [res[1],res[0]];
			this.grid.fillStyle = "#0000FF";
			this.grid.fillRect(res[0]*boxSize,res[1]*boxSize,boxSize,boxSize);	
		} else {
			if(this.skips == undefined){
				this.skips = [];
			}
			this.skips.push([res[1],res[0]]);
			this.grid.fillStyle = "#FF0000";
			this.grid.fillRect(res[0]*boxSize,res[1]*boxSize,boxSize,boxSize);	
		}
	}

	getStart() {
		return this.start;
	}

	getEnd() {
		return this.end;
	}

	getSkips() {
		return this.skips;
	}


	drawSolution(solution) {
		var boxSize = this.width/this.gridSize;
		this.grid.beginPath();
		var start = this.getCoordinates(solution[0]);
		this.grid.moveTo(start[1]*boxSize + (boxSize/2),start[0]*boxSize+(boxSize/2));
		for(var i = 1; i < solution.length ; i++ ) {
			var item = this.getCoordinates(solution[i]);
			this.grid.lineTo(item[1]*boxSize + (boxSize/2),item[0]*boxSize+(boxSize/2));
		}
		this.grid.stroke();
	}
	getCoordinates(item) {
		item = item.substring(1, item.length);
		return item.split("_");
	}
	
	clean() {
		this.start = this.end = this.skips = undefined;
		this.grid.clearRect(0, 0, 600,600);
		this.grid.fillStyle = "#FFFFFF";
		this.grid.fillRect(0,0,600,600);
	}
}