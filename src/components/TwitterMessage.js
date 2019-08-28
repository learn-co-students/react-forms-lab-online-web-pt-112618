import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    //super() is necessary in order to use 'this' 

    this.state = { message: ''};
    //set the state as a blank string
  }

  updateMessage = event => {
    this.setState({
      message: event.target.value
      //method #updateMessage will override/add to the string stored as the value for the key 'message'
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message"
         onChange={event => this.updateMessage(event)} value={this.state.message} />
         {this.props.maxChars-this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
