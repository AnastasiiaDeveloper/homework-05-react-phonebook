
import React, { Component } from 'react'
import './App.css'
import v4 from 'uuid/dist/v4'
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group'

// new markup
// logic on removing contact
// conditional rendering on 'Filter' component
// transitions

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  }

  contacts = []

  componentDidMount() {
    let contacts = JSON.parse(localStorage.getItem('contacts'))

    if (!contacts || contacts.length === 0) {
      contacts = [
        { id: v4(), name: 'Rosie Simpson', number: '459-12-56' },
        { id: v4(), name: 'Hermione Kline', number: '443-89-12' },
        { id: v4(), name: 'Eden Clements', number: '645-17-79' },
        { id: v4(), name: 'Annie Copeland', number: '227-91-26' },
      ]
    }

    this.contacts = contacts
    this.setState({ contacts })
  }

  updateContacts = (contacts, id) => {
    const filterFunction = contact => contact.id !== id
    this.contacts = id ? this.contacts.filter(contact => filterFunction(contact)) : contacts
    this.setState({ contacts: id ? contacts.filter(contact => filterFunction(contact)) : contacts })
    localStorage.setItem('contacts', JSON.stringify(this.contacts))
  }

  setDefaultContacts = () => this.setState({ contacts: this.contacts })

  showFilteredContacts = contacts => this.setState({ contacts })

  removeContact = (contacts, id) => this.updateContacts(contacts, id)

  render() {
    return (
      <main>
        <h1>Phonebook</h1>
        <ContactForm
          updateContacts={this.updateContacts}
          contacts={this.state.contacts}
        />
        {
          this.contacts.length > 0 &&
          <Filter
            setDefaultContacts={this.setDefaultContacts}
            showFilteredContacts={this.showFilteredContacts}
            contacts={this.contacts}
          />
        }
        <ContactList
          contacts={this.state.contacts}
          removeContact={this.removeContact}
        />
      </main>
    )
  }
}

class ContactForm extends Component {
  addContact() {
    const nameInput = document.getElementById('name')
    const contactName = nameInput.value

    const contacts = this.props.contacts
    if (contacts.some(contact => contact.name === contactName)) {
      alert(`${contactName} is already in contacts.`)
      return
    }

    const phoneInput = document.getElementById('number')
    const contactPhone = phoneInput.value

    contacts.push({
      id: v4(),
      name: contactName,
      number: contactPhone,
    })

    this.props.updateContacts(contacts)
  }

  render() {
    return (
      <div className="border">
          <h2>Name</h2>
          <input id="name" placeholder="Enter name..." />
          <h2>Number</h2>
          <input id="number" placeholder="Enter number..." />
          <br />
          <button className="add-contact" onClick={() => this.addContact()}>
            Add contact
          </button>
      </div>
    )
  }
}

class Filter extends Component {
  findContactByName() {
    const filterInput = document.getElementById('filter')
    const filterString = filterInput.value.toLowerCase()

    if (!filterString) {
      this.props.setDefaultContacts()
      return
    }

    const filteredContacts = this.props.contacts.filter(contact => contact.name.toLowerCase().includes(filterString))
    this.props.showFilteredContacts(filteredContacts)
  }
  
  render() {
    return (
      <>
        <h2>Find contacts by name</h2>
        <input id="filter" onChange={() => this.findContactByName()} />
      </>
    )
  }
}

class ContactList extends Component {
  removeContact(id) {
    this.props.removeContact(this.props.contacts, id)
  }

  render() {
    return (
      <ul>
        <TransitionGroup>
          {this.props.contacts.map(contact =>
            <CSSTransition
              timeout={250}
              classNames="fade"
            >
              <li>
                {contact.name}: {contact.number}
                <button className="delete-icon" onClick={() => this.removeContact(contact.id)}>
                  &times;
                </button>
              </li>
            </CSSTransition>
          )}
        </TransitionGroup>
      </ul>
    )
  }
}

export default App