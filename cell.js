class Cells {
    constructor(i, j) {
        this.i = i
        this.j = j
        this.x = i*size
        this.y = j*size

        this.pawnB = false;
        this.rookB = false;
        this.knightB = false;
        this.bishopB = false;
        this.kingB = false;
        this.queenB = false;
        
        this.pawnW = false;
        this.rookW = false;
        this.knightW = false;
        this.bishopW = false;
        this.kingW = false;
        this.queenW = false;
    }
}