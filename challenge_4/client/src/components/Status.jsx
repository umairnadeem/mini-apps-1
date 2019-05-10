class Status extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            statuses: [`Player ${this.props.player}'s turn`]
        }
    }

    render() {
        return (
            <div></div>
        );
    }
}

export default Status;