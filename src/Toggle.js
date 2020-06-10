import React from 'react';
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        // This binding is necessary to make `this` work in the callback
        //this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(this);
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    handleClick1(scope) {
        scope.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    onkeyPress(e) {
        console.log(e);
    }

    a (e) {
        console.log(e);
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={this.handleClick.bind(this)}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
                <button onClick={() => this.handleClick1(this)}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
                <input type='text' onKeyPress={(e) => this.onkeyPress(e)}></input>
            </React.Fragment>
        );
    }
}

export default Toggle;