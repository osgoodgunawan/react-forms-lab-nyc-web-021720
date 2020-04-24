import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message : ""
    };
  }

  handleChange = event =>{
    this.setState({
       message : event.target.value
    })
  }

  render() {
    let remainNumber= this.props.maxChars - this.state.message.length ;
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.message} />
         
        {remainNumber}
      </div>
    );
  }
}

export default TwitterMessage;
