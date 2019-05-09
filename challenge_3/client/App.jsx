const Checkout = (props) => (
    <div></div>
);
const F1 = (props) => (
    <div>
        <form>
            <h1>Basic Info</h1>
            <label>Name:</label>
            <input type="text" id='name'></input> 
            <label>Email:</label>
            <input type="text" id='email'></input> 
            <label>Password:</label>
            <input type="text" id='password'></input> 
        </form>
    </div>
);
const F2 = (props) => (
    <div>
        <form>
            <h1>Ship to</h1>
            <label>Line 1:</label>
            <input type="text" id='line1'></input> 
            <label>Line 2:</label>
            <input type="text" id='line2'></input> 
            <label>City:</label>
            <input type="text" id='city'></input>
            <label>State:</label>
            <input type="text" id='state'></input> 
            <label>Zip code:</label>
            <input type="text" id='zip'></input> 
        </form>
    </div>
);

const F3 = (props) => (
    <div>
        <form>
            <h1>Gimme ur credit card.. (trust me)</h1>
            <label>Credit Card #:</label>
            <input type="text" id='cc'></input> 
            <label>Expiry:</label>
            <input type="text" id='expiry'></input> 
            <label>CVV:</label>
            <input type="text" id='cvv'></input>
            <label>Billing Zip Code</label>
            <input type="text" id='billing_zip'></input> 
        </form>
    </div>
);
const Purchase = (props) => (
    <div>
        <p>Gotcha:</p>
        <div>{props.data}</div>
    </div>
);
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forms: [<Checkout/>, <F1/>, <F2/>, <F3/>, <Purchase/>],
            stage: 0,
            data: [],
            isPurchased: false
        }
    }
    next() {
        var formData = {};
        $('input[id]').each(function(){
            formData[this.id] = $(this).val();
        });
        this.setState(state => ({
            stage: state.stage < state.forms.length - 1 ? state.stage + 1 : 0,
            data: state.stage ? $.isEmptyObject(formData) ? state.data : [state.data.concat(formData).reduce((accum, obj) => Object.assign(accum, obj))] : [],
            isPurchased: state.stage === 4 ? true : false
        }));
    }

    componentDidUpdate() {
        if (this.state.isPurchased) {
            $.ajax({
                method: 'POST',
                url: 'http://localhost:3000/purchased',
                data: {data: this.state.data[0]},
                success: (data) => console.log(data)
            });
        }
    }

    render() {
        return (
            <div>
                {React.cloneElement(this.state.forms[this.state.stage], {data: this.state.data[0] ? JSON.stringify(this.state.data[0]) : ''})}
                <button onClick={this.next.bind(this)}>{this.state.stage ? this.state.stage === 4 ? 'Purchase' : 'Next' : 'Checkout'}</button>
            </div>
        ); 
    }
}

export default App;