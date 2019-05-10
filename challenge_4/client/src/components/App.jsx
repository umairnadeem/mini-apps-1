import Heading from './Heading.jsx';
import Board from './Board.jsx';
import Status from './Status.jsx';
import Player from './Player.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 5,
            status: 0,
            player: 0,
            players: [new Player('red'), new Player('black')]
        };
        this.init = this.init.bind(this);
    }

    componentDidMount() {
        window.addEventListener('load', this.init);
     }

    init() {
        this.state.players.forEach(player => {
            player.ready(this.state.size);
        });
    }

    handleClick(e, player) {
        var isColored = false;
        var col = $(e.target).attr('data-x').toString();
        $(`td[data-x="${col}"]`).get().reverse().forEach(elem => {
            if ($(elem).html() == '' && !isColored) {
                $(elem).attr('bgcolor', `${player.color}`);
                $(elem).html(' ')
                player.move($(elem).attr('data-x'), $(elem).attr('data-y'));
                isColored = true;
                console.log('hit')
            }
        });
        if (this.won(player)) {
            // this.gameWon(player);
            console.log('won');
        }
        this.setState(state => ({
            player: state.player < state.players.length - 1 ? state.player + 1 : 0
        }));
    }

    won(player) {
        // this.wonDiag(player) || 
        return this.wonCol(player) || this.wonRow(player);
    }

    wonRow(player) {
        var bool = false;
        player.board.forEach(row => {
            if (row.reduce((accum, elem) => accum + elem) >= 4) {
                bool = true;
            }
        });
        return bool;
    }

    wonCol(player) {
        var bool = false;
        player.board.forEach((col, x) => {
            if (player.board.reduce((accum, elem) => accum + elem[x], 0) >= 4) {
                bool = true;
            }
        });
        return bool;
    }

    render() {
        return (
            <div>
                <Heading />
                <Board size={this.state.size} handleClick={(e) => this.handleClick(e, this.state.players[this.state.player])} />
                <Status status={this.state.status} player={this.state.players[this.state.player]} />
            </div>
        );
    }
}

export default App;