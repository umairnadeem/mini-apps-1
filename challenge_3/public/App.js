const Checkout = props => React.createElement("div", null);
const F1 = props => React.createElement(
    "div",
    null,
    React.createElement(
        "form",
        null,
        React.createElement(
            "h1",
            null,
            "Basic Info"
        ),
        React.createElement(
            "label",
            null,
            "Name:"
        ),
        React.createElement("input", { type: "text", id: "name" }),
        React.createElement(
            "label",
            null,
            "Email:"
        ),
        React.createElement("input", { type: "text", id: "email" }),
        React.createElement(
            "label",
            null,
            "Password:"
        ),
        React.createElement("input", { type: "text", id: "password" })
    )
);
const F2 = props => React.createElement(
    "div",
    null,
    React.createElement(
        "form",
        null,
        React.createElement(
            "h1",
            null,
            "Ship to"
        ),
        React.createElement(
            "label",
            null,
            "Line 1:"
        ),
        React.createElement("input", { type: "text", id: "line1" }),
        React.createElement(
            "label",
            null,
            "Line 2:"
        ),
        React.createElement("input", { type: "text", id: "line2" }),
        React.createElement(
            "label",
            null,
            "City:"
        ),
        React.createElement("input", { type: "text", id: "city" }),
        React.createElement(
            "label",
            null,
            "State:"
        ),
        React.createElement("input", { type: "text", id: "state" }),
        React.createElement(
            "label",
            null,
            "Zip code:"
        ),
        React.createElement("input", { type: "text", id: "zip" })
    )
);

const F3 = props => React.createElement(
    "div",
    null,
    React.createElement(
        "form",
        null,
        React.createElement(
            "h1",
            null,
            "Gimme ur credit card.. (trust me)"
        ),
        React.createElement(
            "label",
            null,
            "Credit Card #:"
        ),
        React.createElement("input", { type: "text", id: "cc" }),
        React.createElement(
            "label",
            null,
            "Expiry:"
        ),
        React.createElement("input", { type: "text", id: "expiry" }),
        React.createElement(
            "label",
            null,
            "CVV:"
        ),
        React.createElement("input", { type: "text", id: "cvv" }),
        React.createElement(
            "label",
            null,
            "Billing Zip Code"
        ),
        React.createElement("input", { type: "text", id: "billing_zip" })
    )
);
const Purchase = props => React.createElement(
    "div",
    null,
    React.createElement(
        "p",
        null,
        "Gotcha:"
    ),
    React.createElement(
        "div",
        null,
        props.data
    )
);
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forms: [React.createElement(Checkout, null), React.createElement(F1, null), React.createElement(F2, null), React.createElement(F3, null), React.createElement(Purchase, null)],
            stage: 0,
            data: [],
            isPurchased: false
        };
    }
    next() {
        var formData = {};
        $('input[id]').each(function () {
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
                data: { data: this.state.data[0] },
                success: data => console.log(data)
            });
        }
    }

    render() {
        return React.createElement(
            "div",
            null,
            React.cloneElement(this.state.forms[this.state.stage], { data: this.state.data[0] ? JSON.stringify(this.state.data[0]) : '' }),
            React.createElement(
                "button",
                { onClick: this.next.bind(this) },
                this.state.stage ? this.state.stage === 4 ? 'Purchase' : 'Next' : 'Checkout'
            )
        );
    }
}

