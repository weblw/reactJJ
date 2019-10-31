import React from "react";

class Foo extends React.Component {
  state = { count: 0 };
  foo = "foo";
  render() {
    return <React.Fragment>{this.foo}</React.Fragment>;
  }
  counter() {
    this.setState({
      count: this.state.count + 1
    });
    this.setState(
      {
        count: this.state.count + 1
      },
      () => {
        console.log("state值变化了");
      }
    );
    this.setState(this.increment);
  }
  increment(state, props) {
    return { count: state.count + 1 };
  }
}

export default Foo;
