import React, { Component } from "react";
import "./App.css";
import Filter from "./Components/Filter";
import ContactList from "./Components/ContactList";
import ContactForm from "./Components/ContactForm";
import v4 from "uuid/dist/v4";

// new markup
// logic on removing contact
// conditional rendering on 'Filter' component
// transitions

class App extends Component {
  state = {
    contacts: [],
    filter: "",
    name: "",
    number: "",
    anim: { marginLeft: "-300px" },
  };

  contacts = [];

  componentDidMount() {
    setTimeout(() => {
      this.setState({ anim: { marginLeft: "0px", transition: "500ms" } });
    }, 700);

    let contacts = JSON.parse(localStorage.getItem("contacts"));

    if (!contacts || contacts.length === 0) {
      contacts = [
        { id: v4(), name: "Rosie Simpson", number: "459-12-56" },
        { id: v4(), name: "Hermione Kline", number: "443-89-12" },
        { id: v4(), name: "Eden Clements", number: "645-17-79" },
        { id: v4(), name: "Annie Copeland", number: "227-91-26" },
      ];
    }

    this.contacts = contacts;
    this.setState({ contacts });
  }

  updateContacts = (contacts, id) => {
    const filterFunction = (contact) => contact.id !== id;
    this.contacts = id
      ? this.contacts.filter((contact) => filterFunction(contact))
      : contacts;
    this.setState({
      contacts: id
        ? contacts.filter((contact) => filterFunction(contact))
        : contacts,
    });
    localStorage.setItem("contacts", JSON.stringify(this.contacts));
  };

  setDefaultContacts = () => this.setState({ contacts: this.contacts });

  showFilteredContacts = (contacts) => this.setState({ contacts });

  removeContact = (contacts, id) => this.updateContacts(contacts, id);

  render() {
    let { anim } = this.state;
    return (
      <main>
        <div style={{ width: "340px", overflow: "hidden" }}>
          <h1 style={anim}>Phonebook</h1>
        </div>

        <ContactForm
          updateContacts={this.updateContacts}
          contacts={this.state.contacts}
        />
        {this.contacts.length > 0 && (
          <Filter
            setDefaultContacts={this.setDefaultContacts}
            showFilteredContacts={this.showFilteredContacts}
            contacts={this.contacts}
          />
        )}
        <ContactList
          contacts={this.state.contacts}
          removeContact={this.removeContact}
        />
      </main>
    );
  }
}

export default App;
