import React from 'react';
import Displays from '../Displays/Displays';
import Controls from '../Controls/Controls';
import './Calculator.css';

interface Props { }
interface State { input: string }

class Calculator extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = { input: '' };
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    public render() {
        return (
            <div>
                <Displays input={this.state.input} />
                <Controls onButtonClick={this.onButtonClick} />
            </div>
        );
    }

    private onButtonClick(input: string): void {
        console.log('INPUT', input)

        switch (input) {
            case '=':
                // Do nothing
                break;
            case '⌫':
                this.setState((prevState, props) => ({
                    input: prevState.input.length > 0 ? prevState.input.slice(0, -1) : ''
                }));
                break;
                break;
            case 'C':
                this.setState({ input: '' });
                break;
            default:
                this.setState((prevState, props) => ({
                    input: prevState.input + input
                }));
                break;
        }
    }
}

export default Calculator;