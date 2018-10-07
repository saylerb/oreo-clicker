import React from "react";

class Counter extends React.Component {
  state = { message: "", count: 0 };

  handleIncrement = () => {
    this.setState(prevState => {
      return {
        message:
          prevState.count === 10
            ? "Alright you can stop now"
            : prevState.message,
        count: prevState.count + 1
      };
    });
  };

  render() {
    const { message, count } = this.state;
    return (
      <div>
        <div data-testid="increment" onClick={this.handleIncrement}>
          {this.props.children}
        </div>
        <div data-testid="current-count">Count: {count}</div>
        <div> {message} </div>
      </div>
    );
  }
}

export default Counter;
