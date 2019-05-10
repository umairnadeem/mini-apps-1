class Player {
    constructor(color) {
        this.color = color;
        this.board = null;
    }

    ready(size) {
        // this.board = new Array(size).fill(new Array(size).fill(0));
        this.board = new Array(size).fill().map(x => new Array(size).fill(0));
    }

    move(x, y) {
        if (this.board !== null) {
            this.board[y][x] = 1;
            console.log(this.board)
        }
    }
}

export default Player;