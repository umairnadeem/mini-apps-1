import Square from './Square.jsx';

class Board extends React.Component{
    constructor(props) {
        super(props);
    }

    generate(size) {
        var arr = [];
        for (let x = 0; x < size; x++) {
            arr.push(<Square x={x}/>);
        }
        return arr;
    }

    render() {
        return (
            <table>
                <tbody>
                {this.generate(this.props.size).map((elem, y, arr) => <tr>{arr.map(elem => React.cloneElement(elem, {y, handleClick: this.props.handleClick}))}</tr>)}
                </tbody>
            </table>
        );
    }
}

export default Board;