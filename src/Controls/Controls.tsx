import React from 'react';
import './Controls.css';
import Button from '../Button/Button';

interface Props { onButtonClick?: (input: string) => void};
interface State { };

class Controls extends React.Component<Props, State> { 
  public render() {
    return (
      <div className="Controls">
        <Button label='C' onclick={this.onButtonClick} /><Button label='⌫' onclick={this.onButtonClick} /><Button label='÷' onclick={this.onButtonClick} />
        <Button label='7' onclick={this.onButtonClick} /><Button label='8' onclick={this.onButtonClick} /><Button label='9' onclick={this.onButtonClick} /><Button label='×' onclick={this.onButtonClick} />
        <Button label='4' onclick={this.onButtonClick} /><Button label='5' onclick={this.onButtonClick} /><Button label='6' onclick={this.onButtonClick} /><Button label='-' onclick={this.onButtonClick} />
        <Button label='1' onclick={this.onButtonClick} /><Button label='2' onclick={this.onButtonClick} /><Button label='3' onclick={this.onButtonClick} /><Button label='+' onclick={this.onButtonClick} />
        <Button label='0' onclick={this.onButtonClick} /><Button label='.' onclick={this.onButtonClick} /><Button label='=' onclick={this.onButtonClick} />
      </div>
    );
  }

  private onButtonClick: React.MouseEventHandler<HTMLButtonElement> = (e: React.MouseEvent) => {
    const target = e.target as HTMLButtonElement;

    if(this.props.onButtonClick) this.props.onButtonClick(target.value);
  }
}

export default Controls;
