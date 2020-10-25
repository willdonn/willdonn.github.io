import React from 'react';
import './App.css';

class Contact extends React.Component {
    constructor(props) {
	    super(props);
	    this.state = { feedback: '', name: '', subject: '', message: '', email: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
      if (event.target.id === "name") {
        this.setState({name: event.target.value});
      } else if (event.target.id === "subject") {
        this.setState({subject: event.target.value});
      } else if (event.target.id === "email") {
        this.setState({email: event.target.value});
      } else if (event.target.id === "message") {
        this.setState({message: event.target.value});
      }
    }

    handleSubmit(event){
      this.setState({feedback: 'Sent!'});
      setTimeout(function() { //Start the timer
        this.setState({feedback: ''}) //After 1 second, set render to true
    }.bind(this), 1000);
    }

    render() {
      return (
        <form>
            <h1>Contact</h1>
            
            <div class="pad">
              <textarea id="name" type="text" placeholder="Name" value={this.state.name} onChange={this.handleChange}></textarea><br/>
            </div>

            <div class="pad">
             <textarea id="email" type="text" placeholder="Email" value={this.state.email} onChange={this.handleChange}></textarea><br/>
           </div>
            
            <div class="pad">
              <textarea id="subject" type="text" placeholder="Subject" value={this.state.subject} onChange={this.handleChange}></textarea><br/>
            </div>

            <div class="pad message">
              <textarea id="message" class="message" type="text" placeholder="Message" value={this.state.message} onChange={this.handleChange}></textarea><br/>
            </div>
            

            <div class="pad"><button onClick={this.handleSubmit}>Send</button></div><br/>
            <ul>{this.state.feedback}</ul>
        </form>
      )
    }
  }

export default Contact;