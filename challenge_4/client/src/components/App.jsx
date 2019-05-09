import Heading from './Heading.jsx';
import Board from './Board.jsx';
import Status from './Status.jsx';

class App extends React.Component {
    render() {
        return (
            <div>
                <Heading/>
                <Board size={5}/>
                <Status/>
            </div>
        );
    }
}

export default App;