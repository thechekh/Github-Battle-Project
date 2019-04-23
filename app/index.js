var React = require('react');
var ReactDOM = require('react-dom');

class index extends React.Component {
    render() {
        return (
            <div>
                <h1>ComponentSimple</h1>
            </div>
        )
    }
}

ReactDOM.render(
    <App />, document.getElementById('app')
)
