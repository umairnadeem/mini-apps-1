class Player {
    constructor(name, symbol) {
        this.name = name;
        this.symbol = symbol;
        this.board = null;
    }

    ready(board) {
        this.board = board.matrix.map(row => row.map(() => 0));
    }

    toggleCell(cell, rowIndex, colIndex) {
        cell.append(this.symbol);
        this.board[rowIndex][colIndex] = 1;
    }
}

class Board {
    constructor(n) {
        this.size = n;
        this.matrix = null;
        this.pieces = 0;
    }

    clear() {
        var table = document.getElementById('board');
        while (table.hasChildNodes()) {
            table.removeChild(table.firstChild);
        }
    }

    construct() {
        var table = document.getElementById('board');
        var row, col;
        var arr = [];
        for (var r = 0; r < this.size; r++) {
            row = table.insertRow(r);
            row.id = r;
            arr.push([]);
            for (var c = 0; c < this.size; c++) {
                col = row.insertCell(c);
                col.id = c;
                arr[r].push(col);
            }
        }
        this.matrix = arr;
    }

    won(player) {
        var flippedBoard = player.board.map(row => row.slice().reverse());
        return this.rowWin(player.board) || this.colWin(player.board) || this.diagWin(player.board) || this.diagWin(flippedBoard);
    }

    rowWin(board) {
        var bool = false;
        board.forEach(row => {
            bool = row.reduce((accum, elem) => elem && accum == elem, true) ? true : bool;
        });
        return bool;
    }

    colWin(board) {
        var bool = false;
        board.forEach((col, colIndex) => {
            bool = board.reduce((accum, row) => row[colIndex] && accum == row[colIndex], true) ? true : bool;
        });
        return bool;
    }

    diagWin(board) {
        var bool = false;
        bool = board.reduce((accum, row, index) => row[index] && accum == row[index], true) ? true : bool;
        return bool;
    }
}

class Round {
    constructor(board, ...players) {
        this.inSession = false;
        this.prevWinnerIndex = null;
        this.board = board;
        this.players = players;
        this.currPlayer = null;
        this.playerIndex = 0;
    }

    begin() {
        this.board.pieces = 0;
        this.playerIndex = 0;
        this.inSession = true;
        this.nextPlayer();
        this.board.clear();
        this.board.construct();
        this.players.forEach(player => {
            player.ready(this.board);
        });
        this.board.matrix.forEach((row, r) => {
            row.forEach((col, c) => {
                col.addEventListener('click', this.handleMove.bind(this, col, r, c));
            });
        });
    }

    handleMove(cell, rowIndex, colIndex) {
        if (cell.innerHTML === '' && this.inSession) {
            this.currPlayer.toggleCell(cell, rowIndex, colIndex);
            this.board.pieces++;
            if (this.board.won(this.currPlayer)) {
                this.wonBy(this.currPlayer);
                this.inSession = false;
                return;
            } else if (this.board.pieces === Math.pow(this.board.size, 2)) {
                this.tie();
                this.inSession = false;
                return;
            }
            this.nextPlayer();
        }
    }

    wonBy(player) {
        var status = document.getElementById('status');
        status.innerHTML = `Player ${player.symbol} wins the game!`;
        this.prevWinnerIndex = this.playerIndex;
    }

    tie() {
        var status = document.getElementById('status');
        status.innerHTML = `It's a tie!`;
    }

    nextPlayer() {
        this.playerIndex = this.prevWinnerIndex !== null ? this.prevWinnerIndex : this.playerIndex < this.players.length - 1 ? this.playerIndex + 1 : 0;
        this.prevWinnerIndex = null;
        this.currPlayer = this.players[this.playerIndex];
        var status = document.getElementById('status');
        status.innerHTML = `Player ${this.currPlayer.symbol}'s turn.`;
    }
}

window.onload = () => {
    var board = new Board(5);
    var playerOne = new Player('john', 'o');
    var playerTwo = new Player('jack', 'x');

    var round = new Round(board, playerOne, playerTwo);

    round.begin();

    var reset = document.getElementById('reset');
    reset.addEventListener('click', round.begin.bind(round));
};

