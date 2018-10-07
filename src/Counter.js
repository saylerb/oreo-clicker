import React from "react";

class Counter extends React.Component {
  state = { count: 0 };

  handleIncrement = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  };

  render() {
    const { message, count } = this.state;
    return (
      <div>
        <button onClick={this.handleIncrement}>+</button>
        <div data-testid="current-count">Count: {count}</div>
        <div> {message} </div>
      </div>
    );
  }
}

export default Counter;
