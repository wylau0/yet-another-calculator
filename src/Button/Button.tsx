import React from 'react';
import './Button.css';

interface Props {
    label: string;
    onclick?: React.MouseEventHandler<HTMLButtonElement>
}

class Button extends React.Component<Props> {
    render() {
        return (
            <button
                className={"button button-" + this.props.label.charCodeAt(0)}
                onClick={this.props.onclick}
                style={{ gridArea: "button-" + this.props.label.charCodeAt(0) }}
                value={this.props.label}>{
                    this.props.label}
            </button>
        );
    }
}

export default Button;