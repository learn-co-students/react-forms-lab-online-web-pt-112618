import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      chars: this.props.maxChars
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value,
      chars: this.state.chars -1
    })
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={event => {this.handleChange(event)}} />
        <p>Counter: {this.state.chars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
