import { Component, PureComponent } from "react";

class B extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.value}</h4>
        <input
          type="text"
          onChange={(event) => {
            console.log("value from B", event.target.value);
            this.props.onValueSend(event.target.value);
          }}
        />
      </div>
    );
  }
}

function C(props) {
  return <h6>From C: {props.value}</h6>;
}

class A extends PureComponent {
  constructor(props) {
    super(props);
    console.log("A constructor");
  }

  componentDidMount() {
    console.log("A componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("A componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("A componentWillUnmount");
  }

//   shouldComponentUpdate(newProps, newState) {
//     // console.log('newState', newState)
//     if (
//       this.state.message !== newState.message ||
//       this.state.text !== newState.text
//     ) {
//       return true;
//     }
//     return false;
//   }

  state = {
    message: "Hello from A",
    text: "",
  };

  render() {
    console.log("A render");
    return (
      <div>
        <C value={this.state.text} />
        <B
          value={this.state.message}
          onValueSend={(value) => {
            console.log("value from A", value);
            this.setState({
              text: value,
            });
          }}
        />
      </div>
    );
  }
}

export default A;
