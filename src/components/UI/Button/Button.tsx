import React from 'react';

type ButtonProps = {
  btnStyle: 'btn-primary' | 'btn-secondary';
  text: string;
  submit: boolean;
  onClick: () => void;
};

class Button extends React.Component<ButtonProps> {
  render() {
    return (
      <button
        type={this.props.submit ? 'submit' : 'button'}
        className={`btn ${this.props.btnStyle}`}
        onClick={this.props.onClick}
      >
        {this.props.text}
      </button>
    );
  }
}

export default Button;
