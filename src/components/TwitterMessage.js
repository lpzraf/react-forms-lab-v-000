import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }


  handleInputChange = event => {
    this.setState({
      message: event.target.value
    })
  }



  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event => this.handleInputChange(event)} name="message" id="message" value={this.state.message}
 />        
        <p>{this.props.maxChars - this.state.message.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;

