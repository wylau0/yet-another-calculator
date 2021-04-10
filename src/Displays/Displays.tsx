import React from 'react';
import './Displays.css';
import calculate from '../Logic/Calculate';

interface Props {
    input: string;
};
interface State { };

class Displays extends React.Component<Props, State> {
    public render() {
        var input = this.props.input.replace('×', '*').replace('÷', '/');

        var output = calculate(input).result;
        console.log(this.props.input, output);
        if (this.props.input === output || output === '') output = '0';

        return (
            <div className="Displays">
                <div className="input">{this.props.input}</div>
                <div className="output">{output}</div>
            </div>
        );
    }
}

export default Displays;