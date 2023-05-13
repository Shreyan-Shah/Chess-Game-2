class PawnB {
    constructor(i, j, img) {
        this.i = i
        this.j = j
        this.img = img
        this.x = i * size
        this.y = j * size
    }
    show() {
        //console.log("drawing");
        imageMode(CENTER);
        image(this.img, this.x, this.y, 100, 100);
    }
    Update() {
        this.x = this.i*size+50
        this.y = this.j*size+50
    }
    move() {
        console.log("moving");
        for (let i = 0; i < pieces.length; i++) {
            console.log(pieces[i]);  
        }
    }
}

class RookB extends PawnB {
    constructor(i, j, img) {
        super(i, j, img);
    }
}

class KnightB extends PawnB {
    constructor(i, j, img) {
        super(i, j, img);
    }
}

class BishopB extends PawnB {
    constructor(i, j, img) {
        super(i, j, img);
    }
}

class KingB extends PawnB {
    constructor(i, j, img) {
        super(i, j, img);
    }
}

class QueenB extends PawnB {
    constructor(i, j, img) {
        super(i, j, img);
    }
}