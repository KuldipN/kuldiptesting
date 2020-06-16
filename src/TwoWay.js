import React from 'react';
class TwoWay extends React.Component {
    constructor() {
        super();
        this.state = { value1: '', value2: '' }
    }
    handleChange1 = (e) => {
        this.setState({ value1: e.target.value });
    }
    handleChange2 = (e) => {
        this.setState({ value2: e.target.value });
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange1} />
                <div>{this.state.value1}</div>
                <input type="text" value={this.state.value} onChange={this.handleChange2} />
                <div>{this.state.value2}</div>
            </div>
        )
    }
}

export default TwoWay;