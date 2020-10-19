import React, { Component } from "react"

// let Heading = (props) => {
//     return (
//         <h1 className="Greeting">
//             {props.words}
//             </h1>
//     )
// }

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text,
            name: '',
            hasLoaded: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleInputChange = (value) => {
        this.setState({ name: value });
    }

    handleClick(event) {
        this.setState({
            hasLoaded: true
        });
    }

    componentDidMount() {
        this.setState({ hasLoaded: true });
    }

    render() {
        if (this.state.hasLoaded) {
            return (
                <React.Fragment>
                    <div>
                        <h1 onChange={(event) => { this.setState({ words: event.target.value }) }}>{this.state.text}</h1>

                        <input
                            placeholder={"yeet"}
                            value={this.state.name}
                            onChange={(event) => { this.handleInputChange(event.target.value) }} />

                        <button onClick={this.handleClick}>button</button>
                    </div>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <h1>loading...</h1>
                    <button onClick={this.handleClick}>button</button>
                </React.Fragment>
            )
        }

    }
}

export default App