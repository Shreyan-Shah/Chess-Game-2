var imgb = [];
var imgw = [];
var pieces = [];
var moves = [];
// var for currently clicked piece
var clickedPiece;
var size = 100
//var for columns,rows,grid
var columns
var rows
var grid
var restartButton


function preload() {
  imgb[0] = loadImage('BlackPieces/black_pawn.png');
  imgb[1] = loadImage('BlackPieces/black_bishop.png');
  imgb[2] = loadImage('BlackPieces/Black_King.png');
  imgb[3] = loadImage('BlackPieces/Black_Knight.png');
  imgb[4] = loadImage('BlackPieces/black_queen.png');
  imgb[5] = loadImage('BlackPieces/black_rook.png');

  imgw[0] = loadImage('WhitePieces/white_pawn.png');
  imgw[1] = loadImage('WhitePieces/white_bishop.png');
  imgw[2] = loadImage('WhitePieces/white_king.png');
  imgw[3] = loadImage('WhitePieces/white_knight.png');
  imgw[4] = loadImage('WhitePieces/white_queen.png');
  imgw[5] = loadImage('WhitePieces/white_rook.png');
}

function setup() {
  createCanvas(800, 800);
  make2dArray(8, 8);
  init2dArray(8, 8);
  setStartPosition();
  createPieces();
}

function draw() {
  background(255, 255, 255);
  drawBoard();
  renderPieces();
  drawSprites();
  //console.log(pieces);
}

function drawBoard() {
  var color = true
  for (let posy = 0; posy <= 800; posy += 100) {
    for (let posx = 0; posx < 800; posx += 100) {
      if (color == true) {
        fill("white");
      }
      else {
        fill("green")
      }
      //console.log(posx);
      rect(posx, posy, size, size);
      color = !color
    }
    color = !color
  }
}

function make2dArray(columns, rows) {
  grid = new Array(columns)
  for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array(columns)
  }
  console.log(grid);
}

function init2dArray(columns, rows) {
  var maximumColumns = grid.length;
  console.log(maximumColumns)
  for (let columns = 0; columns < maximumColumns; columns++) {
    var maximumRows = grid[columns].length;
    for (let rows = 0; rows < maximumRows; rows++) {
      grid[columns][rows] = new Cells(columns, rows)
    }
  }
}

function createPieces() {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j].pawnB) {
        let pawnB = new PawnB(grid[i][j].i, grid[i][j].j, imgb[0])
        pieces.push(pawnB);
      }
      else if (grid[i][j].rookB) {
        let rookB = new RookB(grid[i][j].i, grid[i][j].j, imgb[5])
        pieces.push(rookB);
      }
      else if (grid[i][j].knightB) {
        let knightB = new KnightB(grid[i][j].i, grid[i][j].j, imgb[3])
        pieces.push(knightB);
      }
      else if (grid[i][j].bishopB) {
        let bishopB = new BishopB(grid[i][j].i, grid[i][j].j, imgb[1])
        pieces.push(bishopB);
      }
      else if (grid[i][j].kingB) {
        let kingB = new KingB(grid[i][j].i, grid[i][j].j, imgb[2])
        pieces.push(kingB);
      }
      else if (grid[i][j].queenB) {
        let queenB = new QueenB(grid[i][j].i, grid[i][j].j, imgb[4])
        pieces.push(queenB);
      }

      if (grid[i][j].pawnW) {
        let pawnW = new PawnW(grid[i][j].i, grid[i][j].j, imgb[0])
        pieces.push(pawnW);
      }
      else if (grid[i][j].rookW) {
        let rookW = new RookW(grid[i][j].i, grid[i][j].j, imgb[5])
        pieces.push(rookW);
      }
      else if (grid[i][j].knightW) {
        let knightW = new KnightW(grid[i][j].i, grid[i][j].j, imgb[3])
        pieces.push(knightW);
      }
      else if (grid[i][j].bishopW) {
        let bishopW = new BishopW(grid[i][j].i, grid[i][j].j, imgb[1])
        pieces.push(bishopW);
      }
      else if (grid[i][j].kingW) {
        let kingW = new KingW(grid[i][j].i, grid[i][j].j, imgb[2])
        pieces.push(kingW);
      }
      else if (grid[i][j].queenW) {
        let queenW = new QueenW(grid[i][j].i, grid[i][j].j, imgb[4])
        pieces.push(queenW);
      }
    }
  }
}

function renderPieces() {
  //console.log("render");
  for (let i = 0; i < pieces.length; i++) {
    //console.log(pieces);  
    pieces[i].Update()
    pieces[i].show()
  }
}

function setStartPosition() {
  /*grid[0][0].rookW = true
  grid[7][0].rookB = true
  grid[7][7].rookB = true
  grid[0][7].rookW = true
  grid[0][1].knightW = true
  grid[7][1].knightB = true
  grid[0][6].knightW = true
  grid[7][6].knightB = true
  grid[0][2].bishopW = true
  grid[7][2].bishopB = true
  grid[0][5].bishopW = true
  grid[7][5].bishopB = true
  grid[0][3].queenW = true
  grid[7][3].queenB = true
  grid[0][4].kingW = true
  grid[7][4].kingB = true*/

  grid[0][0].rookW = true
  grid[0][7].rookB = true
  grid[7][7].rookB = true
  grid[7][0].rookW = true
  grid[1][0].knightW = true
  grid[1][7].knightB = true
  grid[6][0].knightW = true
  grid[6][7].knightB = true
  grid[2][0].bishopW = true
  grid[2][7].bishopB = true
  grid[5][0].bishopW = true
  grid[5][7].bishopB = true
  grid[3][0].queenW = true
  grid[3][7].queenB = true
  grid[4][0].kingW = true
  grid[4][7].kingB = true

  for (let i = 0; i < grid.length; i++) {
    grid[i][1].pawnW = true
  }
  for (let i = 0; i < grid.length; i++) {
    grid[i][6].pawnB = true
  }
}

function mouseClicked() {
  x = mouseX
  y = mouseY
  imgb.set(x, y, color(255, 0, 0))
  for (let i = 0; i < pieces.length; i++) {
    pieces[i].move();
  }
}