export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9BcHAuanN4Il0sIm5hbWVzIjpbIkNoZWNrb3V0IiwicHJvcHMiLCJGMSIsIkYyIiwiRjMiLCJQdXJjaGFzZSIsImRhdGEiLCJBcHAiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwic3RhdGUiLCJmb3JtcyIsInN0YWdlIiwiaXNQdXJjaGFzZWQiLCJuZXh0IiwiZm9ybURhdGEiLCIkIiwiZWFjaCIsImlkIiwidmFsIiwic2V0U3RhdGUiLCJsZW5ndGgiLCJpc0VtcHR5T2JqZWN0IiwiY29uY2F0IiwicmVkdWNlIiwiYWNjdW0iLCJvYmoiLCJPYmplY3QiLCJhc3NpZ24iLCJjb21wb25lbnREaWRVcGRhdGUiLCJhamF4IiwibWV0aG9kIiwidXJsIiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXIiLCJjbG9uZUVsZW1lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiYmluZCJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsV0FBWUMsS0FBRCxJQUNiLGdDQURKO0FBR0EsTUFBTUMsS0FBTUQsS0FBRCxJQUNQO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FESjtBQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FGSjtBQUdJLHVDQUFPLE1BQUssTUFBWixFQUFtQixJQUFHLE1BQXRCLEdBSEo7QUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBSko7QUFLSSx1Q0FBTyxNQUFLLE1BQVosRUFBbUIsSUFBRyxPQUF0QixHQUxKO0FBTUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQU5KO0FBT0ksdUNBQU8sTUFBSyxNQUFaLEVBQW1CLElBQUcsVUFBdEI7QUFQSjtBQURKLENBREo7QUFhQSxNQUFNRSxLQUFNRixLQUFELElBQ1A7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURKO0FBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUZKO0FB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LE1BREw7QUFFSEMscUJBQUssaUNBRkY7QUFHSDNCLHNCQUFNLEVBQUNBLE1BQU0sS0FBS0ssS0FBTCxDQUFXTCxJQUFYLENBQWdCLENBQWhCLENBQVAsRUFISDtBQUlINEIseUJBQVU1QixJQUFELElBQVU2QixRQUFRQyxHQUFSLENBQVk5QixJQUFaO0FBSmhCLGFBQVA7QUFNSDtBQUNKOztBQUVEK0IsYUFBUztBQUNMLGVBQ0k7QUFBQTtBQUFBO0FBQ0s3QixrQkFBTThCLFlBQU4sQ0FBbUIsS0FBSzNCLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQixLQUFLRCxLQUFMLENBQVdFLEtBQTVCLENBQW5CLEVBQXVELEVBQUNQLE1BQU0sS0FBS0ssS0FBTCxDQUFXTCxJQUFYLENBQWdCLENBQWhCLElBQXFCaUMsS0FBS0MsU0FBTCxDQUFlLEtBQUs3QixLQUFMLENBQVdMLElBQVgsQ0FBZ0IsQ0FBaEIsQ0FBZixDQUFyQixHQUEwRCxFQUFqRSxFQUF2RCxDQURMO0FBRUk7QUFBQTtBQUFBLGtCQUFRLFNBQVMsS0FBS1MsSUFBTCxDQUFVMEIsSUFBVixDQUFlLElBQWYsQ0FBakI7QUFBd0MscUJBQUs5QixLQUFMLENBQVdFLEtBQVgsR0FBbUIsS0FBS0YsS0FBTCxDQUFXRSxLQUFYLEtBQXFCLENBQXJCLEdBQXlCLFVBQXpCLEdBQXNDLE1BQXpELEdBQWtFO0FBQTFHO0FBRkosU0FESjtBQU1IO0FBeEM2Qjs7QUEyQ2xDLGVBQWVOLEdBQWYiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ2hlY2tvdXQgPSAocHJvcHMpID0+IChcbiAgICA8ZGl2PjwvZGl2PlxuKTtcbmNvbnN0IEYxID0gKHByb3BzKSA9PiAoXG4gICAgPGRpdj5cbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICA8aDE+QmFzaWMgSW5mbzwvaDE+XG4gICAgICAgICAgICA8bGFiZWw+TmFtZTo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9J25hbWUnPjwvaW5wdXQ+IFxuICAgICAgICAgICAgPGxhYmVsPkVtYWlsOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD0nZW1haWwnPjwvaW5wdXQ+IFxuICAgICAgICAgICAgPGxhYmVsPlBhc3N3b3JkOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD0ncGFzc3dvcmQnPjwvaW5wdXQ+IFxuICAgICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4pO1xuY29uc3QgRjIgPSAocHJvcHMpID0+IChcbiAgICA8ZGl2PlxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgIDxoMT5TaGlwIHRvPC9oMT5cbiAgICAgICAgICAgIDxsYWJlbD5MaW5lIDE6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPSdsaW5lMSc+PC9pbnB1dD4gXG4gICAgICAgICAgICA8bGFiZWw+TGluZSAyOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD0nbGluZTInPjwvaW5wdXQ+IFxuICAgICAgICAgICAgPGxhYmVsPkNpdHk6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPSdjaXR5Jz48L2lucHV0PlxuICAgICAgICAgICAgPGxhYmVsPlN0YXRlOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD0nc3RhdGUnPjwvaW5wdXQ+IFxuICAgICAgICAgICAgPGxhYmVsPlppcCBjb2RlOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD0nemlwJz48L2lucHV0PiBcbiAgICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuKTtcblxuY29uc3QgRjMgPSAocHJvcHMpID0+IChcbiAgICA8ZGl2PlxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgIDxoMT5HaW1tZSB1ciBjcmVkaXQgY2FyZC4uICh0cnVzdCBtZSk8L2gxPlxuICAgICAgICAgICAgPGxhYmVsPkNyZWRpdCBDYXJkICM6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPSdjYyc+PC9pbnB1dD4gXG4gICAgICAgICAgICA8bGFiZWw+RXhwaXJ5OjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD0nZXhwaXJ5Jz48L2lucHV0PiBcbiAgICAgICAgICAgIDxsYWJlbD5DVlY6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPSdjdnYnPjwvaW5wdXQ+XG4gICAgICAgICAgICA8bGFiZWw+QmlsbGluZyBaaXAgQ29kZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD0nYmlsbGluZ196aXAnPjwvaW5wdXQ+IFxuICAgICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4pO1xuY29uc3QgUHVyY2hhc2UgPSAocHJvcHMpID0+IChcbiAgICA8ZGl2PlxuICAgICAgICA8cD5Hb3RjaGE6PC9wPlxuICAgICAgICA8ZGl2Pntwcm9wcy5kYXRhfTwvZGl2PlxuICAgIDwvZGl2PlxuKTtcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZm9ybXM6IFs8Q2hlY2tvdXQvPiwgPEYxLz4sIDxGMi8+LCA8RjMvPiwgPFB1cmNoYXNlLz5dLFxuICAgICAgICAgICAgc3RhZ2U6IDAsXG4gICAgICAgICAgICBkYXRhOiBbXSxcbiAgICAgICAgICAgIGlzUHVyY2hhc2VkOiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuICAgIG5leHQoKSB7XG4gICAgICAgIHZhciBmb3JtRGF0YSA9IHt9O1xuICAgICAgICAkKCdpbnB1dFtpZF0nKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBmb3JtRGF0YVt0aGlzLmlkXSA9ICQodGhpcykudmFsKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7XG4gICAgICAgICAgICBzdGFnZTogc3RhdGUuc3RhZ2UgPCBzdGF0ZS5mb3Jtcy5sZW5ndGggLSAxID8gc3RhdGUuc3RhZ2UgKyAxIDogMCxcbiAgICAgICAgICAgIGRhdGE6IHN0YXRlLnN0YWdlID8gJC5pc0VtcHR5T2JqZWN0KGZvcm1EYXRhKSA/IHN0YXRlLmRhdGEgOiBbc3RhdGUuZGF0YS5jb25jYXQoZm9ybURhdGEpLnJlZHVjZSgoYWNjdW0sIG9iaikgPT4gT2JqZWN0LmFzc2lnbihhY2N1bSwgb2JqKSldIDogW10sXG4gICAgICAgICAgICBpc1B1cmNoYXNlZDogc3RhdGUuc3RhZ2UgPT09IDQgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXNQdXJjaGFzZWQpIHtcbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL3B1cmNoYXNlZCcsXG4gICAgICAgICAgICAgICAgZGF0YToge2RhdGE6IHRoaXMuc3RhdGUuZGF0YVswXX0sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge1JlYWN0LmNsb25lRWxlbWVudCh0aGlzLnN0YXRlLmZvcm1zW3RoaXMuc3RhdGUuc3RhZ2VdLCB7ZGF0YTogdGhpcy5zdGF0ZS5kYXRhWzBdID8gSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZS5kYXRhWzBdKSA6ICcnfSl9XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLm5leHQuYmluZCh0aGlzKX0+e3RoaXMuc3RhdGUuc3RhZ2UgPyB0aGlzLnN0YXRlLnN0YWdlID09PSA0ID8gJ1B1cmNoYXNlJyA6ICdOZXh0JyA6ICdDaGVja291dCd9PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTsgXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7Il19