import React, { Component } from "react";
import v4 from "uuid/dist/v4";

class ContactForm extends Component {
  state = {
    numberS: "",
    showErr: false,
    name: "",
    before: {
      opacity: 0,
      display: "block",
      marginLeft: "350px",
      width: "250px",
      transition: "4s",
      background: "red",
      borderRadius: "5px",
      textAlign: "center",
    },
    after: {
      opacity: 1,
      display: "block",
      marginLeft: "0px",
      width: "250px",
      transition: "2s",
      background: "red",
      borderRadius: "5px",
      color: "white",
      textAlign: "center",
    },
  };
  numberC = (e) => {
    let number = e.target.value;

    this.setState({
      numberS: number,
    });
  };
  addContact() {
    const nameInput = document.getElementById("name");
    const contactName = nameInput.value;

    const contacts = this.props.contacts;
    if (contacts.some((contact) => contact.name === contactName)) {
      this.setState({ showErr: true, name: contactName });
      setTimeout(() => {
        this.setState({ showErr: false, name: contactName });
      }, 4000);

      // alert(`${contactName} is already in contacts.`);
      return;
    }

    contacts.push({
      id: v4(),
      name: contactName,
      number: this.state.numberS,
    });

    this.props.updateContacts(contacts);
  }

  render() {
    return (
      <div className="border">
        <div style={this.state.showErr ? this.state.after : this.state.before}>
          {this.state.name} is already in contacts.
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input type="text" class="form-control" id="name" />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Number</label>
          <input
            type="text"
            class="form-control"
            id="number"
            placeholder="Enter number..."
            onChange={this.numberC}
            value={this.state.numberS}
          />
        </div>
        <button
          type="submit"
          class="btn btn-primary"
          onClick={() => this.addContact()}
        >
          Add contacts
        </button>
      </div>
    );
  }
}

export default ContactForm;
